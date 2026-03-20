const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  effect: "slide",
  speed: 900,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});