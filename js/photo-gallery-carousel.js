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

let currentntSlide = 0;

function renderSlide() {
    carouselSlide.innerHTML = slides[currentntSlide];
}

renderSlide();

function nextSlide() {
    currentntSlide++;
    if (currentntSlide >= slides.length) {
        currentntSlide = 0;
    }
    renderSlide();
}
