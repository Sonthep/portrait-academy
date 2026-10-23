// Cloudflare Worker — Portrait Academy AI Photo Coach
// Secret required: OPENAI_API_KEY (set using Cloudflare dashboard, never commit it).
// Variable: ALLOWED_ORIGIN = https://sonthep.github.io
export default {
 async fetch(request,env){
  const origin=request.headers.get('Origin')||'';
  const allowed=env.ALLOWED_ORIGIN||'https://sonthep.github.io';
  const headers={'Access-Control-Allow-Origin':allowed,'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Vary':'Origin','Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'};
  const reply=(data,status=200)=>new Response(JSON.stringify(data),{status,headers});
  if(origin!==allowed)return reply({error:'Origin not allowed'},403);
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
  if(request.method!=='POST'||new URL(request.url).pathname!=='/analyze')return reply({error:'Not found'},404);
  if(!env.OPENAI_API_KEY)return reply({error:'AI service not configured'},503);
  if(Number(request.headers.get('content-length')||0)>7500000)return reply({error:'Image too large'},413);
  let data;try{data=await request.json()}catch{return reply({error:'Invalid JSON'},400)}
  const image=data?.image;
  if(typeof image!=='string'||image.length>7100000||!/^data:image\/(jpeg|png|webp);base64,[a-zA-Z0-9+/=]+$/.test(image))return reply({error:'Invalid image'},400);
  try{
   const res=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Authorization':'Bearer '+env.OPENAI_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({
    model:'gpt-4.1-mini',max_output_tokens:850,
    input:[{role:'user',content:[
     {type:'input_text',text:'คุณคือครูสอนถ่าย Portrait ตอบเป็นภาษาไทย วิเคราะห์เฉพาะภาพที่มองเห็นอย่างระมัดระวัง ไม่ระบุตัวตนหรืออนุมานคุณลักษณะอ่อนไหวของบุคคล ให้คะแนน 1-10 พร้อมเหตุผลสำหรับ 1) แสง 2) องค์ประกอบ 3) สี 4) ท่าทาง/การจัดตัวแบบ และเสนอ 3 ขั้นตอนที่ถ่ายซ้ำด้วย vivo V30 ได้จริง หากไม่เห็นรายละเอียดให้ระบุความไม่แน่ใจ'},
     {type:'input_image',image_url:image,detail:'low'}
    ]}]
   })});
   const json=await res.json();
   if(!res.ok)return reply({error:'AI provider error ('+res.status+')'},502);
   const analysis=(json.output||[]).flatMap(x=>x.content||[]).filter(x=>x.type==='output_text').map(x=>x.text).join('\n');
   return reply({analysis:analysis||'AI did not return an analysis'});
  }catch{return reply({error:'AI service unavailable'},502)}
 }
};