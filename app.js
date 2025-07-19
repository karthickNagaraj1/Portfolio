document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional alert when clicking contact email
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
  emailLink.addEventListener('click', () => {
    alert('Opening mail app to contact Karthick.');
  });
}
