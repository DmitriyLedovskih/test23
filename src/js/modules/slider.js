import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".slider", {
  loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
});

const slides = document.querySelectorAll(".slider-slide");
const totalSlides = swiper.slides.length;

swiper.on("slideChange", () => {
  const currentIndex = swiper.realIndex + 1;

  slides.forEach((slide) => {
    const slideCounter = slide.querySelector(".slider-counter");
    const slideCounterNumber = slide.querySelector(".slider-number");

    if (slideCounterNumber) {
      slideCounterNumber.remove();
    }

    slideCounter.insertAdjacentHTML(
      "beforeend",
      `<span class="slider-number">${currentIndex} / ${totalSlides}</span>`
    );
  });
});

slides.forEach((slide) => {
  const nextButton = slide.querySelector(".slider-button-next");
  const prevButton = slide.querySelector(".slider-button-prev");
  nextButton.addEventListener("click", () => {
    swiper.slideNext();
  });

  prevButton.addEventListener("click", () => {
    swiper.slidePrev();
  });
});

swiper.on("init", () => {
  swiper.emit("slideChange");
});

export default swiper;
