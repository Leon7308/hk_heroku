const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastCln'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length-2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstCln'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length-counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

carouselSlide.timer = setInterval(function() {
    counter++;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if (counter>=carouselImages.length-1) return;
}, 5000);