const header = document.getElementById('site-header');
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12));

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  toggle.classList.toggle('active');
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  });
});

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && (entry.target.classList.add('in'), observer.unobserve(entry.target))),
  { threshold: 0.16 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
