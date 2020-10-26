// btnMenu
let btn = document.querySelector('.menu_icon');
let ul = document.querySelector('#ul');

const showMenu = () => {
    if (ul.style.display === "block") {
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

    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
};
if (heroBtn !== null) {
    btn1.addEventListener('click', toVideo);
    btn2.addEventListener('click', toCollection)
}

// let windowSlider = document.querySelector(".card_slider");
//
// let slider = document.querySelectorAll(".card_item");
// console.log(slider);
// console.log(windowSlider);
//
// [].forEach.call(slider, function (element) {
//     element.onclick = function () {
//         windowSlider.style.display = "block";
//
//         let col = this.getAttribute("id");
//
//
//         let slideIndex = Number(col);
//         showSlides(slideIndex);
//
//         function showSlides(slideIndex) {
//             let slides = document.getElementsByClassName("slides");
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
//     }
// })


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
//
// const slider = document.querySelectorAll(".card_item");
//
// const openSlider = document.querySelector('.slider_wrapp');
//
//
// const sliderShow = (numTr, numSl) => {
//
//
//     let slider = document.querySelector('.slider'),
//         closeSlide = slider.querySelector('.close'),
//         sliderList = slider.querySelector('.card_slider'),
//         sliderTrack = slider.querySelector(numTr),
//         slides = sliderTrack.querySelectorAll(numSl),
//         arrows = slider.querySelector('.slider_arrows'),
//         prev = arrows.children[0],
//         next = arrows.children[1],
//         slideWidth = slides[0].offsetWidth,
//         slideIndex = 0,
//         posInit = 0,
//         posX1 = 0,
//         posX2 = 0,
//         posY1 = 0,
//         posY2 = 0,
//         posFinal = 0,
//         isSwipe = false,
//         isScroll = false,
//         allowSwipe = true,
//         transition = true,
//         nextTrf = 0,
//         prevTrf = 0,
//         lastTrf = --slides.length * slideWidth,
//         posThreshold = slides[0].offsetWidth * 0.35,
//         trfRegExp = /([-0-9.]+(?=px))/;
//
//     sliderTrack.style.display = 'flex';
//     slides[0].style.display = 'flex';
//     slides[1].style.display = 'flex';
//     slides[2].style.display = 'flex';
//     slides[3].style.display = 'flex';
//
//     const getEvent = function () {
//         return (event.type.search('touch') !== -1) ? event.touches[0] : event;
//     };
//
//     const slide = function () {
//         if (transition) {
//             sliderTrack.style.transition = 'transform .5s';
//         }
//         sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
//
//         prev.classList.toggle('disabled', slideIndex === 0);
//         next.classList.toggle('disabled', slideIndex === --slides.length);
//     };
//
//     const swipeStart = function () {
//         let evt = getEvent();
//
//         if (allowSwipe) {
//
//             transition = true;
//
//             nextTrf = (slideIndex + 1) * -slideWidth;
//             prevTrf = (slideIndex - 1) * -slideWidth;
//
//             posInit = posX1 = evt.clientX;
//             posY1 = evt.clientY;
//
//             sliderTrack.style.transition = '';
//
//             document.addEventListener('touchmove', swipeAction);
//             document.addEventListener('mousemove', swipeAction);
//             document.addEventListener('touchend', swipeEnd);
//             document.addEventListener('mouseup', swipeEnd);
//
//             sliderList.classList.remove('grab');
//             sliderList.classList.add('grabbing');
//         }
//     };
//
//     const setTransform = function (transform, comapreTransform) {
//         if (transform >= comapreTransform) {
//             if (transform > comapreTransform) {
//                 sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
//             }
//         }
//         allowSwipe = false;
//     };
//
//     const reachEdge = function () {
//         transition = false;
//         swipeEnd();
//         allowSwipe = true;
//     };
//
//     const swipeAction = function () {
//
//         let evt = getEvent(),
//             style = sliderTrack.style.transform,
//             transform = +style.match(trfRegExp)[0];
//
//         posX2 = posX1 - evt.clientX;
//         posX1 = evt.clientX;
//
//         posY2 = posY1 - evt.clientY;
//         posY1 = evt.clientY;
//
//         // определение действия свайп или скролл
//         if (!isSwipe && !isScroll) {
//             let posY = Math.abs(posY2);
//             if (posY > 7 || posX2 === 0) {
//                 isScroll = true;
//                 allowSwipe = false;
//             } else if (posY < 7) {
//                 isSwipe = true;
//             }
//         }
//
//         if (isSwipe) {
//             // запрет ухода влево на первом слайде
//             if (slideIndex === 0) {
//                 if (posInit < posX1) {
//                     setTransform(transform, 0);
//                     return;
//                 } else {
//                     allowSwipe = true;
//                 }
//             }
//
//             // запрет ухода вправо на последнем слайде
//             if (slideIndex === --slides.length) {
//                 if (posInit > posX1) {
//                     setTransform(transform, lastTrf);
//                     return;
//                 } else {
//                     allowSwipe = true;
//                 }
//             }
//
//             // запрет протаскивания дальше одного слайда
//             if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
//                 reachEdge();
//                 return;
//             }
//
//             // двигаем слайд
//             sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
//         }
//
//     };
//
//     const swipeEnd = function () {
//         posFinal = posInit - posX1;
//
//         isScroll = false;
//         isSwipe = false;
//
//         document.removeEventListener('touchmove', swipeAction);
//         document.removeEventListener('mousemove', swipeAction);
//         document.removeEventListener('touchend', swipeEnd);
//         document.removeEventListener('mouseup', swipeEnd);
//
//         sliderList.classList.add('grab');
//         sliderList.classList.remove('grabbing');
//
//         if (allowSwipe) {
//             if (Math.abs(posFinal) > posThreshold) {
//                 if (posInit < posX1) {
//                     slideIndex--;
//                 } else if (posInit > posX1) {
//                     slideIndex++;
//                 }
//             }
//
//             if (posInit !== posX1) {
//                 allowSwipe = false;
//                 slide();
//             } else {
//                 allowSwipe = true;
//             }
//
//         } else {
//             allowSwipe = true;
//         }
//
//     };
//
//     const closeSlider = function () {
//         openSlider.style.display = "none";
//     };
//
//     sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
//     sliderList.classList.add('grab');
//
//     sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
//     slider.addEventListener('touchstart', swipeStart);
//     slider.addEventListener('mousedown', swipeStart);
//     closeSlide.addEventListener('click', closeSlider);
//
//     arrows.addEventListener('click', function () {
//         let target = event.target;
//
//         if (target.classList.contains('next')) {
//             slideIndex++;
//         } else if (target.classList.contains('prev')) {
//             slideIndex--;
//         } else {
//             return;
//         }
//
//         slide();
//     });
//     console.log(slides, slideWidth)
// };
//
//
// [].forEach.call(slider, function (element) {
//     element.onclick = function () {
//         openSlider.style.display = "block";
//
//         let num = +(this.getAttribute('id'));
//         let numTr = `.slider_track${num}`;
//         let numSl = `.slides${num}`;
//         console.log(num, numSl);
//         sliderShow(numTr, numSl);
//
//     }
// });


