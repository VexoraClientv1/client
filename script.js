// Vexora Client – kleine Scroll-Reveal-Animation ohne externe JavaScript-Bibliotheken.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".feature, .download-box, .faq-list").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
