$(document).ready(function () {
  $('.stages__slider').slick({
    prevArrow: '.stages__slider-prev',
    nextArrow: '.stages__slider-next',
    infinite: false,
    dots: true,
    appendDots: '.stages__title',
    //autoplay: true,
    //autoplaySpeed: 8000
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
  const ppOpeners = document.querySelectorAll('.popup-open');
  const popups = document.querySelectorAll('.popup');
  const lockPadding = document.querySelectorAll('.lock-padding');
  const body = document.querySelector('body');
  const form = document.querySelector('#sendForm');
  form.addEventListener('submit', () => {
    console.log('121314adsasdasdas324211');
    alert(123123);
  })
  let isMobileMenu = false;
  let unlock = true;
  let timeout = 200;

  //Listeners
  document.addEventListener('click', (e) => {
    if (e.target.closest('.header__menuBtn')) {
      onBurgerClicked();
    }
  })
  //PopUp
  if (ppOpeners.length > 0) {
    for (let i = 0; i < ppOpeners.length; i++) {
      const ppOpener = ppOpeners[i];
      ppOpener.addEventListener('click', (event) => {
        const ppCurrent = document.querySelector(ppOpener.getAttribute('href'));
        openPopup(ppCurrent);
        event.preventDefault();
      })
    }
  }
  if (popups.length > 0) {
    for (let i = 0; i < popups.length; i++) {
      popups[i].addEventListener('click', (event) => {
        if (!event.target.closest('.popup__content')) {
          closePopup(popups[i]);
        }
      })
    }
  }
  function openPopup(popup) {
    if (popup && unlock) {
      const popupActive = document.querySelector('.popup.opened');
      if (popupActive) {
        closePopup(popupActive, false);
      }
      else {
        bodyLock();
      }
      popup.classList.add('opened');
      popup.addEventListener('click', (event) => {
        if (!event.target.closest('.popup__content')) {
          closePopup(event.target.closest('.popup'));
        }
      })
    }
  }
  function closePopup(popup, doUnlock = true) {
    if (unlock) {
      popup.classList.remove('opened');
      if (doUnlock) {
        bodyUnlock();
      }
    }
  }
  function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.intro').offsetWidth + 'px';
    //console.log(lockPaddingValue);
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  }
  function bodyUnlock() {
    setTimeout(() => {
      if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
          const el = lockPadding[i];
          el.style.paddingRight = '';
        }
      }
      body.style.paddingRight = '';
      body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const activePopup = document.querySelector('.popup.opened');
      closePopup(activePopup);
    }
    //console.log(typeof (e.key));
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
