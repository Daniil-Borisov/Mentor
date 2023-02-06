$(document).ready(function () {
  $('.tabs-buttons a').on('click', function () {
    if ($(this).data('tab')) {
      console.log(Boolean($(this).data('tab')));
      $('.tabs-buttons a').removeClass('active');
      $(this).addClass('active');
      const tab = $(this).data('tab');
      $('.tabs section').removeClass('active');
      $('.tabs')
        .find('.' + tab)
        .addClass('active');
    }
  });

  const swiper1 = new Swiper('.mentor-mentee-swiper', {
    slidesPerView: 1.17,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.8,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  if($(window).width() >= 1024){
    const swiper2 = new Swiper('.all-mentees-slider', {
      slidesPerView: 1.3,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
      watchSlidesVisibility: true,
  
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  const swiper3 = new Swiper('.all-tariffs-slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    watchSlidesVisibility: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  $('.tariff .title button').on('click', function () {
    $('.edit-tariff').css('display', 'none');
    $('.edit-tariff').css('display', 'block');
    $('.create-tariff').css('display', 'none');
  });

  $('.all-tariffs .title-wrapper .btn').on('click', function () {
    $('.create-tariff').css('display', 'none');
    $('.edit-tariff').css('display', 'none');
    $('.create-tariff').css('display', 'block');
  });

  $('.create_subscription_btn').on('click', function () {
    $('.create_subscription').css('display', 'block');
  });
  $('.create_subscription .cancel').on('click', function () {
    $('.create_subscription').css('display', 'none');
  });

  $('.tariff .description p').matchHeight({
    byRow: false
  })

  $(".title-wrapper .btn").on("click", function (event) {
    event.preventDefault();
    var id  = $('.create-tariff'),
        top = $(id).offset().top ; 
    $('body,html').animate({scrollTop: top}, 700);
  });
  
  $(".slider-item button").on("click", function (event) {
    event.preventDefault();
    var id  = $('.edit-tariff'),
        top = $(id).offset().top ; 
    $('body,html').animate({scrollTop: top}, 700);
  });
});
