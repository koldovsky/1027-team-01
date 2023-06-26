const accommodation = [
    {
        id: '1',
        price: '65/night',
        name: 'River Chalet',
        image: '../img/accommodation/accommodation_river.jpeg',
        info: '1 Bedroom, 1 Bathroom, Sleeps 2'
    },
    {
        id: '2',
        price: '75/night',
        name: 'Lookout Lodge',
        image: '../img/accommodation/accommodation_lodge.jpeg',
        info: '2 Bedrooms, 1 Bathroom, Sleeps 4'
    }
];

function renderAccommodation(accommodation) {
    const accommodationList = document.querySelector('.accommodation__container');
    accommodationList.innerHTML = '';

    for (const item of accommodation) {
        accommodationList.innerHTML += `
        <article class="accommodation__card card">
            <div class="acard__image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="acard__info">
                <p class="acard__price">$${item.price}</p>
                <h3 class="acard__name">${item.name}</h3>
                <p class="acard__info">${item.info}</p>
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
