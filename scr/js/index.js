const swiper = new Swiper('.slogan-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.slogan-swiper__pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slogan-swiper__next',
      prevEl: '.slogan-swiper__prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });