// ── Scroll progress bar ──
const bar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  bar.style.width = ((scrollTop / docHeight) * 100) + '%';
});

// ── Fade-in on scroll ──
const chapters = document.querySelectorAll('.chapter');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
chapters.forEach(c => observer.observe(c));
