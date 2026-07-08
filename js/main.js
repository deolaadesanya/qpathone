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
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(function() {
      form.innerHTML = '<div style="text-align:center;padding:2rem">'
        + '<div style="font-size:40px;margin-bottom:1rem;color:#2FA37C">✓</div>'
        + '<h3 style="font-family:\'Cormorant Garamond\',Georgia,serif;font-size:1.75rem;color:#0D1F19;margin-bottom:.5rem">Message received</h3>'
        + '<p style="font-size:14px;color:#5C7268;font-weight:300;line-height:1.7">Thank you for getting in touch. We will respond to your enquiry within one working day.</p>'
        + '</div>';
    }, 1200);
  });
}
