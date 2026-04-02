/* ================================
   STELLEN'S VAULT — HOME PAGE JS
   Global Search + Featured + Category Counts
================================ */

let allInfluencers = [];
let allResources = [];

document.addEventListener('DOMContentLoaded', async () => {
  if (!document.querySelector('.hero-stats')) return;
  if (typeof fetchInfluencers !== 'function') return;

  // Load all data once
  [allInfluencers, allResources] = await Promise.all([
    fetchInfluencers(),
    fetchResources()
  ]);

  updateStats();
  updateCategoryCounts();
  loadFeatured();
});

// ====== STATS ======
function updateStats() {
  const nums = document.querySelectorAll('.stat-num');
  const cats = new Set(allResources.map(r => r.category)).size;
  if (nums[0]) animateNum(nums[0], allInfluencers.length);
  if (nums[1]) animateNum(nums[1], allResources.length);
  if (nums[2]) animateNum(nums[2], cats);
}

function animateNum(el, target) {
  if (target === 0) { el.textContent = '0'; return; }
  let start = 0;
  const duration = 1200;
  const step = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

// ====== CATEGORY COUNTS ======
function updateCategoryCounts() {
  const countMap = {};
  allResources.forEach(r => {
    countMap[r.category] = (countMap[r.category] || 0) + 1;
  });
  document.querySelectorAll('.cat-count[data-cat]').forEach(el => {
    const cat = el.getAttribute('data-cat');
    el.textContent = `${countMap[cat] || 0} links`;
  });
}

// ====== FEATURED TOP PICKS ======
async function loadFeatured() {
  const grid = document.getElementById('featuredGrid');
  const empty = document.getElementById('featuredEmpty');
  if (!grid) return;

  // Top 3 by votes
  const top = [...allResources]
    .sort((a, b) => (b.votes || 0) - (a.votes || 0))
    .slice(0, 3);

  if (top.length === 0) {
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';

  // Build influencer map for avatars
  const infMap = {};
  allInfluencers.forEach(i => infMap[i.id] = i);

  grid.innerHTML = top.map((r, idx) => {
    const inf = infMap[r.influencer_id];
    const igHandle = inf ? inf.handle : '';
    const igUrl = inf ? inf.ig_url : '#';
    const avatarUrl = inf ? `https://unavatar.io/instagram/${igHandle.replace('@','')}` : '';

    return `
      <div class="featured-card reveal" style="transition-delay:${idx * 0.1}s">
        <div class="fc-top">
          <div class="fc-rank">#${idx + 1}</div>
          <div class="fc-tags">
            ${r.tag ? `<span class="res-tag tag-${r.tag.toLowerCase()}">${r.tag}</span>` : ''}
            <span class="res-cat-badge">${r.category}</span>
          </div>
        </div>
        <h3 class="fc-title">${r.title}</h3>
        <div class="fc-inf">
          ${avatarUrl
            ? `<img src="${avatarUrl}" class="fc-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" alt="${igHandle}">`
            : ''}
          <div class="fc-avatar-fallback" style="${avatarUrl ? 'display:none' : 'display:flex'}">${inf ? inf.name.charAt(0) : '?'}</div>
          <span>${igHandle}</span>
        </div>
        <div class="fc-footer">
          <div class="fc-votes">▲ ${r.votes || 0} votes</div>
          <a href="${r.url}" target="_blank" rel="noopener" class="fc-link">Visit →</a>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.reveal').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    observer.observe(el);
  });
}

// ====== GLOBAL SEARCH ======
const globalSearchInput = document.getElementById('globalSearch');
const gsResults = document.getElementById('gsResults');

if (globalSearchInput) {
  globalSearchInput.addEventListener('input', () => {
    const q = globalSearchInput.value.trim().toLowerCase();
    if (!q) { gsResults.style.display = 'none'; return; }
    showSearchResults(q);
  });

  globalSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runGlobalSearch();
    if (e.key === 'Escape') { gsResults.style.display = 'none'; }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.global-search')) {
      gsResults.style.display = 'none';
    }
  });
}

function showSearchResults(q) {
  const matchedInf = allInfluencers.filter(i =>
    i.handle.toLowerCase().includes(q) ||
    i.name.toLowerCase().includes(q) ||
    i.niche.toLowerCase().includes(q)
  ).slice(0, 3);

  const matchedRes = allResources.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.category.toLowerCase().includes(q)
  ).slice(0, 4);

  if (matchedInf.length === 0 && matchedRes.length === 0) {
    gsResults.innerHTML = `<div class="gs-empty">No results for "<strong>${q}</strong>"</div>`;
    gsResults.style.display = 'block';
    return;
  }

  let html = '';

  if (matchedInf.length > 0) {
    html += `<div class="gs-section-label">Influencers</div>`;
    html += matchedInf.map(i => `
      <a href="influencer-profile.html?id=${i.id}" class="gs-item">
        <div class="gs-item-icon">👤</div>
        <div class="gs-item-info">
          <div class="gs-item-title">${i.handle}</div>
          <div class="gs-item-meta">${i.niche}</div>
        </div>
      </a>
    `).join('');
  }

  if (matchedRes.length > 0) {
    html += `<div class="gs-section-label">Resources</div>`;
    html += matchedRes.map(r => `
      <a href="${r.url}" target="_blank" rel="noopener" class="gs-item">
        <div class="gs-item-icon">🔗</div>
        <div class="gs-item-info">
          <div class="gs-item-title">${r.title}</div>
          <div class="gs-item-meta">${r.category}${r.tag ? ` · ${r.tag}` : ''}</div>
        </div>
        ${r.tag ? `<span class="res-tag tag-${r.tag.toLowerCase()}">${r.tag}</span>` : ''}
      </a>
    `).join('');
  }

  html += `<a href="resources.html" class="gs-view-all">View all results in Resources →</a>`;
  gsResults.innerHTML = html;
  gsResults.style.display = 'block';
}

function runGlobalSearch() {
  const q = globalSearchInput.value.trim();
  if (!q) return;
  window.location.href = `resources.html?q=${encodeURIComponent(q)}`;
}
