document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelectorAll('#year');
  year.forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  }

  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      note.textContent = 'Your form is ready. Connect this form to Formspree, Netlify Forms, or a backend to receive real messages.';
      form.reset();
    });
  }
});
