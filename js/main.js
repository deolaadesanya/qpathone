// QPathOne — main.js

// ── ACTIVE NAV on scroll ───────────────────────────────────────────
function setActiveNav() {
  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  var scrollY = window.scrollY + 100;
  sections.forEach(function(s) {
    if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
      links.forEach(function(l) { l.classList.remove('active'); });
      var active = document.querySelector('.nav-links a[href="#' + s.id + '"]');
      if (active) active.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveNav);

// ── FADE UP on scroll ──────────────────────────────────────────────
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(function(el) {
  observer.observe(el);
});

// ── CONTACT FORM ──────────────────────────────────────────────────
// Form submits natively to Formspree — no JS interception needed
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    var btn = form.querySelector('button[type=submit]');
    if (btn) {
      btn.textContent = 'Sending…';
      btn.disabled = true;
    }
    // Allow native form submission to Formspree
  });
}
