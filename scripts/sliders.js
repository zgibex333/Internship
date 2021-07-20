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
});

$(document).ready(() => {
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

const activeSlider = document.querySelectorAll('.active-slider');
const fieldNext = document.querySelector('.blog-slide')
const field = document.querySelector('.slide');
const arrayWithSliders = [field, fieldNext];

field.addEventListener('mousedown', () => {
    activeSlider[0].classList.add('active-slider-move');
    document.addEventListener('mouseup', () => {
        activeSlider[0].classList.remove('active-slider-move');
    })
})

field.addEventListener('touchstart', () => {
    activeSlider[0].classList.add('active-slider-move');
    document.addEventListener('touchend', () => {
        activeSlider[0].classList.remove('active-slider-move');
    })
})

fieldNext.addEventListener('mousedown', () => {
    activeSlider[1].classList.add('active-slider-move');
    document.addEventListener('mouseup', () => {
        activeSlider[1].classList.remove('active-slider-move');
    })
})

fieldNext.addEventListener('touchstart', () => {
    activeSlider[1].classList.add('active-slider-move');
    document.addEventListener('touchend', () => {
        activeSlider[1].classList.remove('active-slider-move');
    })
})