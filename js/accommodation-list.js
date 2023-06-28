let accommodation; 

fetch('api/accommodation.json')
  .then(response => response.json())
  .then(data => {
    accommodation = data; 
    renderAccommodation(accommodation, 1);
    cardBackground();
  });

function renderAccommodation(accommodation, rate) {
  const accommodationList = document.querySelector('.accommodation__container');
  accommodationList.innerHTML = '';

  for (const item of accommodation) {
    accommodationList.innerHTML += `
      <article class="accommodation__card card">
        <div class="block">
          <div class="card__image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="card__inform">
            <p class="card__price"><span class="price" style="color: green">${(item.price * rate).toFixed(2)}</span>/night</p>
            <h3 class="card__name">${item.name}</h3>
            <p class="card__info">${item.info}</p>
            <div class="card__button button">
              <a class="button" href="#">
                Reserve cabin
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

let rates;

async function changeCurrency() {
  if (!rates) {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/usd');
    rates = (await response.json()).rates;
  }
  
  const currentCurrency = document.querySelector('.currency').value;
  const rate = rates[currentCurrency];
  renderAccommodation(accommodation, rate);
  cardBackground();
}

document.querySelector('.currency').addEventListener('change', changeCurrency);
