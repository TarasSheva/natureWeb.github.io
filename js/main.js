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

let windowSlider = document.querySelector(".card_slider");

let slider = document.querySelectorAll(".card_item");
console.log(slider);
console.log(windowSlider);

[].forEach.call(slider, function (element) {
    element.onclick = function () {
        windowSlider.style.display = "block";

        let col = this.getAttribute("id");


        let slideIndex = Number(col);
        showSlides(slideIndex);

        function showSlides(slideIndex) {
            let slides = document.getElementsByClassName("slides");

            let prev = document.querySelector('.prev');
            prev.onclick = function () {
                slideIndex--;
                if (slideIndex < 1) {
                    slideIndex = slides.length;
                }
                showSlides(slideIndex);

            };
            let next = document.querySelector('.next');
            next.onclick = function () {
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1;
                }
                showSlides(slideIndex);
            };

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
    }
})



// [].forEach.call(slider, function (el) {
//     el.onclick = function () {
//         windowSlider.style.display = 'block';
//         let col = this.getAttribute("id");
//
//         let slideIndex = Number(col.slice(-1));
//         showSlides(slideIndex);
//
//         function showSlides(slideIndex) {
//             let slides = document.getElementsByClassName("my_slides");
//
//             let prev = document.querySelector('.prev');
//             prev.onclick = function () {
//                 slideIndex--;
//                 if (slideIndex < 1) {
//                     slideIndex = slides.length;
//                 }
//                 showSlides(slideIndex);
//
//             };
//             let next = document.querySelector('.next');
//             next.onclick = function () {
//                 slideIndex++;
//                 if (slideIndex > slides.length) {
//                     slideIndex = 1;
//                 }
//                 showSlides(slideIndex);
//             };
//
//             for (let i = 0; i < slides.length; i++) {
//                 slides[i].style.display = "none";
//             }
//             slides[slideIndex - 1].style.display = "block";
//         }
//     };
//
// });