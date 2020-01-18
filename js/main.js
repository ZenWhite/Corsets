$('.result__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  responsive: [{
    breakpoint: 720,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
    }
  }]
});

$('.main-slider__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false
    }
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false
    }
  }
]
});

$('.gallery__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [{
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.header__input').mask('+7 (999) 999-99-99');
$('.popup__input').mask('+7 (999) 999-99-99');

//Images

const images = document.querySelectorAll('img'),
  resImg = document.querySelectorAll('.result__img');

images.forEach(item => {
  item.setAttribute('draggable', false);
});

resImg.forEach(item => {
  item.style.background = `url(${item.dataset.back}) no-repeat center center`;
  item.style.backgroundSize = 'cover';
});

//FAQ

const faqItems = document.querySelectorAll('.faq__item');

for (let item of faqItems) {
  item.addEventListener('click', function (e) {
    item.classList.toggle('close');
  });
}

//Popup

const popupBtns = document.querySelectorAll('.popup-btn'),
  popupClose = document.querySelector('.popup__close');

for (let item of popupBtns) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.popup').classList.remove('hide');
    document.querySelector('html').style.overflow = 'hidden';
  });
}

popupClose.addEventListener('click', function () {
  document.querySelector('.popup').classList.add('hide');
  document.querySelector('html').style.overflow = 'auto';
});