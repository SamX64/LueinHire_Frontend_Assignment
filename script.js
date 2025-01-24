document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-container");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const cards = document.querySelectorAll(".card");

  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
  const maxIndex =
    cards.length - Math.floor(cardContainer.offsetWidth / cardWidth);

  // Function to move the cards
  const updateCarousel = () => {
    cardContainer.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  };

  // Left arrow click
  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Right arrow click
  rightArrow.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Auto-slide every 4 seconds
  setInterval(() => {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }, 4000);
});

