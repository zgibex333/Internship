$(document).ready(() => {
    $('.slide').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
    });
    $('.blog-slide').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
    });
});

//variables
const activeSlider = document.querySelectorAll('.active-slider');
const fieldNext = document.querySelector('.blog-slide')
const field = document.querySelector('.slide');

//event listeners
field.addEventListener('mousedown', startAction);
field.addEventListener('touchstart', startAction);
fieldNext.addEventListener('mousedown', startAction);
fieldNext.addEventListener('touchstart', startAction);

//function
function startAction(e) {
    const node = this.parentElement.querySelector('.active-slider');
    if (e.type === 'mousedown') {
        node.classList.add('active-slider-move');
        document.addEventListener('mouseup', () => {
            node.classList.remove('active-slider-move');
        })
    }
    if (e.type === "touchstart") {
        node.classList.add('active-slider-move');
        document.addEventListener('touchend', () => {
            node.classList.remove('active-slider-move');
        })
    }
}