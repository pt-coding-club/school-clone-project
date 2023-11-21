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

//학교엘범
let currentSecondSlide = 0;
const slidesToShow = 3; 

function showSecondSlide(index) {
    const secondCarouselInner = document.querySelector('.second-carousel-inner');
    const secondSlides = document.querySelectorAll('.second-carousel-item');
    const totalSlides = secondSlides.length;

    currentSecondSlide = (index % totalSlides + totalSlides) % totalSlides;

    const translateValue = -currentSecondSlide * (100 / slidesToShow) + '%';
    secondCarouselInner.style.transform = 'translateX(' + translateValue + ')';

    // 슬라이드가 끝까지 도달하면 처음으로 돌아가기
    if (currentSecondSlide + slidesToShow >= secondSlides.length) {
        setTimeout(() => {
            showSecondSlide(0);
        }, 700); // 500ms 딜레이를 줘서 자연스럽게 보이도록 함 (선택적)
    }
}

function nextSecondSlide() {
    // 다음 버튼을 눌렀을 때는 한 번에 한 이미지씩 움직이도록
    showSecondSlide(currentSecondSlide + 1);
}

function prevSecondSlide() {
    // 이전 버튼을 눌렀을 때는 한 번에 한 이미지씩 움직이도록
    showSecondSlide(currentSecondSlide - 1);

    // 첫 번째 슬라이드에서 뒤로 가면 마지막 슬라이드로 이동
    if (currentSecondSlide === 0) {
        setTimeout(() => {
            showSecondSlide(secondSlides.length - slidesToShow);
        }, 700); 
    }
}














