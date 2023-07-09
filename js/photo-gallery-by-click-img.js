const galleryItems = document.querySelectorAll('.photo-gallery__item');
let currentIndex = 0;
let modal;
let currentContainer;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        currentContainer = item.closest('.photo-gallery__container');
        const largeImageSrc = item.querySelector('.photo-gallery__image').getAttribute('data-image');
        openModal(largeImageSrc);
    });
});

function openModal(imageSrc) {
    modal = document.createElement('div');
    modal.classList.add('modal');

    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = 'Large Image';
    modal.appendChild(image);

    const prevButton = document.createElement('button');
    prevButton.classList.add('modal-button', 'prev');
    prevButton.addEventListener('click', showPreviousImage);
    prevButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 12L12 12L12 12z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.596 12L15.295 18.75L14.25 20L6 12L14.25 4L15.295 5.25L8.596 12Z"></path>
      </svg>
    `;
    modal.appendChild(prevButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-button', 'close');
    closeButton.addEventListener('click', closeModal);
    closeButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 10.586L17.293 5.293L18.707 6.707L13.414 12L18.707 17.293L17.293 18.707L12 13.414L6.707 18.707L5.293 17.293L10.586 12L5.293 6.707L6.707 5.293L12 10.586Z"></path>
      </svg>
    `;
    modal.appendChild(closeButton);

    const nextButton = document.createElement('button');
    nextButton.classList.add('modal-button', 'next');
    nextButton.addEventListener('click', showNextImage);
    nextButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 12L12 12L12 12z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.404 12L8.705 5.25L9.75 4L18 12L9.75 20L8.705 18.75L15.404 12Z"></path>
      </svg>
    `;
    modal.appendChild(nextButton);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.body.appendChild(modal);
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + currentContainer.children.length) % currentContainer.children.length;
    const largeImageSrc = currentContainer.children[currentIndex].querySelector('.photo-gallery__image').getAttribute('data-image');
    replaceModalImage(largeImageSrc);
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % currentContainer.children.length;
    const largeImageSrc = currentContainer.children[currentIndex].querySelector('.photo-gallery__image').getAttribute('data-image');
    replaceModalImage(largeImageSrc);
}

function replaceModalImage(imageSrc) {
    const modalImage = document.querySelector('.modal img');
    modalImage.src = imageSrc;
}

function closeModal() {
    modal.remove();
}
