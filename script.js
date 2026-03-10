const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...navLinks].map((link) => document.querySelector(link.getAttribute('href')));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const targetId = link.getAttribute('href').slice(1);
        link.classList.toggle('active', targetId === entry.target.id);
      });
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => {
  if (section) observer.observe(section);
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('button');
    submitButton.textContent = 'Lorem ipsum odesláno';
    submitButton.disabled = true;
  });
}
