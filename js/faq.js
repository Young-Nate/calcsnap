// Accordion FAQ
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;
    answer.style.display = 'none';
    btn.addEventListener('click', function () {
      const isOpen = item.hasAttribute('open');
      // Close all
      document.querySelectorAll('.faq-item[open]').forEach(function (o) {
        o.removeAttribute('open');
        o.querySelector('.faq-answer').style.display = 'none';
      });
      // Open clicked if was closed
      if (!isOpen) {
        item.setAttribute('open', '');
        answer.style.display = 'block';
      }
    });
  });
});
