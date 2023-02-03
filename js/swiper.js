const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.arrow__right',
      prevEl: '.arrow__left',
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
    slidesPerView:4
  });
  