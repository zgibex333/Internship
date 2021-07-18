const scrollToTopBtn = document.querySelector('.up-to-start');
const contactBtn = document.querySelectorAll('.scroll');

contactBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(btn.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

scrollToTopBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}