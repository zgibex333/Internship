$('.burger, .burger_point').on('click', toggleMenu);

function toggleMenu() {
    console.log(11111);
    document.querySelector('.burger').classList.toggle('burger_active');
    const back = document.querySelector('.menu-field');
    back.classList.toggle('menu-field_active');
    document.querySelector('body').classList.toggle('b_active');
    document.querySelector('.menu__list').classList.toggle('menu__list_active');
    document.querySelector('.field__list').classList.toggle('field__active')
}