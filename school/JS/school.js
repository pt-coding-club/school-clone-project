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


//학교앨범 
let currentSecondSlide = 0;
const slidesToShow = 3; // 한 번에 보여질 슬라이드의 개수

function showSecondSlide(index) {
    const secondCarouselInner = document.querySelector('.second-carousel-inner');
    const secondSlides = document.querySelectorAll('.second-carousel-item');
    const totalSlides = secondSlides.length;

    // 음수 또는 너무 큰 양수가 될 경우를 대비해 나머지 연산을 사용하여 유효한 인덱스로 변환
    currentSecondSlide = (index % totalSlides + totalSlides) % totalSlides;

    // 한 번에 보여질 슬라이드의 너비를 곱해서 이동
    const translateValue = -currentSecondSlide * (100 / slidesToShow) + '%';
    secondCarouselInner.style.transform = 'translateX(' + translateValue + ')';
}

function nextSecondSlide() {
    // 오른쪽 버튼을 눌렀을 때는 한 번에 보여질 슬라이드의 개수만큼 움직이도록
    showSecondSlide(currentSecondSlide + slidesToShow);
}

function prevSecondSlide() {
    // 왼쪽 버튼을 눌렀을 때는 한 번에 보여질 슬라이드의 개수만큼 움직이도록
    showSecondSlide(currentSecondSlide - slidesToShow);
}












