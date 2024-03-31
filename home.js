document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const parent = event.target.closest('.faq-item');
        parent.classList.toggle('open');
        const answer = parent.querySelector('.faq-answer');
        answer.classList.toggle('slide-up');
        answer.classList.toggle('slide-down');
        const arrow = parent.querySelector('.arrow-img');
        arrow.classList.toggle('rotate-down');
    });
}); 
