const carousel = document.querySelector('.our-guests__carousel');
const carouselSlide = document.querySelector('.our-guests__carousel-slide');
const nextButton = document.querySelector('.our-guests__carousel-btn-next');
const prevButton = document.querySelector('.our-guests__carousel-btn-prev');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentSlide = 0;

function updateCarousel() {
  carouselSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % carouselItems.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

// window.addEventListener('resize', () => {
//     if (window.innerWidth >= 1024) {
//       carousel.style.maxWidth = '80%';
//     } else {
//       carousel.style.maxWidth = '100%';
//     }
//   });
