// Année dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Formulaire de devis -> ouverture d'un email pré-rempli
const form = document.getElementById('quoteForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const nom = (data.get('nom') || '').toString().trim();
  const tel = (data.get('tel') || '').toString().trim();

  if (!nom || !tel) {
    status.hidden = false;
    status.className = 'form__status';
    status.style.background = '#fdecec';
    status.style.color = '#b02525';
    status.textContent = 'Merci de renseigner au moins votre nom et votre téléphone.';
    return;
  }

  const email = (data.get('email') || '').toString().trim();
  const materiel = (data.get('materiel') || '').toString().trim();
  const message = (data.get('message') || '').toString().trim();

  const sujet = `Demande de devis - ${nom}`;
  const corps =
    `Nom / Société : ${nom}\n` +
    `Téléphone : ${tel}\n` +
    `Email : ${email || '-'}\n` +
    `Matériel souhaité : ${materiel || '-'}\n\n` +
    `Message :\n${message || '-'}`;

  const mailto = `mailto:Contact@bsmglobal.gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;

  status.hidden = false;
  status.className = 'form__status ok';
  status.style.background = '';
  status.style.color = '';
  status.textContent = 'Votre demande est prête ✓ Votre messagerie va s\'ouvrir. Sinon, appelez-nous directement.';

  window.location.href = mailto;
});

// Animation d'apparition au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.cat, .price-card, .feature, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
