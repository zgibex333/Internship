$('.menu__button').on('click', changeTheme);
updateColor();

function changeTheme() {
    if (!this.classList.contains('light')) {
        transition();
        document.documentElement.setAttribute('data-theme', 'light');
        this.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        transition();
        document.documentElement.setAttribute('data-theme', 'dark');
        this.classList.remove('light');
        localStorage.clear();
    }
    changeIcons();
}

let transition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
}


function updateColor() {
    let trigger = localStorage.getItem('theme');
    if (trigger) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    changeIcons();
}

function changeIcons() {
    let logo = document.querySelector('.menu__logo');
    let trigger = document.documentElement.getAttribute('data-theme');
    let sort = document.querySelector('#sort');
    if (trigger === 'light') {
        if (document.title === "Digiency") {
            logo.innerHTML = '<img src="./assets/header/logo_dark.svg" alt="" />';
        } else {
            logo.innerHTML = '<img src="../assets/header/logo_dark.svg" alt="" />';
        }
        if (sort) {
            sort.style.background = 'url(../assets/article/dark-arrowdownn.svg) no-repeat right';
        }
    } else {
        if (document.title === "Digiency") {
            logo.innerHTML = '<img src="./assets/header/logo.svg" alt="" />';
        } else {
            logo.innerHTML = '<img src="../assets/header/logo.svg" alt="" />';
        }
        if (sort) {
            sort.style.background = 'url(../assets/article/arrowdownn.svg) no-repeat right';
        }
    }
}