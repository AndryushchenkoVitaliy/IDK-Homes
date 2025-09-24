
document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('[data-js-header-burger-button]');
  const headerBottom = document.querySelector('.header__bottom');
  const menuLinks = document.querySelectorAll('.header__menu-link');
  const body = document.body;

  if (burgerButton && headerBottom) {
    burgerButton.addEventListener('click', function () {
      burgerButton.classList.toggle('is-active');
      headerBottom.classList.toggle('is-active');
      body.classList.toggle('body--no-scroll');
    });
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        burgerButton.classList.remove('is-active');
        headerBottom.classList.remove('is-active');
        body.classList.remove('body--no-scroll');
      });
    });
  }
});

const swiperReview = new Swiper('.swiper-review', {

    direction: 'horizontal',
    loop: true,
    spaceBetween: 100,
    grabCursor: true,

    breakpoints: {
        
        320: {
        slidesPerView: 1,
        },
        
        768: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        
        1024: {
        slidesPerView: 3,
        spaceBetween: 100,
        },
    }
});

const swiperAction = new Swiper('.swiper-action', {

    direction: 'horizontal',
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button--right",
      prevEl: ".swiper-button--left",
    },
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesOffsetBefore: 150,
        centeredSlides: true,
      },
    }
});

const swiperBroken = new Swiper('.swiper-broken', {

  direction: 'horizontal',
  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button--right",
    prevEl: ".swiper-button--left",
  },

  breakpoints: {
      
    320: {
    slidesPerView: 1,
    },

    600: {
    slidesPerView: 2,
    spaceBetween: 40,
    },
    
    768: {
    slidesPerView: 3,
    spaceBetween: 80,
    centeredSlides: true,
    },
    
    1200: {
    slidesPerView: 4,
    spaceBetween: 80,
    centeredSlides: true,
    },
  }
});