/* =============================================
   PARICHAY PATRA — app.js v2
   Professional SVG icons | Public + Admin passwords
   ============================================= */

/* ---- PASSWORDS ---- */
const PUBLIC_PWD  = 'biodata2024';  // << Share this with the viewing party
const ADMIN_PWD   = 'ganesh123';    // << Only you know this

/* ---- DATA ---- */
const STORE_KEY = 'parichay_data_v2';

const DEFAULT_DATA = {
  name: 'श्री. राहुल विनायक देशपांडे',
  nameEn: 'Rahul Vinayak Deshpande',
  personal: {
    dob: '15 जून 1996',
    height: '5 फूट 8 इंच (172 cm)',
    colour: 'गोरा (Fair)',
    jatDharma: 'मराठा / हिंदू',
    kuldaivat: 'श्री. भवानी माता',
    devak: 'नारळ',
    bloodGroup: 'B+'
  },
  horoscope: {
    gan: 'देव गण',
    nadi: 'अंत्य नाडी',
    janmanakshatra: 'रोहिणी',
    jamvel: '१२ जून १९९६, रात्री ११:३०'
  },
  education: {
    qualification: 'B.E. (Computer Engineering)',
    college: 'Pune University',
    passingYear: '2018'
  },
  career: {
    company: 'TCS India Pvt. Ltd.',
    designation: 'Software Engineer',
    salary: '₹ 8,50,000 /- वार्षिक'
  },
  family: {
    father: { name: 'श्री. विनायक रामचंद्र देशपांडे', occupation: 'शेती व्यवसाय' },
    mother: { name: 'सौ. सुनीता विनायक देशपांडे', occupation: 'गृहिणी' },
    sisters: [{ name: 'कु. प्रिया देशपांडे', occupation: 'शिक्षिका', married: 'अविवाहित' }],
    brothers: [],
    mamas:    [{ name: 'श्री. सुभाष जोशी', relation: 'मामा', location: 'पुणे' }],
    mushis:   [],
    chultas:  []
  },
  gallery: [],
  contacts: [
    { name: 'श्री. विनायक देशपांडे', relation: 'वडील', phone: '+91 98765 43210' },
    { name: 'श्री. राहुल देशपांडे',  relation: 'स्वतः', phone: '+91 91234 56789' }
  ],
  whatsapp: '919123456789',
  mapLink:  'https://maps.google.com/?q=Pune,Maharashtra',
  address:  'मु. पो. शिरूर, ता. शिरूर, जि. पुणे - 412210'
};

/* ---- SVG ICON LIBRARY ---- */
const IC = {
  /* Lucide-style stroked SVGs */
  user:       `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  cake:       `<svg viewBox="0 0 24 24"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 13V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5"/><path d="M12 2v4"/><path d="M8 2v1"/><path d="M16 2v1"/></svg>`,
  ruler:      `<svg viewBox="0 0 24 24"><path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z"/><path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/><path d="m13.5 4.5 2 2"/><path d="m4.5 13.5 2 2"/></svg>`,
  palette:    `<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5" fill="white"/><circle cx="17.5" cy="10.5" r=".5" fill="white"/><circle cx="8.5" cy="7.5" r=".5" fill="white"/><circle cx="6.5" cy="12.5" r=".5" fill="white"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  temple:     `<svg viewBox="0 0 24 24"><path d="M3 22V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16"/><path d="M3 22H21"/><path d="M12 2v4"/><path d="M9 22V12h6v10"/></svg>`,
  leaf:       `<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  blood:      `<svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  moon:       `<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  waves:      `<svg viewBox="0 0 24 24"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
  star:       `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  clock:      `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  grad:       `<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  building:   `<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/></svg>`,
  calendar:   `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  briefcase:  `<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  badge:      `<svg viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  wallet:     `<svg viewBox="0 0 24 24"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
  home:       `<svg viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  father:     `<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>`,
  mother:     `<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>`,
  users:      `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  image:      `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  phone:      `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  lock:       `<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  settings:   `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  save:       `<svg viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  plus:       `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  x:          `<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  search:     `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  globe:      `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  printer:    `<svg viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  share:      `<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  arrowLeft:  `<svg viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  info:       `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  contact:    `<svg viewBox="0 0 24 24"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect x="3" y="4" width="18" height="18" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" y1="2" x2="8" y2="4"/><line x1="16" y1="2" x2="16" y2="4"/></svg>`,
  photo:      `<svg viewBox="0 0 24 24"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  zoom:       `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  mapPin:     `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  id:         `<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
};

/* Helper to wrap icon SVG with stroke attributes */
function icon(name, cls='') {
  return `<svg ${cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${IC[name] ? IC[name].replace(/^<svg[^>]*>/,'') : ''}</svg>`;
}
/* Proper icon element */
function svgIcon(name) {
  if (!IC[name]) return '';
  const inner = IC[name].replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}

/* ---- LANGUAGE ---- */
let currentLang = 'mr';

const LANG = {
  mr: {
    sectionPersonal:'वैयक्तिक माहिती', sectionHoro:'जन्मकुंडली माहिती',
    sectionEdu:'शैक्षणिक माहिती', sectionCareer:'नोकरी / व्यवसाय',
    sectionFamily:'कौटुंबिक माहिती', sectionGallery:'छायाचित्र दालन', sectionContact:'संपर्क',
    dob:'जन्म दिनांक', height:'उंची', colour:'वर्ण', jatDharma:'जात / धर्म',
    kuldaivat:'कुलदैवत', devak:'देवक', blood:'रक्तगट',
    gan:'गण', nadi:'नाडी', nakshatra:'जन्मनक्षत्र', jamvel:'जन्मवेळ',
    qualification:'शैक्षणिक पात्रता', college:'महाविद्यालय', passingYear:'उत्तीर्ण वर्ष',
    company:'कंपनी', designation:'पद', salary:'वार्षिक वेतन',
    father:'वडील', mother:'आई', sisters:'बहिणी', brothers:'भाऊ',
    mamas:'मामा', mushis:'मुशी', chultas:'चुलते',
    heading:'परिचयपत्र', headingSub:'Parichay Patra'
  },
  en: {
    sectionPersonal:'Personal Information', sectionHoro:'Horoscope Information',
    sectionEdu:'Educational Information', sectionCareer:'Career / Occupation',
    sectionFamily:'Family Information', sectionGallery:'Photo Gallery', sectionContact:'Contact',
    dob:'Date of Birth', height:'Height', colour:'Complexion', jatDharma:'Caste / Religion',
    kuldaivat:'Kuldaivat', devak:'Devak', blood:'Blood Group',
    gan:'Gan', nadi:'Nadi', nakshatra:'Birth Nakshatra', jamvel:'Birth Time',
    qualification:'Highest Qualification', college:'College / University', passingYear:'Passing Year',
    company:'Company', designation:'Designation', salary:'Annual Salary',
    father:'Father', mother:'Mother', sisters:'Sisters', brothers:'Brothers',
    mamas:'Maternal Uncles', mushis:'Mushi', chultas:'Paternal Uncles',
    heading:'Biodata', headingSub:'परिचयपत्र'
  }
};

/* ---- STORE ---- */
function loadData() {
  try { const s = localStorage.getItem(STORE_KEY); return s ? JSON.parse(s) : JSON.parse(JSON.stringify(DEFAULT_DATA)); }
  catch(e) { return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
}
function saveData(d) { localStorage.setItem(STORE_KEY, JSON.stringify(d)); }

let appData = loadData();

/* =============================================
   PUBLIC GATE — Password for viewers
   ============================================= */
function initPublicGate() {
  const unlocked = sessionStorage.getItem('pp_public_unlocked');
  if (unlocked === '1') return; // already unlocked this session
  const gate = document.getElementById('public-gate');
  gate.classList.add('show');
}

window.checkPublicPassword = function() {
  const val = document.getElementById('gatePwdInput').value;
  if (val === PUBLIC_PWD) {
    sessionStorage.setItem('pp_public_unlocked', '1');
    document.getElementById('public-gate').classList.remove('show');
  } else {
    document.getElementById('gateError').classList.add('show');
    document.getElementById('gatePwdInput').value = '';
    document.getElementById('gatePwdInput').focus();
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (document.getElementById('public-gate').classList.contains('show')) checkPublicPassword();
    if (document.getElementById('pwd-modal').classList.contains('open')) checkAdminPassword();
  }
});

/* =============================================
   RENDER PUBLIC PAGE
   ============================================= */
function renderPublicPage() {
  const L = LANG[currentLang];
  const d = appData;

  document.getElementById('candidateName').textContent = d.name;
  document.getElementById('mainHeading').textContent = L.heading;
  document.getElementById('mainHeadingSub').textContent = L.headingSub;

  document.getElementById('sec-personal').textContent = L.sectionPersonal;
  document.getElementById('sec-horo').textContent = L.sectionHoro;
  document.getElementById('sec-edu').textContent = L.sectionEdu;
  document.getElementById('sec-career').textContent = L.sectionCareer;
  document.getElementById('sec-family').textContent = L.sectionFamily;
  document.getElementById('sec-gallery').textContent = L.sectionGallery;
  document.getElementById('sec-contact').textContent = L.sectionContact;

  setItem('item-dob',      L.dob,           d.personal.dob);
  setItem('item-height',   L.height,        d.personal.height);
  setItem('item-colour',   L.colour,        d.personal.colour);
  setItem('item-jat',      L.jatDharma,     d.personal.jatDharma);
  setItem('item-kuldaivat',L.kuldaivat,     d.personal.kuldaivat);
  setItem('item-devak',    L.devak,         d.personal.devak);
  setItem('item-blood',    L.blood,         d.personal.bloodGroup);

  setItem('item-gan',       L.gan,       d.horoscope.gan);
  setItem('item-nadi',      L.nadi,      d.horoscope.nadi);
  setItem('item-nakshatra', L.nakshatra, d.horoscope.janmanakshatra);
  setItem('item-jamvel',    L.jamvel,    d.horoscope.jamvel);

  setItem('item-qual',    L.qualification, d.education.qualification);
  setItem('item-college', L.college,       d.education.college);
  setItem('item-year',    L.passingYear,   d.education.passingYear);

  setItem('item-company', L.company,     d.career.company);
  setItem('item-desig',   L.designation, d.career.designation);
  setItem('item-salary',  L.salary,      d.career.salary);

  renderFamilyPublic(L, d);
  renderGalleryPublic(d);
  renderContactsPublic(d);

  const waBtn  = document.getElementById('action-wa');
  const mapBtn = document.getElementById('action-map');
  if (waBtn)  waBtn.href  = `https://wa.me/${d.whatsapp.replace(/\D/g,'')}`;
  if (mapBtn) mapBtn.href = d.mapLink;

  document.getElementById('langCurrent').textContent = currentLang === 'mr' ? 'मराठी' : 'English';
  document.getElementById('langNext').textContent    = currentLang === 'mr' ? 'EN' : 'मरा';
}

function setItem(id, label, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.querySelector('.info-item-label').textContent = label;
  el.querySelector('.info-item-value').textContent = value || '—';
}

function renderFamilyPublic(L, d) {
  renderParentCard('family-father', d.family.father);
  renderParentCard('family-mother', d.family.mother);
  renderMemberCards('family-sisters',  d.family.sisters  || []);
  renderMemberCards('family-brothers', d.family.brothers || []);
  renderMemberCards('family-mamas',    d.family.mamas    || []);
  renderMemberCards('family-mushis',   d.family.mushis   || []);
  renderMemberCards('family-chultas',  d.family.chultas  || []);
}

function renderParentCard(id, member) {
  const el = document.getElementById(id);
  if (!el || !member) return;
  el.innerHTML = `
    <div class="family-card">
      <div class="fc-name">${member.name||'—'}</div>
      <div class="fc-detail">${svgIcon('briefcase')} ${member.occupation||'—'}</div>
    </div>`;
}

function renderMemberCards(id, members) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!members || members.length === 0) {
    el.innerHTML = `<span style="color:var(--text-light);font-size:0.84rem;font-style:italic;">—</span>`;
    return;
  }
  el.innerHTML = members.map(m => `
    <div class="family-card">
      <div class="fc-name">${m.name||'—'}</div>
      <div class="fc-detail">${svgIcon('briefcase')} ${m.occupation||m.relation||'—'}</div>
      ${m.married  ? `<div class="fc-detail">${svgIcon('star')} ${m.married}</div>` : ''}
      ${m.location ? `<div class="fc-detail">${svgIcon('mapPin')} ${m.location}</div>` : ''}
    </div>`).join('');
}

function renderGalleryPublic(d) {
  const el = document.getElementById('gallery-grid');
  if (!el) return;
  if (!d.gallery || d.gallery.length === 0) {
    el.innerHTML = `<div class="gallery-item"><div class="gallery-placeholder">${svgIcon('image')}<span>No photos yet</span></div></div>`;
    return;
  }
  el.innerHTML = d.gallery.map((src, i) => `
    <div class="gallery-item" onclick="openLightbox(${i})">
      <img src="${src}" alt="Photo ${i+1}" loading="lazy"/>
      <div class="gallery-overlay">${svgIcon('zoom')}</div>
    </div>`).join('');
}

function renderContactsPublic(d) {
  const el = document.getElementById('contact-cards');
  if (!el) return;
  el.innerHTML = (d.contacts||[]).map(c => `
    <div class="contact-card">
      <div class="cc-rel">${c.relation}</div>
      <div class="cc-name">${c.name}</div>
      <a class="cc-phone" href="tel:${c.phone}">${svgIcon('phone')} ${c.phone}</a>
    </div>`).join('');
}

/* ---- LIGHTBOX ---- */
window.openLightbox = function(idx) {
  const lb = document.getElementById('lightbox');
  lb.querySelector('img').src = appData.gallery[idx];
  lb.classList.add('open');
};

/* ---- LANGUAGE TOGGLE ---- */
window.toggleLang = function() {
  currentLang = currentLang === 'mr' ? 'en' : 'mr';
  renderPublicPage();
};

/* ---- PRINT / SHARE ---- */
window.printPage = () => window.print();
window.sharePage = function() {
  if (navigator.share) {
    navigator.share({ title: appData.name + ' — परिचयपत्र', url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => showToast('🔗 लिंक कॉपी झाली!'));
  }
};

/* ---- TOAST ---- */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ---- ADMIN PASSWORD MODAL ---- */
window.openAdminModal = function() {
  document.getElementById('pwd-modal').classList.add('open');
  document.getElementById('adminPwdInput').value = '';
  document.querySelector('.pwd-error').classList.remove('show');
  setTimeout(() => document.getElementById('adminPwdInput').focus(), 100);
};

window.checkAdminPassword = function() {
  const val = document.getElementById('adminPwdInput').value;
  if (val === ADMIN_PWD) {
    document.getElementById('pwd-modal').classList.remove('open');
    showAdminPage();
  } else {
    document.querySelector('.pwd-error').classList.add('show');
    document.getElementById('adminPwdInput').value = '';
  }
};

/* ---- PAGE SWITCH ---- */
function showAdminPage() {
  document.getElementById('public-page').style.display = 'none';
  document.getElementById('admin-page').style.display = 'block';
  renderAdminPage();
}

window.showPublicPage = function() {
  document.getElementById('admin-page').style.display = 'none';
  document.getElementById('public-page').style.display = 'block';
  renderPublicPage();
};

/* =============================================
   ADMIN PAGE
   ============================================= */
function renderAdminPage() {
  const d = appData;
  v('adm-name', d.name); v('adm-nameEn', d.nameEn);
  v('adm-dob', d.personal.dob); v('adm-height', d.personal.height);
  v('adm-colour', d.personal.colour); v('adm-jat', d.personal.jatDharma);
  v('adm-kuldaivat', d.personal.kuldaivat); v('adm-devak', d.personal.devak);
  v('adm-blood', d.personal.bloodGroup);
  v('adm-gan', d.horoscope.gan); v('adm-nadi', d.horoscope.nadi);
  v('adm-nakshatra', d.horoscope.janmanakshatra); v('adm-jamvel', d.horoscope.jamvel);
  v('adm-qual', d.education.qualification); v('adm-college', d.education.college);
  v('adm-year', d.education.passingYear);
  v('adm-company', d.career.company); v('adm-desig', d.career.designation);
  v('adm-salary', d.career.salary);
  v('adm-wa', d.whatsapp); v('adm-map', d.mapLink); v('adm-address', d.address);

  renderAdminContacts();
  renderDynamic('adm-sisters',  d.family.sisters  || [], ['name','occupation','married']);
  renderDynamic('adm-brothers', d.family.brothers || [], ['name','occupation','married']);
  renderDynamic('adm-mamas',    d.family.mamas    || [], ['name','relation','location']);
  renderDynamic('adm-mushis',   d.family.mushis   || [], ['name','relation','location']);
  renderDynamic('adm-chultas',  d.family.chultas  || [], ['name','occupation','location']);
  renderAdminGallery();
}

function v(id, val) { const e = document.getElementById(id); if (e) e.value = val || ''; }
function g(id)      { const e = document.getElementById(id); return e ? e.value : ''; }

window.adminSaveAll = function() {
  const d = appData;
  d.name = g('adm-name'); d.nameEn = g('adm-nameEn');
  d.personal.dob = g('adm-dob'); d.personal.height = g('adm-height');
  d.personal.colour = g('adm-colour'); d.personal.jatDharma = g('adm-jat');
  d.personal.kuldaivat = g('adm-kuldaivat'); d.personal.devak = g('adm-devak');
  d.personal.bloodGroup = g('adm-blood');
  d.horoscope.gan = g('adm-gan'); d.horoscope.nadi = g('adm-nadi');
  d.horoscope.janmanakshatra = g('adm-nakshatra'); d.horoscope.jamvel = g('adm-jamvel');
  d.education.qualification = g('adm-qual'); d.education.college = g('adm-college');
  d.education.passingYear = g('adm-year');
  d.career.company = g('adm-company'); d.career.designation = g('adm-desig');
  d.career.salary = g('adm-salary');
  d.whatsapp = g('adm-wa'); d.mapLink = g('adm-map'); d.address = g('adm-address');
  saveData(d);
  showToast('✅ माहिती जतन झाली!');
};

/* Contacts */
function renderAdminContacts() {
  const el = document.getElementById('adm-contacts');
  if (!el) return;
  el.innerHTML = (appData.contacts||[]).map((c,i) => `
    <div class="dynamic-entry">
      <div><div class="de-name">${c.name}</div><div class="de-sub">${c.relation} | ${c.phone}</div></div>
      <button class="btn-remove" onclick="removeContact(${i})">${svgIcon('x')}</button>
    </div>`).join('');
}
window.removeContact = function(i) { appData.contacts.splice(i,1); saveData(appData); renderAdminContacts(); };
window.addContact = function() {
  const name=g('new-cname'), rel=g('new-crel'), phone=g('new-cphone');
  if (!name||!phone) return;
  appData.contacts.push({name,relation:rel,phone});
  saveData(appData); renderAdminContacts();
  v('new-cname',''); v('new-crel',''); v('new-cphone','');
  showToast('संपर्क जोडला!');
};

/* Dynamic family lists */
function renderDynamic(listId, items, fields) {
  const el = document.getElementById(listId+'-entries');
  if (!el) return;
  el.innerHTML = items.map((item,i) => `
    <div class="dynamic-entry">
      <div><div class="de-name">${item.name||'—'}</div><div class="de-sub">${fields.slice(1).map(f=>item[f]).filter(Boolean).join(' | ')}</div></div>
      <button class="btn-remove" onclick="removeFamilyMember('${listId}',${i})">${svgIcon('x')}</button>
    </div>`).join('');
}

const FAMILY_MAP = { 'adm-sisters':'sisters','adm-brothers':'brothers','adm-mamas':'mamas','adm-mushis':'mushis','adm-chultas':'chultas' };

window.removeFamilyMember = function(listId, i) {
  const key = FAMILY_MAP[listId]; if (!key) return;
  appData.family[key].splice(i,1); saveData(appData); renderAdminPage();
};

window.addFamilyMember = function(listId, fields) {
  const key = FAMILY_MAP[listId]; if (!key) return;
  const obj = {};
  fields.forEach(f => { const inp = document.getElementById(listId+'-new-'+f); if (inp) { obj[f]=inp.value.trim(); inp.value=''; } });
  if (!obj.name) return;
  if (!appData.family[key]) appData.family[key]=[];
  appData.family[key].push(obj); saveData(appData); renderAdminPage();
  showToast('नाव जोडले!');
};

/* Gallery */
function renderAdminGallery() {
  const el = document.getElementById('admin-gallery-grid');
  if (!el) return;
  el.innerHTML = (appData.gallery||[]).map((src,i) => `
    <div class="admin-gallery-item">
      <img src="${src}" alt="photo ${i}"/>
      <button class="ag-remove" onclick="removeGalleryPhoto(${i})">${svgIcon('x')}</button>
    </div>`).join('');
}
window.removeGalleryPhoto = function(i) { appData.gallery.splice(i,1); saveData(appData); renderAdminGallery(); };
window.handleGalleryUpload = function(input) {
  Array.from(input.files).forEach(file => {
    const r = new FileReader();
    r.onload = e => { if (!appData.gallery) appData.gallery=[]; appData.gallery.push(e.target.result); saveData(appData); renderAdminGallery(); showToast('📷 फोटो जोडला!'); };
    r.readAsDataURL(file);
  });
  input.value='';
};

/* Admin nav tabs */
window.switchAdminPanel = function(panelId, btn) {
  document.querySelectorAll('.admin-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.admin-nav button').forEach(b=>b.classList.remove('active'));
  document.getElementById(panelId).classList.add('active');
  if (btn) btn.classList.add('active');
};

/* Family parents save */
window.adminSaveFamilyParents = function() {
  appData.family.father.name       = g('adm-father-name');
  appData.family.father.occupation = g('adm-father-occ');
  appData.family.mother.name       = g('adm-mother-name');
  appData.family.mother.occupation = g('adm-mother-occ');
  adminSaveAll();
};

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initPublicGate();
  renderPublicPage();

  // Lightbox close
  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target.id==='lightbox' || e.target.closest('.lb-close')) {
      document.getElementById('lightbox').classList.remove('open');
    }
  });
});
