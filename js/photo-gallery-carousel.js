const slides = [
    '<div class="carousel-item"><img src="img/photo-gallery/our-guests-photo-1.jpg" class="" alt="Our guests photo 1"></div>',
    '<div class="carousel-item"><img src="img/photo-gallery/our-guests-photo-2.jpg" class="" alt="Our guests photo 2"></div>',
    '<div class="carousel-item"><img src="img/photo-gallery/our-guests-photo-3.jpg" class="" alt="Our guests photo 3"></div>',
    '<div class="carousel-item"><img src="img/photo-gallery/our-guests-photo-4.jpg" class="" alt="Our guests photo 4"></div>',
    '<div class="carousel-item"><img src="img/photo-gallery/our-guests-photo-5.jpg" class="" alt="Our guests photo 5"></div>',
    '<div class="carousel-item"><img src="img/photo-gallery/our-guests-photo-6.jpg" class="" alt="Our guests photo 6"></div>',
    '<div class="carousel-item"><img src="img/photo-gallery/our-guests-photo-7.jpg" class="" alt="Our guests photo 7"></div>'
]

const carouselSlide = document.querySelector('.our-guests__carousel-slide');

let currentSlide = 0;

function renderSlide() {
    carouselSlide.innerHTML = slides[currentSlide];
  
    if (window.innerWidth >= 320) {
      const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      carouselSlide.innerHTML += slides[secondSlideIdx];
  
      if (window.innerWidth >= 640) {
        const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        carouselSlide.innerHTML += slides[thirdSlideIdx];
  
        if (window.innerWidth >= 960) {
          const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
          carouselSlide.innerHTML += slides[fourthSlideIdx];
  
          if (window.innerWidth >= 1280) {
            const fifthSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
            carouselSlide.innerHTML += slides[fifthSlideIdx];
          }
        }
      }
    }
  }

renderSlide();

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    renderSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    renderSlide();
}

setInterval(nextSlide, 5000)

const btnNext = document.querySelector('.our-guests__carousel-btn-next');
const btnPrev = document.querySelector('.our-guests__carousel-btn-prev');

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);
