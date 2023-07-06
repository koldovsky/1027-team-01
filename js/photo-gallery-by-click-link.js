// Отримуємо посилання на елементи навігації
const summerLink = document.getElementById("summer-link");
const winterLink = document.getElementById("winter-link");
const springLink = document.getElementById("spring-link");
const autumnLink = document.getElementById("autumn-link");
const fishingLink = document.getElementById("fishing-link");
const spaLink = document.getElementById("spa-link");

// Отримуємо елементи контейнерів зображень
const summerContainer = document.querySelector(".photo-gallery__container--summer");
const winterContainer = document.querySelector(".photo-gallery__container--winter");
const springContainer = document.querySelector(".photo-gallery__container--spring");
const autumnContainer = document.querySelector(".photo-gallery__container--autumn");
const fishingContainer = document.querySelector(".photo-gallery__container--fishing");
const spaContainer = document.querySelector(".photo-gallery__container--spa");

// Приховуємо всі контейнери, крім контейнера зі зображеннями літа
hideContainers([winterContainer, springContainer, autumnContainer, fishingContainer, spaContainer]);

// Додаємо обробники подій для кожного посилання
summerLink.addEventListener("click", function(event) {
  event.preventDefault();
  showContainer(summerContainer);
  hideContainers([winterContainer, springContainer, autumnContainer, fishingContainer, spaContainer]);
});

winterLink.addEventListener("click", function(event) {
  event.preventDefault();
  showContainer(winterContainer);
  hideContainers([summerContainer, springContainer, autumnContainer, fishingContainer, spaContainer]);
});

springLink.addEventListener("click", function(event) {
  event.preventDefault();
  showContainer(springContainer);
  hideContainers([summerContainer, winterContainer, autumnContainer, fishingContainer, spaContainer]);
});

autumnLink.addEventListener("click", function(event) {
  event.preventDefault();
  showContainer(autumnContainer);
  hideContainers([summerContainer, winterContainer, springContainer, fishingContainer, spaContainer]);
});

fishingLink.addEventListener("click", function(event) {
  event.preventDefault();
  showContainer(fishingContainer);
  hideContainers([summerContainer, winterContainer, springContainer, autumnContainer, spaContainer]);
});

spaLink.addEventListener("click", function(event) {
  event.preventDefault();
  showContainer(spaContainer);
  hideContainers([summerContainer, winterContainer, springContainer, autumnContainer, fishingContainer]);
});

// Функція для відображення контейнера
function showContainer(container) {
  container.style.display = "flex";
}

// Функція для приховування контейнерів
function hideContainers(containers) {
  containers.forEach(function(container) {
    container.style.display = "none";
  });
}