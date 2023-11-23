let currentSlide = 0;

function showSlide(index) {
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');

if (index >= slides.length) {
    currentSlide = 0;
} 
else if (index < 0) {
    currentSlide = slides.length - 1;
} 
    else {
    currentSlide = index;
}

const translateValue = -currentSlide * 100 + '%';
carouselInner.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
showSlide(currentSlide + 1);
}

function prevSlide() {
showSlide(currentSlide - 1);
}

// 학교앨범
let currentSecondSlide = 0;
const slidesToShow = 3; 

function showSecondSlide(index) {
    const secondCarouselInner = document.querySelector('.second-carousel-inner');
    const secondSlides = document.querySelectorAll('.second-carousel-item');
    const totalSlides = secondSlides.length;

    currentSecondSlide = (index % totalSlides + totalSlides) % totalSlides;

    const translateValue = -currentSecondSlide * (100 / slidesToShow) + '%';
    secondCarouselInner.style.transform = 'translateX(' + translateValue + ')';

    if (currentSecondSlide + slidesToShow >= secondSlides.length) {
        setTimeout(() => {
            showSecondSlide(0);
        }, 700); 
    }
}
function nextSecondSlide() {
    showSecondSlide(currentSecondSlide + 1);
}
function prevSecondSlide() {
    showSecondSlide(currentSecondSlide - 1);
    if (currentSecondSlide === 0) {
        setTimeout(() => {
            showSecondSlide(secondSlides.length - slidesToShow);
        }, 700); 
    }
}














