/* ================================================
   STELLEN'S VAULT — ICONS & LOGO
   Inline SVG system. No emoji, no font icons.
================================================ */

// ====== SVG LOGO MARK ======
const SV_LOGO_SVG = `<svg class="sv-logo-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" aria-hidden="true">
  <circle cx="24" cy="24" r="21" stroke="#00f5ff" stroke-width="1.8"/>
  <circle cx="24" cy="24" r="15" stroke="#00f5ff" stroke-width="0.8" stroke-opacity="0.35"/>
  <path d="M17 18.5 Q17 13.5 22 13.5 L26.5 13.5 Q31.5 13.5 31.5 18.5 Q31.5 23 26.5 23 L21.5 23 Q16.5 23 16.5 28 Q16.5 33 21.5 33 L26 33 Q31 33 31 28" stroke="#00f5ff" stroke-width="2.4" stroke-linecap="round" fill="none"/>
  <line x1="24" y1="3" x2="24" y2="6.5" stroke="#00f5ff" stroke-width="1.4" stroke-opacity="0.5"/>
  <line x1="24" y1="41.5" x2="24" y2="45" stroke="#00f5ff" stroke-width="1.4" stroke-opacity="0.5"/>
  <line x1="3" y1="24" x2="6.5" y2="24" stroke="#00f5ff" stroke-width="1.4" stroke-opacity="0.5"/>
  <line x1="41.5" y1="24" x2="45" y2="24" stroke="#00f5ff" stroke-width="1.4" stroke-opacity="0.5"/>
  <line x1="9" y1="9" x2="11.5" y2="11.5" stroke="#00f5ff" stroke-width="1" stroke-opacity="0.25"/>
  <line x1="36.5" y1="36.5" x2="39" y2="39" stroke="#00f5ff" stroke-width="1" stroke-opacity="0.25"/>
  <line x1="39" y1="9" x2="36.5" y2="11.5" stroke="#00f5ff" stroke-width="1" stroke-opacity="0.25"/>
  <line x1="9" y1="39" x2="11.5" y2="36.5" stroke="#00f5ff" stroke-width="1" stroke-opacity="0.25"/>
</svg>`;

// ====== ICON LIBRARY ======
// All icons are named after their semantic meaning, not emoji
const ICONS = {

  // Navigation / UI
  search: `<svg class="sv-icon sv-icon-md" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  menu: `<svg class="sv-icon sv-icon-md" viewBox="0 0 24 24" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
  close: `<svg class="sv-icon sv-icon-md" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  chevronRight: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`,
  arrowLeft: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  externalLink: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  plus: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,
  refresh: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  trash: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  globe: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  lock: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  check: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
  star: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  upvote: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M5 12h14"/></svg>`,
  vote: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>`,

  // Content / categories
  user: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  users: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  link: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  bookmark: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  mail: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2-2-2z" stroke="currentColor" fill="none"/><polyline points="22,6 12,13 2,6"/></svg>`,

  // Categories
  graduationCap: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  tool: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  palette: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  fileText: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  briefcase: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  map: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
  youtube: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>`,
  newspaper: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 1.73 2"/><path d="M4 20a2 2 0 0 1 0-4h2"/><path d="M16 2v20"/><line x1="12" y1="6" x2="12" y2="6.01"/><line x1="12" y1="10" x2="12" y2="10.01"/></svg>`,
  github: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  messageCircle: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,

  // Step icons
  stepBrowse: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  stepExplore: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  stepVote: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><polyline points="18 15 12 9 6 15"/><path d="M6 21H18"/></svg>`,
  stepDigest: `<svg class="sv-icon sv-icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2-2-2z" stroke="currentColor" fill="none"/><polyline points="22,6 12,13 2,6"/></svg>`,

  // Admin
  settings: `<svg class="sv-icon sv-icon-md" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  barChart: `<svg class="sv-icon sv-icon-md" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  shieldCheck: `<svg class="sv-icon sv-icon-md" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,

  // Decorative
  zap: `<svg class="sv-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield: `<svg class="sv-icon sv-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  instagram: `<svg class="sv-icon sv-icon-md" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  empty: `<svg class="sv-icon sv-icon-xl" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  emptyInbox: `<svg class="sv-icon sv-icon-xl" viewBox="0 0 24 24" aria-hidden="true"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  successCheck: `<svg class="sv-icon sv-icon-xl" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
};

// ====== INJECT LOGO INTO ALL .nav-logo ELEMENTS ======
function injectLogos() {
  document.querySelectorAll('.nav-logo').forEach(el => {
    // Build inner HTML — logo mark + text
    const currentText = el.textContent.trim(); // e.g. "Stellen'sVault"
    el.innerHTML = `
      ${SV_LOGO_SVG}
      <span class="logo-text">Stellen's<span class="logo-accent">Vault</span></span>
    `;
  });

  // Login logo (class: login-logo)
  document.querySelectorAll('.login-logo').forEach(el => {
    el.innerHTML = `
      ${SV_LOGO_SVG}
      <span class="logo-text">Stellen's<span style="color:var(--cyan)">Vault</span></span>
    `;
    el.style.cssText = 'display:inline-flex;align-items:center;gap:10px;font-family:var(--font-display);font-size:22px;font-weight:800;';
  });

  // Hero vault card avatar
  const vcAvatar = document.querySelector('.vc-avatar');
  if (vcAvatar && vcAvatar.textContent.trim() === 'SV') {
    vcAvatar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width="24" height="24">
      <path d="M13 18.5 Q13 13 18 13 L22 13 Q27 13 27 18 Q27 22 22 22.5 L18 22.5 Q13 23 13 28 Q13 33 18 33 L22 33 Q27 33 27 28" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>
    </svg>`;
    vcAvatar.style.background = 'linear-gradient(135deg, #00f5ff, #9b5de5)';
    vcAvatar.style.color = '#060410';
  }
}

// ====== REPLACE STEP EMOJI ICONS ======
function replaceStepIcons() {
  const stepMap = [
    { text: '01', icon: 'stepBrowse' },
    { text: '02', icon: 'stepExplore' },
    { text: '03', icon: 'stepVote' },
    { text: '04', icon: 'stepDigest' },
  ];

  document.querySelectorAll('.step-card').forEach((card, idx) => {
    const iconEl = card.querySelector('.step-icon');
    const numEl = card.querySelector('.step-num');
    if (iconEl) {
      const key = numEl ? stepMap.find(s => numEl.textContent.trim() === s.text) : null;
      iconEl.innerHTML = ICONS[key ? key.icon : 'link'] || ICONS.link;
    }
  });
}

// ====== REPLACE CATEGORY ICONS ======
function replaceCatIcons() {
  const catIconMap = {
    courses: 'graduationCap',
    tools: 'tool',
    ui: 'palette',
    cheatsheets: 'fileText',
    jobs: 'briefcase',
    roadmaps: 'map',
    youtube: 'youtube',
    articles: 'newspaper',
    github: 'github',
    communities: 'messageCircle',
  };

  // Home page cat cards (data-cat attr)
  document.querySelectorAll('.cat-card').forEach(card => {
    const href = card.getAttribute('href') || '';
    const match = href.match(/cat=([^&]+)/);
    const cat = match ? match[1] : null;
    const iconEl = card.querySelector('.cat-icon');
    if (iconEl && cat && catIconMap[cat]) {
      iconEl.innerHTML = ICONS[catIconMap[cat]];
    }
  });

  // Categories full page
  document.querySelectorAll('.cat-full-card').forEach(card => {
    const cat = card.getAttribute('data-cat');
    const iconEl = card.querySelector('.cfc-icon');
    if (iconEl && cat && catIconMap[cat]) {
      iconEl.innerHTML = ICONS[catIconMap[cat]];
    }
  });
}

// ====== REPLACE EMPTY STATE ICONS ======
function replaceEmptyIcons() {
  document.querySelectorAll('.empty-state').forEach(el => {
    const iconEl = el.querySelector('.empty-icon');
    if (iconEl) iconEl.innerHTML = ICONS.empty;
  });

  // Vault locked state
  const lockedIcon = document.querySelector('.empty-state .empty-icon');
  if (lockedIcon && lockedIcon.closest('.empty-state')?.querySelector('h3')?.textContent?.includes('Vault')) {
    lockedIcon.innerHTML = ICONS.lock.replace('sv-icon-sm', 'sv-icon-xl');
  }
}

// ====== REPLACE VAULT CARD LINK DOTS ======
function replaceVcLinks() {
  const vcLinks = document.querySelectorAll('.vc-link-item');
  const linkIcons = ['graduationCap', 'palette', 'fileText', 'tool', 'briefcase'];
  vcLinks.forEach((item, i) => {
    const dot = item.querySelector('.vl-dot');
    if (dot) {
      const iconKey = linkIcons[i % linkIcons.length];
      const svg = ICONS[iconKey];
      const mini = svg.replace('sv-icon-lg', 'sv-icon-sm');
      dot.outerHTML = mini;
    }
  });
}

// ====== REPLACE HOW-IT-WORKS STEP ICONS ======
// (handled in replaceStepIcons above)

// ====== REPLACE SUBMIT SUCCESS ICON ======
function replaceSuccessIcon() {
  const si = document.querySelector('.success-icon');
  if (si) si.innerHTML = ICONS.successCheck;
}

// ====== REPLACE DIGEST DS-ICON ======
function replaceDigestIcon() {
  const di = document.querySelector('.ds-icon');
  if (di) di.innerHTML = ICONS.mail.replace('sv-icon-lg', 'sv-icon-lg');

  const dcBadgePulse = document.querySelectorAll('.badge-pulse');
  // These are fine as CSS, leave them
}

// ====== ADMIN SIDEBAR ICONS ======
function replaceAdminIcons() {
  const adminIconMap = {
    'Add Influencer': ICONS.user.replace('sv-icon-lg','sv-icon-md'),
    'Add Resource': ICONS.link.replace('sv-icon-lg','sv-icon-md'),
    'Manage Vault': ICONS.settings,
    'Weekly Digest': ICONS.mail.replace('sv-icon-lg','sv-icon-md'),
    'Stats': ICONS.barChart,
    'View Live Site': ICONS.globe,
  };

  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    const span = btn.querySelector('span');
    if (!span) return;
    const label = btn.textContent.trim();
    for (const [key, icon] of Object.entries(adminIconMap)) {
      if (label.includes(key)) {
        span.outerHTML = icon;
        break;
      }
    }
  });

  // Stat card icons
  const statCards = document.querySelectorAll('.stat-card');
  const statIcons = [
    ICONS.user.replace('sv-icon-lg','sv-icon-md'),
    ICONS.link.replace('sv-icon-lg','sv-icon-md'),
    ICONS.vote.replace('sv-icon-sm','sv-icon-md'),
    ICONS.fileText.replace('sv-icon-lg','sv-icon-md'),
  ];
  statCards.forEach((card, i) => {
    const icon = card.querySelector('.sc-icon');
    if (icon && statIcons[i]) icon.innerHTML = statIcons[i];
  });
}

// ====== ADMIN BADGE ICON ======
function replaceAdminBadge() {
  const badge = document.querySelector('.admin-badge');
  if (badge) {
    badge.innerHTML = ICONS.shieldCheck + ' Admin Mode';
  }
}

// ====== REPLACE NAV SUBMIT BUTTON ======
function replaceSubmitBtn() {
  document.querySelectorAll('.btn-submit').forEach(btn => {
    if (btn.tagName === 'A') {
      btn.innerHTML = ICONS.plus + ' Submit';
    }
  });

  // Back link arrow
  document.querySelectorAll('.back-link').forEach(link => {
    link.innerHTML = ICONS.arrowLeft + ' Back to Influencers';
  });
}

// ====== REPLACE RES-LINK & VOTE BTN TEXT ======
function replaceResourceIcons() {
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.innerHTML = ICONS.vote;
  });
}

// ====== VC FOOTER LOCK ICON ======
function replaceVaultCardFooter() {
  const vcFooter = document.querySelector('.vc-footer span:first-child');
  if (vcFooter) {
    vcFooter.innerHTML = ICONS.shield + ' All resources verified';
    vcFooter.style.display = 'inline-flex';
    vcFooter.style.alignItems = 'center';
    vcFooter.style.gap = '5px';
  }
}

// ====== INSTAGRAM BUTTON ======
function replaceIGButton() {
  document.querySelectorAll('.btn-ig').forEach(btn => {
    const svgEl = btn.querySelector('svg');
    if (svgEl) {
      svgEl.outerHTML = ICONS.instagram;
    }
  });
}

// ====== MAIN INIT ======
document.addEventListener('DOMContentLoaded', () => {
  injectLogos();
  replaceStepIcons();
  replaceCatIcons();
  replaceEmptyIcons();
  replaceVcLinks();
  replaceSuccessIcon();
  replaceDigestIcon();
  replaceAdminIcons();
  replaceAdminBadge();
  replaceSubmitBtn();
  replaceVaultCardFooter();
  replaceIGButton();
  replaceResourceIcons();
});
