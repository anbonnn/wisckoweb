console.log('Script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    // FAQ Dropdown Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h2');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.toggle');

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherToggle = otherItem.querySelector('.toggle');
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                    if (otherToggle) otherToggle.textContent = '+';
                }
            });

            // Toggle current item
            item.classList.toggle('open');
            if (item.classList.contains('open')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                toggle.textContent = '-';
            } else {
                answer.style.maxHeight = null;
                toggle.textContent = '+';
            }
        });
    });
});
