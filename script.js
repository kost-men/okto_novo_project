// ===== Бургер-меню (мобильная версия) =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => nav.classList.toggle('open'));
// закрыть меню после клика по пункту
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// ===== Всплывающее окно =====
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
// закрытие по Esc
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== Форма заявки =====
// Сейчас: открывает почтовый клиент. ЗАМЕНИТЕ ucheba@example.ru на реальную почту,
// либо вставьте вместо формы iframe Яндекс Формы.
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
