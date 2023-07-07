const summerLink = document.getElementById("summer-link");
const winterLink = document.getElementById("winter-link");
const springLink = document.getElementById("spring-link");
const autumnLink = document.getElementById("autumn-link");
const fishingLink = document.getElementById("fishing-link");
const spaLink = document.getElementById("spa-link");

const summerContainer = document.querySelector(".photo-gallery__container--summer");
const winterContainer = document.querySelector(".photo-gallery__container--winter");
const springContainer = document.querySelector(".photo-gallery__container--spring");
const autumnContainer = document.querySelector(".photo-gallery__container--autumn");
const fishingContainer = document.querySelector(".photo-gallery__container--fishing");
const spaContainer = document.querySelector(".photo-gallery__container--spa");

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomLink = getRandom([summerLink, winterLink, springLink, autumnLink, fishingLink, spaLink]);

summerLink.addEventListener("click", function(event) {
  event.preventDefault();
  setActiveLink(summerLink);
  showContainer(summerContainer);
  hideContainers([winterContainer, springContainer, autumnContainer, fishingContainer, spaContainer]);
});

winterLink.addEventListener("click", function(event) {
  event.preventDefault();
  setActiveLink(winterLink);
  showContainer(winterContainer);
  hideContainers([summerContainer, springContainer, autumnContainer, fishingContainer, spaContainer]);
});

springLink.addEventListener("click", function(event) {
  event.preventDefault();
  setActiveLink(springLink);
  showContainer(springContainer);
  hideContainers([summerContainer, winterContainer, autumnContainer, fishingContainer, spaContainer]);
});

autumnLink.addEventListener("click", function(event) {
  event.preventDefault();
  setActiveLink(autumnLink);
  showContainer(autumnContainer);
  hideContainers([summerContainer, winterContainer, springContainer, fishingContainer, spaContainer]);
});

fishingLink.addEventListener("click", function(event) {
  event.preventDefault();
  setActiveLink(fishingLink);
  showContainer(fishingContainer);
  hideContainers([summerContainer, winterContainer, springContainer, autumnContainer, spaContainer]);
});

spaLink.addEventListener("click", function(event) {
  event.preventDefault();
  setActiveLink(spaLink);
  showContainer(spaContainer);
  hideContainers([summerContainer, winterContainer, springContainer, autumnContainer, fishingContainer]);
});

hideContainers([summerContainer, winterContainer, springContainer, autumnContainer, fishingContainer, spaContainer]);
randomLink.click();

function showContainer(container) {
  container.style.display = "flex";
}

function hideContainers(containers) {
  containers.forEach(function(container) {
    container.style.display = "none";
  });
}

function setActiveLink(link) {
    const navItems = document.querySelectorAll('.photo-gallery__nav-item');
    navItems.forEach(item => {
      item.classList.remove('active');
    });
    link.classList.add('active');
  }