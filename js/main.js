/* ================================
   STELLEN'S VAULT — MAIN JS
   Powered by Supabase
================================ */

// ====== CUSTOM CURSOR ======
const cursor = document.getElementById('cursor');
if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .cat-card, .inf-card, .step-card, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(2)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
  });
}

// ====== NAVBAR SCROLL ======
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ====== MOBILE MENU ======
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ====== REVEAL ON SCROLL ======
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ====== FILTER BUTTONS ======
document.querySelectorAll('.filter-btns').forEach(group => {
  group.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterItems(btn.getAttribute('data-filter'));
    });
  });
});

function filterItems(filter) {
  document.querySelectorAll('.inf-card').forEach(card => {
    card.style.display = (filter === 'all' || card.dataset.niche === filter) ? '' : 'none';
  });
  document.querySelectorAll('.res-item').forEach(item => {
    item.style.display = (filter === 'all' || item.dataset.cat === filter) ? '' : 'none';
  });
}

// ====== SEARCH ======
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    document.querySelectorAll('.inf-card, .res-item').forEach(el => {
      el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// ====== RENDER INFLUENCER GRID ======
function renderInfluencers(data) {
  const grid = document.getElementById('infGrid');
  const empty = document.getElementById('emptyState');
  if (!grid) return;
  if (!data || data.length === 0) {
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';
  grid.innerHTML = data.map(inf => {
    const igUser = inf.handle.replace('@','');
    const avatarUrl = `https://unavatar.io/instagram/${igUser}`;
    return `
    <a href="influencer-profile.html?id=${inf.id}" class="inf-card reveal" data-niche="${inf.niche_key}">
      <div class="ic-top">
        <img src="${avatarUrl}" class="ic-avatar-img"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
          alt="${inf.handle}">
        <div class="ic-avatar" style="display:none">${inf.name.charAt(0).toUpperCase()}</div>
        <div>
          <div class="ic-handle">${inf.handle}</div>
          <div class="ic-name">${inf.name}</div>
        </div>
      </div>
      <div class="ic-niche">${inf.niche}</div>
      <div class="ic-stats">
        <div><strong>${inf.followers || '–'}</strong>Followers</div>
        <div><strong>${inf.link_count || 0}</strong>Links</div>
      </div>
    </a>
  `}).join('');
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ====== RENDER RESOURCES LIST ======
function renderResources(resources, containerId = 'resList') {
  const list = document.getElementById(containerId);
  const empty = document.getElementById('emptyState') || document.getElementById('profileEmpty');
  if (!list) return;
  if (!resources || resources.length === 0) {
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';
  const saves = JSON.parse(localStorage.getItem('sv_saves') || '{}');
  list.innerHTML = resources.map(r => `
    <div class="res-item reveal" data-id="${r.id}" data-cat="${r.category}">
      <div class="res-votes">
        <button class="vote-btn" onclick="handleVote('${r.id}', ${r.votes || 0}, this)">▲</button>
        <span class="vote-count">${r.votes || 0}</span>
      </div>
      <div class="res-content">
        <div class="res-title">${r.title}</div>
        <div class="res-meta">
          <span class="res-cat">${r.category}</span>
          ${r.tag ? `<span class="res-tag tag-${r.tag.toLowerCase()}">${r.tag}</span>` : ''}
          ${r.influencers ? `<span>via ${r.influencers.handle}</span>` : ''}
        </div>
      </div>
      <div class="res-actions">
        <a href="${r.url}" target="_blank" rel="noopener" class="res-link">Visit →</a>
        <button class="save-btn ${saves[r.id] ? 'saved' : ''}" onclick="handleSave('${r.id}', this)">
          <span>${saves[r.id] ? 'Saved ★' : 'Save'}</span>
        </button>
      </div>
    </div>
  `).join('');
  list.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ====== VOTE ======
async function handleVote(id, currentVotes, btn) {
  if (btn.classList.contains('voted')) return;
  btn.classList.add('voted');
  const countEl = btn.closest('.res-votes').querySelector('.vote-count');
  countEl.textContent = currentVotes + 1;
  if (typeof upvoteResource === 'function') await upvoteResource(id, currentVotes);
}

// ====== SAVE ======
function handleSave(id, btn) {
  const saves = JSON.parse(localStorage.getItem('sv_saves') || '{}');
  saves[id] = !saves[id];
  localStorage.setItem('sv_saves', JSON.stringify(saves));
  btn.classList.toggle('saved', saves[id]);
  btn.querySelector('span').textContent = saves[id] ? 'Saved ★' : 'Save';
}

// ====== INIT PAGES ======
document.addEventListener('DOMContentLoaded', async () => {

  // guard — supabase functions might not be loaded on all pages
  const hasDB = typeof fetchInfluencers === 'function';

  // ---- HOME PAGE ----
  if (document.querySelector('.hero-stats') && hasDB) {
    const [infs, res] = await Promise.all([fetchInfluencers(), fetchResources()]);
    const nums = document.querySelectorAll('.stat-num');
    if (nums[0]) nums[0].textContent = infs.length;
    if (nums[1]) nums[1].textContent = res.length;
    if (nums[2]) nums[2].textContent = new Set(res.map(r => r.category)).size;
  }

  // ---- INFLUENCERS PAGE ----
  if (document.getElementById('infGrid') && hasDB) {
    const [infs, res] = await Promise.all([fetchInfluencers(), fetchResources()]);
    const countMap = {};
    res.forEach(r => { countMap[r.influencer_id] = (countMap[r.influencer_id] || 0) + 1; });
    infs.forEach(i => i.link_count = countMap[i.id] || 0);
    renderInfluencers(infs);
  }

  // ---- RESOURCES PAGE ----
  if (document.getElementById('resList') && !document.getElementById('profileHandle') && hasDB) {
    const res = await fetchResources();
    renderResources(res);
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        const items = [...document.querySelectorAll('.res-item')];
        const list = document.getElementById('resList');
        if (sortSelect.value === 'top') {
          items.sort((a, b) =>
            parseInt(b.querySelector('.vote-count').textContent) -
            parseInt(a.querySelector('.vote-count').textContent)
          );
          items.forEach(i => list.appendChild(i));
        }
      });
    }
  }

  // ---- INFLUENCER PROFILE PAGE ----
  if (document.getElementById('profileHandle') && hasDB) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) return;
    const [infs, res] = await Promise.all([fetchInfluencers(), fetchResources(id)]);
    const inf = infs.find(i => i.id === id);
    if (!inf) return;
    document.getElementById('profileAvatar').textContent = inf.name.charAt(0).toUpperCase();
    document.getElementById('profileHandle').textContent = inf.handle;
    document.getElementById('profileName').textContent = inf.name;
    document.getElementById('profileNiche').textContent = inf.niche;
    document.getElementById('profileFollowers').textContent = inf.followers || '–';
    document.getElementById('profileLinks').textContent = res.length;
    document.getElementById('profileVotes').textContent = res.reduce((s, r) => s + (r.votes || 0), 0);
    document.getElementById('profileIGLink').href = inf.ig_url;
    document.title = `${inf.name} — Stellen's Vault`;
    renderResources(res, 'profileResList');
  }

});
