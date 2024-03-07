"use strict";

let slideIndex = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

setInterval(nextSlide, 5000);

let touchStartX = 0;
document.addEventListener("touchstart", function(event) {
  touchStartX = event.touches[0].clientX;
}, false);

document.addEventListener("touchend", function(event) {
  const touchEndX = event.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) {
    nextSlide();
  } else if (touchEndX - touchStartX > 50) {
    prevSlide();
  }
}, false);

showSlide(slideIndex);
