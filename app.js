const tasks = [
  'Front lighting', '45° lighting', 'Side lighting', 'Back lighting', 'Top lighting', 'Low angle',
  'Eye level', 'Rule of Thirds', 'Leading Lines', 'Symmetry', 'Negative Space', 'Night close-up'
];

// tasks = ดัชนีภารกิจใน tasks[] ที่เกี่ยวข้องกับบทเรียนนั้น
const lessons = [
  {
    title: 'Lighting Direction', tasks: [0, 1, 2, 3, 4],
    summary: 'ทิศทางแสงกำหนดอารมณ์และรูปทรงของใบหน้า',
    tips: [
      'แสงหน้า: เงาน้อย ภาพนุ่ม ปลอดภัยสำหรับผู้เริ่มต้น',
      'แสง 45°: เกิดเงาใต้จมูกและโหนกแก้ม ใบหน้ามีมิติ นิยมที่สุด',
      'แสงข้าง: ดราม่า เห็นเท็กซ์เจอร์ ครึ่งหน้าอยู่ในเงา',
      'แสงหลัง: ได้ขอบแสง (rim light) ให้เปิดหน้าด้วยรีเฟลกเตอร์หรือแตะโฟกัสที่ใบหน้า',
      'แสงบน: เงาใต้ตาเข้ม ใช้อย่างระมัดระวัง'
    ]
  },
  {
    title: 'Composition & Camera Angle', tasks: [5, 6, 7],
    summary: 'จัดวางตัวแบบและเลือกมุมกล้องให้ภาพมีจุดสนใจชัดเจน',
    tips: [
      'เปิด Grid แล้ววางดวงตาไว้บนเส้นแบ่งแนวนอนส่วนบน',
      'มุมต่ำทำให้ตัวแบบดูสูงและทรงพลัง มุมระดับสายตาดูเป็นธรรมชาติ',
      'เว้นพื้นที่หน้าตัวแบบในทิศที่มอง',
      'ระวังเส้นขอบภาพตัดข้อต่อ เช่น ข้อมือ ข้อเท้า'
    ]
  },
  {
    title: 'Posing & Body Language', tasks: [],
    summary: 'ท่าทางที่ผ่อนคลายทำให้ภาพดูเป็นธรรมชาติ',
    tips: [
      'ให้ตัวแบบเบี่ยงไหล่เล็กน้อยแทนการยืนตรงเข้าหากล้อง',
      'ให้มือมีกิจกรรม เช่น จับผม แจ็กเก็ต หรือกระเป๋า',
      'ยืดคางออกและลงเล็กน้อยเพื่อลดเหนียง',
      'ชวนคุยและถ่ายต่อเนื่อง ท่าที่ดีมักมาหลังช็อตที่ 5–10'
    ]
  },
  {
    title: 'Exposure & Focus', tasks: [],
    summary: 'ควบคุมความสว่างและความคมชัดที่ใบหน้า',
    tips: [
      'แตะที่ดวงตา แล้วลากแถบ EV ลงเมื่อฉากสว่างจัดเพื่อกันไฮไลต์ไหม้',
      'กดค้างเพื่อล็อก AE/AF เมื่อตัวแบบขยับ',
      'ใช้โหมด Portrait เมื่ออยากได้ฉากหลังเบลอ แต่ตรวจขอบผมทุกครั้ง',
      'ถ่ายหลายช็อตเผื่อภาพสั่น'
    ]
  },
  {
    title: 'Natural Light', tasks: [1, 2],
    summary: 'ใช้แสงธรรมชาติให้เป็นประโยชน์',
    tips: [
      'ชั่วโมงทอง (หลังรุ่งสางและก่อนอาทิตย์ตก) แสงนุ่มและอุ่น',
      'วันแดดจัดให้หาร่มเงาเปิด (open shade)',
      'ใกล้หน้าต่าง ให้ตัวแบบหันเข้าหาแสงเฉียง 45°',
      'ใช้ผ้าขาวหรือกระดาษขาวเป็นรีเฟลกเตอร์สะท้อนเงา'
    ]
  },
  {
    title: 'Night Portrait', tasks: [11],
    summary: 'ถ่ายกลางคืนด้วยแสงที่มีอยู่',
    tips: [
      'ยืนใกล้ไฟที่ส่องหน้าตัวแบบ เช่น ป้ายไฟ ร้านค้า',
      'ตั้งขาตั้ง ใช้ Timer 3 วินาที ให้ตัวแบบอยู่นิ่งขณะรับแสง',
      'ปิด Beauty เพื่อคงรายละเอียดผิว',
      'หลีกเลี่ยงการซูม ใช้กล้องหลัก 1× เพื่อรับแสงได้มากสุด'
    ]
  },
  {
    title: 'Aura Light', tasks: [11],
    summary: 'ไฟ Aura ของ vivo V30 ช่วยเติมแสงนุ่มที่ใบหน้าในที่มืด',
    tips: [
      'ใช้เมื่อถ่ายใกล้ ระยะ 1–2 เมตร',
      'ลองปรับอุณหภูมิไฟให้เข้ากับแสงฉากหลัง',
      'ระวังแสงแข็งเกินไป ลองลดความสว่างหรือหันหน้าตัวแบบเฉียงเล็กน้อย',
      'เปรียบเทียบภาพเปิดและปิด Aura เพื่อเรียนรู้ผลต่าง'
    ]
  },
  {
    title: 'Color & White Balance', tasks: [],
    summary: 'สีผิวและบรรยากาศขึ้นกับอุณหภูมิสี',
    tips: [
      'แสงเหลืองส้ม (ไฟหลอดไส้) ให้อารมณ์อบอุ่น ปรับ WB หากสีผิวเพี้ยน',
      'อย่าผสมแสงหลายสีบนใบหน้าโดยไม่ตั้งใจ',
      'ฉากหลังสีตัดกับสีผิว (ฟ้า–ส้ม) ช่วยให้ตัวแบบเด่น',
      'ถ่ายการ์ดเทาหรือกระดาษขาวไว้อ้างอิงตอนแต่งภาพ'
    ]
  },
  {
    title: 'Lightroom Mobile', tasks: [],
    summary: 'แต่งภาพแบบพอดี ไม่ฝืนธรรมชาติ',
    tips: [
      'ลำดับ: Crop → Exposure → Highlights/Shadows → White Balance → Color',
      'ลด Texture/Clarity บนผิวหน้า เพิ่มเฉพาะส่วนที่ต้องการ',
      'ใช้ Masking → Subject เพื่อปรับแสงเฉพาะตัวแบบ',
      'สร้าง Preset จากภาพที่ชอบเพื่อให้โทนสม่ำเสมอ'
    ]
  },
  {
    title: 'Creative Direction', tasks: [8, 9, 10],
    summary: 'วางคอนเซ็ปต์ก่อนกดชัตเตอร์',
    tips: [
      'เลือกอารมณ์หลักหนึ่งอย่าง เช่น เงียบ เศร้า สนุก แล้วเลือกแสงสีและสถานที่ให้ตรงกัน',
      'เส้นนำสายตา (Leading Lines) พาสายตาไปที่ตัวแบบ',
      'สมมาตรเหมาะกับภาพนิ่งและทรงพลัง',
      'พื้นที่ว่าง (Negative Space) ทำให้ภาพโล่งและมีความหมาย'
    ]
  },
  {
    title: 'Photographing Others', tasks: [],
    summary: 'สื่อสารและสร้างความไว้วางใจกับคนที่ถ่าย',
    tips: [
      'ขออนุญาตก่อนถ่ายและก่อนเผยแพร่ภาพ',
      'อธิบายท่าด้วยตัวอย่างหรือภาพอ้างอิง ไม่ใช้คำสั่งยาวเกินไป',
      'ให้ดูภาพหลังถ่ายสองสามช็อต เพื่อสร้างความมั่นใจ',
      'ชมสิ่งที่ทำได้ดีเพื่อให้ตัวแบบผ่อนคลาย'
    ]
  },
  {
    title: 'Advanced Portfolio', tasks: [],
    summary: 'คัดภาพและเล่าเรื่องให้เป็นผลงาน',
    tips: [
      'เลือกภาพที่ดีที่สุด 10–12 ภาพ โทนและอารมณ์ต้องสอดคล้องกัน',
      'ทิ้งภาพที่ชอบเพียงเพราะประทับใจส่วนตัวแต่เทคนิคอ่อน',
      'เรียงลำดับให้มีจังหวะ ภาพเปิดและภาพปิดต้องแข็งแรง',
      'ใช้ Journal และการวิเคราะห์กับ ChatGPT เพื่อดูพัฒนาการเป็นช่วงๆ'
    ]
  }
];

const KEY = 'portrait-academy-v1';
const view = document.getElementById('view');
let state = load();
let currentTab = 'learn';
let editingId = null;

/* ---------- storage ---------- */
function newId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function normalize(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const done = Array.isArray(s.done)
    ? [...new Set(s.done.filter(i => Number.isInteger(i) && i >= 0 && i < tasks.length))]
    : [];
  const notes = (Array.isArray(s.notes) ? s.notes : [])
    .filter(n => n && typeof n === 'object')
    .map(n => ({
      id: typeof n.id === 'string' ? n.id : newId(),
      title: String(n.title ?? ''),
      note: String(n.note ?? ''),
      date: typeof n.date === 'string' ? n.date : ''
    }));
  return { done, notes };
}

function load() {
  try { return normalize(JSON.parse(localStorage.getItem(KEY))); }
  catch { return normalize(null); }
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); }
  catch { toast('บันทึกไม่ได้ (พื้นที่เบราว์เซอร์เต็มหรือถูกปิด)'); }
}

/* ---------- helpers ---------- */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

/* ---------- views ---------- */
function showLearn() {
  view.innerHTML = '<section><h2>12 บทเรียน</h2><p class="muted">กดชื่อบทเพื่อดูเนื้อหา และกดแท็กภารกิจเพื่อไปฝึกต่อ</p>' +
    lessons.map((l, i) =>
      '<details class="lesson"><summary><span class="num">' + (i + 1) + '</span>' + esc(l.title) + '</summary>' +
      '<p class="muted">' + esc(l.summary) + '</p>' +
      '<ul>' + l.tips.map(t => '<li>' + esc(t) + '</li>').join('') + '</ul>' +
      (l.tasks.length
        ? '<p>ภารกิจที่เกี่ยวข้อง: ' + l.tasks.map(t =>
            '<button class="tag" data-goto="practice">' + (state.done.includes(t) ? '✓ ' : '') + esc(tasks[t]) + '</button>').join('') + '</p>'
        : '') +
      '</details>'
    ).join('') + '</section>';
}

function showPractice() {
  const pct = Math.round(state.done.length / tasks.length * 100);
  view.innerHTML = '<section><h2>ภารกิจฝึก</h2>' +
    '<p class="muted">สำเร็จ ' + state.done.length + '/' + tasks.length + ' ภารกิจ (' + pct + '%)</p>' +
    '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><span style="width:' + pct + '%"></span></div>' +
    tasks.map((x, i) => {
      const rel = lessons.map((l, n) => l.tasks.includes(i) ? 'บท ' + (n + 1) : '').filter(Boolean).join(', ');
      return '<label class="task"><input type="checkbox" data-task="' + i + '"' + (state.done.includes(i) ? ' checked' : '') + '> ' +
        esc(x) + ' — ถ่าย 5 ภาพ' + (rel ? ' <span class="tag">' + rel + '</span>' : '') + '</label>';
    }).join('') + '</section>';
}

function showLab() {
  view.innerHTML = '<section><h2>Lighting Simulator</h2>' +
    '<p>ปรับมุมแสงรอบตัวแบบ (0° = หน้า, 90° = ข้าง, 180° = หลัง)</p>' +
    '<input id="angle" type="range" min="0" max="180" step="15" value="45" aria-label="มุมแสง" aria-describedby="angleLabel">' +
    '<p id="angleLabel"></p>' +
    '<svg width="100%" viewBox="0 0 320 240" role="img" aria-label="แผนผังทิศทางแสงรอบใบหน้า">' +
    '<rect width="320" height="240" rx="15" fill="#1b2230"/>' +
    '<circle cx="160" cy="118" r="38" fill="#c59b7e"/>' +
    '<circle id="lamp" cx="85" cy="180" r="17" fill="#efc77e"/>' +
    '<path id="ray" stroke="#efc77e" stroke-width="2" stroke-dasharray="5 5"/>' +
    '<text x="160" y="225" fill="white" text-anchor="middle">ด้านหน้า / กล้อง</text></svg>' +
    '<p class="muted">ทดลองถ่ายจริงเพื่อดูเงา: ภาพนี้เป็นเพียงแผนผังทิศทางแสง</p></section>' +
    '<section><h2>vivo V30 Night Setup</h2>' +
    '<p>กล้องหลัง 1× · Photo Mode · Grid เปิด · Beauty ปิด · Timer 3 วินาที · ตั้งขาตั้งมั่นคง</p>' +
    '<p>เริ่มจากไฟถนนหรือไฟอาคารที่ส่องหน้าเพียงพอ หากตัวแบบเคลื่อนไหวให้ใช้ Shutter เร็วขึ้น</p></section>';
  renderLight();
}

function renderLight() {
  const a = Number(document.getElementById('angle').value);
  const r = a * Math.PI / 180;
  const x = 160 - 90 * Math.sin(r);
  const y = 118 + 90 * Math.cos(r);
  const lamp = document.getElementById('lamp');
  lamp.setAttribute('cx', x);
  lamp.setAttribute('cy', y);
  document.getElementById('ray').setAttribute('d', 'M' + x + ' ' + y + ' L160 118');
  document.getElementById('angleLabel').textContent =
    a + '° — ' + (a < 60 ? 'Front / 45°' : a < 120 ? 'Side' : 'Back') + ' Lighting';
}

function noteHtml(n) {
  if (n.id === editingId) {
    return '<div class="note"><input type="text" id="editTitle" value="' + esc(n.title) + '" aria-label="ชื่อเซสชัน">' +
      '<p><textarea id="editNote" rows="4" aria-label="บันทึก">' + esc(n.note) + '</textarea></p>' +
      '<div class="row"><button class="primary" data-act="save-edit" data-id="' + n.id + '">บันทึกการแก้ไข</button>' +
      '<button data-act="cancel-edit">ยกเลิก</button></div></div>';
  }
  return '<div class="note"><b>' + esc(n.title || '(ไม่มีชื่อ)') + '</b>' +
    (n.date ? ' <span class="meta">' + esc(n.date) + '</span>' : '') +
    '<p>' + esc(n.note) + '</p>' +
    '<div class="row"><button data-act="edit" data-id="' + n.id + '">แก้ไข</button>' +
    '<button class="danger" data-act="delete" data-id="' + n.id + '">ลบ</button></div></div>';
}

function showJournal() {
  view.innerHTML = '<section><h2>Photo Journal</h2><p>บันทึกผลการฝึกและสิ่งที่ต้องปรับ</p>' +
    '<input type="text" id="subject" placeholder="ชื่อเซสชัน เช่น Night Street" aria-label="ชื่อเซสชัน">' +
    '<p><textarea id="notes" rows="4" placeholder="แสง มุมกล้อง สิ่งที่เรียนรู้" aria-label="บันทึก"></textarea></p>' +
    '<div class="row"><button class="primary" data-act="add">บันทึก</button>' +
    '<button data-act="export">ส่งออกข้อมูล JSON</button>' +
    '<button data-act="import">นำเข้าข้อมูล JSON</button>' +
    '<input type="file" id="importFile" accept="application/json,.json" hidden></div>' +
    (state.notes.length ? state.notes.map(noteHtml).join('') : '<p class="muted">ยังไม่มีบันทึก</p>') +
    '</section>';
}

const views = { learn: showLearn, practice: showPractice, lab: showLab, journal: showJournal };

function show(tab) {
  currentTab = tab;
  editingId = null;
  views[tab]();
  document.querySelectorAll('nav button').forEach(b => {
    const on = b.dataset.tab === tab;
    b.classList.toggle('active', on);
    b.setAttribute('aria-current', on ? 'page' : 'false');
  });
}

/* ---------- actions ---------- */
function today() {
  return new Date().toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' });
}

function addNote() {
  const title = document.getElementById('subject').value.trim();
  const note = document.getElementById('notes').value.trim();
  if (!title && !note) { toast('กรอกชื่อหรือบันทึกก่อน'); return; }
  state.notes.unshift({ id: newId(), title, note, date: today() });
  save();
  showJournal();
  toast('บันทึกแล้ว');
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'portrait-academy-backup.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

async function importData(file) {
  try {
    const data = JSON.parse(await file.text());
    if (!data || typeof data !== 'object' || (!Array.isArray(data.done) && !Array.isArray(data.notes))) {
      throw new Error('bad format');
    }
    const incoming = normalize(data);
    if (!confirm('นำเข้าข้อมูลจากไฟล์นี้? ข้อมูลปัจจุบันจะถูกแทนที่ (' +
      incoming.notes.length + ' บันทึก, ' + incoming.done.length + ' ภารกิจ)')) return;
    state = incoming;
    save();
    showJournal();
    toast('นำเข้าข้อมูลแล้ว');
  } catch {
    toast('ไฟล์ไม่ถูกต้อง นำเข้าไม่สำเร็จ');
  }
}

function journalAction(btn) {
  const id = btn.dataset.id;
  switch (btn.dataset.act) {
    case 'add': addNote(); break;
    case 'export': exportData(); break;
    case 'import': document.getElementById('importFile').click(); break;
    case 'edit': editingId = id; showJournal(); document.getElementById('editTitle').focus(); break;
    case 'cancel-edit': editingId = null; showJournal(); break;
    case 'save-edit': {
      const n = state.notes.find(x => x.id === id);
      if (n) {
        n.title = document.getElementById('editTitle').value.trim();
        n.note = document.getElementById('editNote').value.trim();
        save();
      }
      editingId = null;
      showJournal();
      toast('แก้ไขแล้ว');
      break;
    }
    case 'delete':
      if (confirm('ลบบันทึกนี้?')) {
        state.notes = state.notes.filter(x => x.id !== id);
        save();
        showJournal();
        toast('ลบแล้ว');
      }
      break;
  }
}

/* ---------- events ---------- */
document.querySelector('nav').addEventListener('click', e => {
  const b = e.target.closest('button[data-tab]');
  if (b) show(b.dataset.tab);
});

view.addEventListener('click', e => {
  const go = e.target.closest('[data-goto]');
  if (go) { show(go.dataset.goto); return; }
  const btn = e.target.closest('button[data-act]');
  if (btn) journalAction(btn);
});

view.addEventListener('change', e => {
  const t = e.target;
  if (t.matches('input[data-task]')) {
    const i = Number(t.dataset.task);
    state.done = t.checked ? [...new Set([...state.done, i])] : state.done.filter(x => x !== i);
    save();
    showPractice();
    const again = view.querySelector('input[data-task="' + i + '"]');
    if (again) again.focus();
  } else if (t.id === 'importFile' && t.files[0]) {
    importData(t.files[0]);
  }
});

view.addEventListener('input', e => {
  if (e.target.id === 'angle') renderLight();
});

/* ---------- ChatGPT review panel ---------- */
(function () {
  const panel = document.getElementById('chatPanel');
  const openBtn = document.getElementById('chatCoach');
  const closeBtn = document.getElementById('chatClose');
  const file = document.getElementById('chatPhoto');
  const img = document.getElementById('chatPreview');
  const PROMPT = 'ช่วยวิเคราะห์ภาพ Portrait ที่ฉันแนบ โดยให้คะแนน 1-10 สำหรับแสง องค์ประกอบ สี และการโพส อธิบายจุดเด่น จุดที่ควรปรับ และแนะนำ 3 วิธีถ่ายซ้ำให้ดีขึ้นด้วย vivo V30 ตอบเป็นภาษาไทย';
  let url;

  function open() { panel.hidden = false; closeBtn.focus(); }
  function close() { panel.hidden = true; openBtn.focus(); }

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  panel.addEventListener('click', e => { if (e.target === panel) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) close(); });

  file.addEventListener('change', () => {
    if (url) URL.revokeObjectURL(url);
    if (!file.files[0]) { img.hidden = true; return; }
    url = URL.createObjectURL(file.files[0]);
    img.src = url;
    img.hidden = false;
  });

  document.getElementById('copyPrompt').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(PROMPT);
      toast('คัดลอกแล้ว โปรดแนบภาพใน ChatGPT ด้วย');
    } catch {
      prompt('คัดลอกข้อความนี้', PROMPT);
    }
  });
})();

show('learn');
