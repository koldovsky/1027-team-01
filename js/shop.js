function animateImages() {
  const images = document.querySelectorAll('.image-card__image');

  Array.from(images).forEach(function (elem) {
    elem.addEventListener('mouseenter', (event) => {
      const image = event.target;
      const newSrc = event.target.dataset.hover;
      image.src = newSrc;
    });
  
    elem.addEventListener('mouseleave', (event) => {
      console.log('mouseleave', event.target.dataset);
      const image = event.target;
      const newSrc = event.target.dataset.original;
      image.src = newSrc;
    });
  });
}


function displayAdvice() {
  const adviceElement = document.querySelector('.adviceText');

  async function displayRandomAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const adviceText = data.slip.advice;
    adviceElement.textContent = adviceText;
  }
  
  displayRandomAdvice();
  adviceElement.addEventListener('click', displayRandomAdvice);
}

animateImages();
displayAdvice();
