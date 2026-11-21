const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-service]').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('#service-select').value = link.dataset.service;
}));

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const pet = form.get('pet').trim();
  const size = form.get('size');
  const service = form.get('service');
  const date = form.get('date');
  const lines = [
    `Hola, quiero coordinar una cita en Mimo Pet Spa para ${pet}.`,
    `Tamaño: ${size}.`,
    `Servicio: ${service}.`,
    date ? `Día que nos sirve: ${date}.` : '',
  ].filter(Boolean);
  window.open(`https://wa.me/573001234567?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
});
