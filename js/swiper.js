const heroBanner = new Swiper('.hero-banner', {
  loop: true,
  preventClicks: true,
  preventClicksPropagation: true,
  autoplay: {
    delay: 6000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const bestSellerProducts = new Swiper('.best-seller-products',{
  breakpoints: {
    0: {
      slidesPerView: 1.7,
      spaceBetween: 12
    },
    340: {
      slidesPerView: 2.7,
      spaceBetween: 12
    },
    768: {
      slidesPerView: 3.7,
      spaceBetween: 12
    },
    1024: {
      slidesPerView: 4.7,
      spaceBetween: 14
    }
  }
});
