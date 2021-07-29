const scrollToTopBtn = document.querySelector('.up-to-start');
const contactBtn = document.querySelectorAll('.scroll');
const extraArrow = document.querySelector('.arrow-to-start');
const extraArrowStop = document.querySelector('.rights');

contactBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(btn.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$('.up-to-start, .arrow-to-start').on('click', scrollToTop);
document.addEventListener('scroll', showArrow);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showArrow() {
    if (window.pageYOffset >= window.innerHeight) {
        extraArrow.classList.add('arrow-visible');
    }
    if (window.pageYOffset < window.innerHeight) {
        extraArrow.classList.remove('arrow-visible');
    }
    if (window.innerHeight >= extraArrowStop.getBoundingClientRect().top) {
        extraArrow.classList.remove('arrow-visible');
    }
}