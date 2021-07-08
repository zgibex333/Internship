const scrollToTopBtn = document.querySelector('.up-to-start'); 

scrollToTopBtn.addEventListener('click', scrollToTop); 

function scrollToTop() {
    console.log(1);
    window.scrollTo({top: 0, behavior: 'smooth'});
}