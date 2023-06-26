const images = document.querySelectorAll('.image-card__image');

Array.from(images).forEach(function(elem) {
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