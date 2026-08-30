const { publications, awards, services } = window.siteData;
const publicationList = document.querySelector('#publicationList');
const filterWrap = document.querySelector('#yearFilters');
const toggle = document.querySelector('#togglePublications');
let activeYear = 'All';
let expanded = false;

function emphasizeName(authors) {
  return authors.replaceAll('Jingling Sun', '<strong>Jingling Sun</strong>');
}

function renderPublications() {
  const filtered = activeYear === 'All' ? publications : publications.filter(p => String(p.year) === activeYear);
  const visible = expanded || activeYear !== 'All' ? filtered : filtered.slice(0, 6);
  publicationList.innerHTML = visible.map((p, i) => `
    <article class="publication-card">
      <div class="pub-meta"><span>${p.year}</span><span>${p.venue}</span></div>
      <div>
        <h3>${p.link || p.pdf ? `<a href="${p.link || p.pdf}" target="_blank" rel="noopener">${p.title}</a>` : p.title}</h3>
        <p>${emphasizeName(p.authors)}</p>
        ${p.link || p.pdf ? `<a class="paper-link" href="${p.link || p.pdf}" target="_blank" rel="noopener">${p.link ? 'Link' : 'PDF'}</a>` : ''}
      </div>
      <span class="pub-arrow" aria-hidden="true"></span>
    </article>`).join('');
  toggle.hidden = activeYear !== 'All' || publications.length <= 6;
  toggle.textContent = expanded ? 'Show selected publications' : 'Show all publications';
}

['All', ...new Set(publications.map(p => String(p.year)))].forEach(year => {
  const button = document.createElement('button'); button.type = 'button'; button.textContent = year;
  button.className = year === activeYear ? 'active' : '';
  button.addEventListener('click', () => { activeYear = year; expanded = year !== 'All'; [...filterWrap.children].forEach(b => b.classList.toggle('active', b === button)); renderPublications(); });
  filterWrap.append(button);
});

function renderTimeline(target, items) {
  document.querySelector(target).innerHTML = items.map(item => `<div class="timeline-item"><time>${item.year}</time><div><h3>${item.title}</h3><p>${item.detail}</p></div></div>`).join('');
}

toggle.addEventListener('click', () => { expanded = !expanded; renderPublications(); });
renderPublications(); renderTimeline('#awardList', awards); renderTimeline('#serviceList', services);
document.querySelector('#currentYear').textContent = new Date().getFullYear();
