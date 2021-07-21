const sliderSettings = {
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
}

//slider
$(document).ready(() => {
    $('.slide, .blog-slide').slick(sliderSettings);
});

//event listeners
$('.blog-slide').on('mousedown touchstart', startAction);
$('.slide').on('mousedown touchstart', startAction);

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