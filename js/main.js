// btnMenu
let btn = document.querySelector('.menu_icon');
let ul = document.querySelector('#ul');

const showMenu = () => {
    if (ul.style.display === "block" ) {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
};
btn.addEventListener('click', showMenu);

// переход по ссылке
const heroBtn = document.querySelector('.hero_btns');
const btn1 = document.querySelector('.to-video');
const btn2 = document.querySelector('#btn2');

const toCollection = () => {
        document.location.href = 'collection.html';
};
const toVideo = (e) => {
    e.preventDefault();

    const sectionId = btn1.getAttribute('id');
    console.log(sectionId)

    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
};
if (heroBtn !== null) {
    btn1.addEventListener('click', toVideo);
    btn2.addEventListener('click', toCollection)
}