const faqItens = document.querySelectorAll('.faq-item');

faqItens.forEach(faqItem => {
    faqItem.addEventListener('click', () => {
        const faqBody = faqItem.querySelector('.faq-body');
        faqBody.classList.toggle('active');
    });
});