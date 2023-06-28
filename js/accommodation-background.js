function cardBackground() {
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
  
  cardBackground();