const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const modal = document.getElementById('modal');
document.querySelectorAll('[data-open-modal]').forEach(btn =>
  btn.addEventListener('click', () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // не скроллить фон
  })
);
document.querySelectorAll('[data-close-modal]').forEach(el =>
  el.addEventListener('click', closeModal)
);

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const subject = 'Заявка с сайта: ' + f.name.value;
  const body = 'Имя: ' + f.name.value + '\nТелефон: ' + f.phone.value +
               '\nE-mail: ' + f.email.value + '\nСообщение: ' + f.message.value;
  window.location.href = 'mailto:ucheba@example.ru?subject=' +
    encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  document.getElementById('modal-ok').hidden = false;
  f.reset();
});
