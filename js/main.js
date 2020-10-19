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

let btn1 = document.querySelector('#btn1');

const toCollection = () => {
        document.location.href = 'collection.html';
};
if (btn1 !== null) {
    btn1.addEventListener('click', toCollection);
}

const anchors = document.querySelector('.active');


    anchors.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchors.getAttribute('id');
        console.log(blockID)

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })