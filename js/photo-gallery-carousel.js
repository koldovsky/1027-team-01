const photoGalleryCarousel = document.querySelector('.our-guests__carousel');
const carouselSlide = document.querySelector('.our-guests__carousel-slide');
const prevButton = document.querySelector('.our-guests__carousel-btn-prev');
const nextButton = document.querySelector('.our-guests__carousel-btn-next');

let slidesPerView = getSlidesPerView();
let slidesArray = Array.from(carouselSlide.children);
let currentIndexSlide = slidesPerView;
setupCarousel();

function getSlidesPerView() {
  if (window.innerWidth >= 1281) return 5;
  if (window.innerWidth >= 961) return 4;
  if (window.innerWidth >= 641) return 3;
  if (window.innerWidth >= 321) return 2;
  return 1;
}

function setupCarousel() {
  const slides = slidesArray.filter(slide => !slide.classList.contains('clone'));
  const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
  const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);
  carouselSlide.append(...clonesStart, ...slides, ...clonesEnd);
  slidesArray = Array.from(carouselSlide.children);
  updateCarousel();
}

function cloneSlide(slide) {
  const clone = slide.cloneNode(true);
  clone.classList.add('clone');
  return clone;
}

function updateCarousel() {
  carouselSlide.style.transform = `translateX(-${currentIndexSlide * 100 / slidesPerView}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndexSlide--;
  if (currentIndexSlide < 0) {
    currentIndexSlide = slidesArray.length - slidesPerView * 2 - 1;
    setTransitionNone();
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndexSlide++;
  if (currentIndexSlide > slidesArray.length - slidesPerView) {
    currentIndexSlide = slidesPerView;
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


//to test
// const photoGalleryCarousel = document.querySelector('.our-guests__carousel');
// const carouselSlide = document.querySelector('.our-guests__carousel-slide');
// const prevButton = document.querySelector('.our-guests__carousel-btn-prev');
// const nextButton = document.querySelector('.our-guests__carousel-btn-next');

// let slidesPerView = getSlidesPerView();
// let slidesArray = Array.from(carouselSlide.children);
// let currentIndexSlide = slidesPerView;
// let isTransitioning = false; // Додаткова змінна для контролю переходу

// setupCarousel();

// function getSlidesPerView() {
//   if (window.innerWidth >= 1281) return 5;
//   if (window.innerWidth >= 961) return 4;
//   if (window.innerWidth >= 641) return 3;
//   if (window.innerWidth >= 321) return 2;
//   return 1;
// }

// function setupCarousel() {
//   const slides = slidesArray.filter(slide => !slide.classList.contains('clone'));
//   const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
//   const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);
//   carouselSlide.append(...clonesStart, ...slides, ...clonesEnd);
//   slidesArray = Array.from(carouselSlide.children);
//   updateCarousel();
// }

// function cloneSlide(slide) {
//   const clone = slide.cloneNode(true);
//   clone.classList.add('clone');
//   return clone;
// }

// function updateCarousel() {
//   carouselSlide.style.transform = `translateX(-${currentIndexSlide * 100 / slidesPerView}%)`;
// }

// prevButton.addEventListener('click', () => {
//   if (!isTransitioning) { // Перевіряємо, чи не відбувається перехід в даний момент
//     currentIndexSlide--;
//     if (currentIndexSlide < 0) {
//         currentIndexSlide = slidesArray.length - slidesPerView * 2 - 1;
//       setTransitionNone();
//     }
//     updateCarousel();
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (!isTransitioning) { // Перевіряємо, чи не відбувається перехід в даний момент
//     currentIndexSlide++;
//     if (currentIndexSlide > slidesArray.length - slidesPerView) {
//         currentIndexSlide = slidesPerView;
//       setTransitionNone();
//     }
//     updateCarousel();
//   }
// });

// window.addEventListener('resize', () => {
//   slidesPerView = getSlidesPerView();
//   setupCarousel();
// });

// function setTransitionNone() {
//   isTransitioning = true; // Встановлюємо прапор переходу
//   carouselSlide.style.transition = 'none';
//   updateCarousel();
//   // Дозволяємо завершити перехід, а потім скидаємо стиль переходу
//   requestAnimationFrame(() => {
//     requestAnimationFrame(() => {
//       carouselSlide.style.transition = '';
//       isTransitioning = false; // Знімаємо прапор переходу
//     });
//   });
// }
