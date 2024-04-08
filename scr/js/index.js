const swiper = new Swiper('.slogan-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.slogan-swiper__pagination',
      clickable:true,
    },
    autoplay: {
      delay: 2000, // время задержки между слайдами
      disableOnInteraction: false, // слайды будут продолжать автоматически переключаться при нажатии на кнопки навигации
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

  const active = document.querySelector('.head-nav-wrap');
  console.log(active);

  document.querySelector('.header-head__burger').addEventListener('click', function(){
    var headNav = document.querySelector('.head-nav-wrap');
    if(headNav.classList.contains('active')){
      headNav.classList.remove('active')
    }else{
      headNav.classList.add('active')
    }
  })