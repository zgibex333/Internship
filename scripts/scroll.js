const scrollToTopBtn = document.querySelector('.up-to-start'); 

scrollToTopBtn.addEventListener('click', scrollToTop); 

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}