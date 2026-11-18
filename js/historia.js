// Carrossel dos personagens
new Swiper('.swiper-personagens', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-personagens .swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.seta-personagens-next',
    prevEl: '.seta-personagens-prev'
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// Carrossel das cidades
new Swiper('.swiper-cidades', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-cidades .swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.seta-cidades-next',
    prevEl: '.seta-cidades-prev'
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});