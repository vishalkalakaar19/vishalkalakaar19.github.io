// ===== Mobile nav =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Skill bar fill animation =====
const barRows = document.querySelectorAll('.bar-row');
const barIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      barIo.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
barRows.forEach(el => barIo.observe(el));

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Generic lightbox (gallery / before-after etc.) =====
function openLightbox(html) {
  let lb = document.getElementById('siteLightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'siteLightbox';
    lb.className = 'lightbox';
    lb.innerHTML = `<div class="lightbox-inner gallery-lb"></div>`;
    document.body.appendChild(lb);
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightbox();
    });
  }
  lb.querySelector('.lightbox-inner').innerHTML = html;
  lb.classList.add('open');
}
function closeLightbox() {
  const lb = document.getElementById('siteLightbox');
  if (lb) lb.classList.remove('open');
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
