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