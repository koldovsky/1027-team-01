const carousel = document.querySelector('.our-guests__carousel');
const carouselSlide = document.querySelector('.our-guests__carousel-slide');
const prevButton = document.querySelector('.our-guests__carousel-btn-prev');
const nextButton = document.querySelector('.our-guests__carousel-btn-next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselSlide.children);
let currentIndex = slidesPerView;
setupCarousel();

function getSlidesPerView() {
   if (window.innerWidth >= 1281) return 5;
   if (window.innerWidth >= 961) return 4;
   if (window.innerWidth >= 641) return 3;
   if (window.innerWidth >= 321) return 2;
   return 1;
}

function setupCarousel() {
    slides = slides.filter(slide => !slide.classList.contains('clone'));
    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);
    carouselSlide.append(...clonesStart, ...slides, ...clonesEnd);
    slides = Array.from(carouselSlide.children);
    updateCarousel();
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}

function updateCarousel() {
    carouselSlide.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - slidesPerView * 2 - 1;
        setTransitionNone();
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > slides.length - slidesPerView) {
        currentIndex = slidesPerView;
        setTransitionNone();
    }
    updateCarousel();
});

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});

function setTransitionNone() {
    carouselSlide.style.transition = 'none';
    updateCarousel();
    // Allow transition to complete, then reset transition style
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            carouselSlide.style.transition = '';
        });
    });
}