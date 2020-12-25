$(document).ready(function () {
  $('.stages__slider').slick({
    prevArrow: '.stages__slider-prev',
    nextArrow: '.stages__slider-next',
    infinite: false,
    dots: true,
    appendDots: '.stages__title',
    //fade: true
  });
  $('.stages__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    const dots = document.querySelectorAll('.slick-dots li')
    for (let i = 0; i <= dots.length - 1; i++) {
      if (i <= nextSlide) {
        dots[i].classList.add('active');
      }
      else {
        dots[i].classList.remove('active');
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector('.header__menuBtn');
  const menu = document.querySelector('.header__menu');
  let isMobileMenu = false;

  //Listeners
  document.addEventListener('click', (e) => {
    if (e.target.closest('.header__menuBtn')) {
      onBurgerClicked();
    }
  })


  //Functions
  function onBurgerClicked() {
    menuBtn.classList.toggle('active');
    if (menuBtn.classList.contains('active')) {
      openMobileMenu();
    }
    else {
      closeMobileMenu();
    }
  }
  function openMobileMenu() {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    menu.classList.remove('active');
    document.body.style.overflow = '';
  }
})
