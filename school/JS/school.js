let currentSlide = 0;

function showSlide(index) {
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');

if (index >= slides.length) {
    currentSlide = 0;
} else if (index < 0) {
    currentSlide = slides.length - 1;
} else {
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
