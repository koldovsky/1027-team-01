console.log('Secondary page JavaScript code');


document.addEventListener('partialsLoaded', function() {
  console.log('Partials loaded');
});

const accommodation = [
    {
        id: '1',
        price: '65/night',
        name: 'River Chalet',
        image: 'img/accommodation/accommodation_river.jpeg',
        info: '1 Bedroom, 1 Bathroom, Sleeps 2'
    },
    {
        id: '2',
        price: '75/night',
        name: 'Lookout Lodge',
        image: '/img/accommodation/accommodation_lodge.jpeg',
        info: '2 Bedrooms, 1 Bathroom, Sleeps 4'
    },
    {
        id: '3',
        price: '85/night',
        name: 'Smoky View Chalet',
        image: '/img/accommodation/accommodation_smoky_view_chalet.jpeg',
        info: '2 Bedrooms,2 Bathrooms, Sleeps 6'
    },
    {
        id: '4',
        price: '100/night',
        name: 'Mountain Haven',
        image: '/img/accommodation/accommodation_haven.jpeg',
        info: '3 Bedrooms,2 Bathrooms, Sleeps 8'
    },
    {
        id: '5',
        price: '150/night',
        name: 'Mountain Splash',
        image: '/img/accommodation/accommodation_mountain_splash.jpeg',
        info: '3 Bedrooms,3 Bathrooms, Sleeps 10'
    }
];

function renderAccommodation(accommodation) {
    const accommodationList = document.querySelector('.accommodation__container');
    accommodationList.innerHTML = '';

    for (const item of accommodation) {
        accommodationList.innerHTML += `
        <article class="accommodation__card card">
            <div class="card__image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="card__info">
                <p class="card__price">$${item.price}</p>
                <h3 class="card__name">${item.name}</h3>
                <p class="card__info">${item.info}</p>
                <div class="card__button button">
                    <a class="button" href="#">
                        Reserve cabin
                    </a>
                </div>
            </div>
        </article>
        `;
    }
}

renderAccommodation(accommodation);

function toggleCardBackground() {
    const cards = document.querySelectorAll('.accommodation__card');
    cards.forEach((card, index) => {
      if (index % 2 === 0) {
        card.classList.add('light-background');
        card.classList.remove('dark-background');
      } else {
        card.classList.add('dark-background');
        card.classList.remove('light-background');
      }
    });
  }
  
  // Вызов функции для переключения цвета фона карточек
  toggleCardBackground();

