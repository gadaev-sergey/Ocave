const swiper = new Swiper('.slider__swiper', {
  loop: true,
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 65,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 65
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 65
    }
  },
});