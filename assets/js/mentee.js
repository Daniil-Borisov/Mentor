$(document).ready(function () {

  $('.input-wrapper .show-password').on('click', function(){
    if ($(this).parent().find('input').attr('type') === "password") {
      $(this).parent().find('input').attr('type', "text");
      console.log('1111');
    } else {
      $(this).parent().find('input').attr('type', "password");
    }
  })
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

  $('.form-wrapper .delete').on('click', function () {
    console.log('1');
    $('.popup-delete').addClass('open');
  });

  $('.cancel').on('click', function () {
    $('.popup').removeClass('open');
  });

  $('.popup-delete .continue').on('click', function () {
    $('.popup-delete').removeClass('open');
    $('.popup-deleted').addClass('open');
  });

  $('.available .slider-item').matchHeight({
    byRow: false
  })

  const swiper1 = new Swiper('.available .swiper-slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    watchSlidesVisibility: true,
    pagination: {
      el: '.available .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.available .swiper-button-next',
      prevEl: '.available .swiper-button-prev',
    },
  });

  const swiper2 = new Swiper('.toolbox .swiper-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    watchSlidesVisibility: true,
    pagination: {
      el: '.toolbox .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.toolbox .swiper-button-next',
      prevEl: '.toolbox .swiper-button-prev',
    },
  });
  
  const swiper3 = new Swiper('.blog .swiper-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    watchSlidesVisibility: true,
    pagination: {
      el: '.blog .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.blog .swiper-button-next',
      prevEl: '.blog .swiper-button-prev',
    },
  });
});

(function payment() {
  var d = document,
    body = d.getElementsByTagName('body')[0],
    ccForm = d.getElementsByClassName('formPayment')[0],
    cCard = d.querySelector('#cc-card'),
    ccNumber = ccForm.querySelector('#cardnumber'),
    cNumber = d.querySelectorAll('.card-number'),
    ccName = ccForm.querySelector('#cardholder'),
    cName = d.querySelectorAll('.card-holder'),
    ccMonth = ccForm.querySelector('#expires-month'),
    cMonth = d.querySelectorAll('.e-month'),
    ccYear = ccForm.querySelector('#expires-year'),
    cYear = d.querySelectorAll('.e-year'),
    ccCCV = ccForm.querySelector('#ccv'),
    cCCV = d.querySelector('.ccv strong'),
    defaultNumber = cNumber[0].getElementsByTagName('span')[0].innerHTML,
    defaultName = cName[0].getElementsByTagName('span')[0].innerHTML;

  init();

  function init() {
    var cardType, cardNumber, cardName, cardCCV;
    body.className = 'cc-bg';

    addEvent(ccNumber, 'focus', function () {
      cNumber[0].classList.add('glow');
    });
    addEvent(ccNumber, 'blur', function () {
      cNumber[0].classList.remove('glow');
    });

    addEvent(ccName, 'focus', function () {
      cName[0].classList.add('glow');
    });
    addEvent(ccName, 'blur', function () {
      cName[0].classList.remove('glow');
    });

    addEvent(ccMonth, 'focus', function () {
      cMonth[0].classList.add('glow');
    });
    addEvent(ccMonth, 'blur', function () {
      cMonth[0].classList.remove('glow');
    });

    addEvent(ccYear, 'focus', function () {
      cYear[0].classList.add('glow');
    });
    addEvent(ccYear, 'blur', function () {
      cYear[0].classList.remove('glow');
    });

    addEvent(ccCCV, 'focus', function () {
      cCard.classList.add('flipped');
    });
    addEvent(ccCCV, 'blur', function () {
      cCard.classList.remove('flipped');
    });

    addEvent(ccNumber, 'keyup', function () {
      cardNumber = this.value.replace(/[^0-9\s]/g, '');
      if (!!this.value.match(/[^0-9\s]/g)) {
        this.value = cardNumber;
      }
      cardType = getCardType(cardNumber.replace(/\s/g, ''));
      parts = numSplit(cardNumber.replace(/\s/g, ''), [4, 4, 4, 4]);
      cardNumber = parts.join(' ');
      if (cardNumber != this.value) {
        this.value = cardNumber;
      }
      if (!cardNumber) {
        cardNumber = defaultNumber;
      }
      syncText(cNumber, cardNumber);
    });
    addEvent(ccName, 'keyup', function () {
      cardName = this.value.replace(/[^a-zA-Z-\.\s]/g, '');
      if (cardName != this.value) {
        this.value = cardName;
      }
      if (!cardName) {
        cardName = defaultName;
      }
      syncText(cName, cardName);
    });
    addEvent(ccMonth, 'keyup', function (ev) {
      ev = ev || window.event;
      var month = this.value.replace(/[^0-9]/g, '');
      if (ev.keyCode == 38) {
        if (!month) {
          month = 0;
        }
        month = parseInt(month);
        month++;
        if (month < 10) {
          month = '0' + month;
        }
      }
      if (ev.keyCode == 40) {
        if (!month) {
          month = 13;
        }
        month = parseInt(month);
        month--;
        if (month == 0) {
          month = 1;
        }
        if (month < 10) {
          month = '0' + month;
        }
      }
      if (parseInt(month) > 12) {
        month = 12;
      }
      if (parseInt(month) < 1 && month != 0) {
        month = '01';
      }
      if (month == '00') {
        month = '01';
      }

      if (month != this.value) {
        this.value = month;
      }
      if (month.toString().length == 2) {
        syncText(cMonth, month);
      }
    });
    addEvent(ccYear, 'keyup', function (ev) {
      ev = ev || window.event;
      var currentYear = new Date().getFullYear().toString().substr(2, 2),
        year = this.value.replace(/[^0-9]/g, '');

      if (ev.keyCode == 38) {
        if (!year) {
          year = currentYear;
        }
        year = parseInt(year);
        year++;
        if (year < 10) {
          year = '0' + year;
        }
      }
      if (ev.keyCode == 40) {
        if (!year) {
          year = parseInt(currentYear) + 5;
        }
        year = parseInt(year);
        year--;
        if (year < 10) {
          year = '0' + year;
        }
      }

      if (year.toString().length == 2 && parseInt(year) < currentYear) {
        year = currentYear;
      }
      if (year != this.value) {
        this.value = year;
      }
      if (year > parseInt(currentYear) + 5) {
        year = parseInt(currentYear) + 5;
        this.value = year;
      }

      if (year.toString().length == 2) {
        syncText(cYear, year);
      }
    });
    addEvent(ccCCV, 'keyup', function () {
      cardCCV = this.value.replace(/[^0-9\s]/g, '');
      if (cardCCV != this.value) {
        this.value = cardCCV;
      }
      cCCV.innerHTML = cardCCV;
    });
  }

  function syncText(elCol, text) {
    var collection;
    for (var j = 0; j < elCol.length; j++) {
      collection = elCol[j].querySelectorAll('span');
      if (!collection.length) {
        elCol[j].innerHTML = text;
      } else {
        for (var i = 0; i < collection.length; i++) {
          collection[i].innerHTML = text;
        }
      }
    }
  }

  function numSplit(number, indexes) {
    var tempArr = number.split(''),
      parts = [];
    for (var i = 0, l = indexes.length; i < l; i++) {
      if (tempArr.length) {
        parts.push(tempArr.splice(0, indexes[i]).join(''));
      }
    }
    return parts;
  }

  function getCardType(number) {
    var re;
    // Mastercard
    re = new RegExp('^5[1-5]');
    if (number.match(re) != null) {
      return 'mastercard';
    }
    // AMEX
    re = new RegExp('^3[47]');
    if (number.match(re) != null) {
      return 'amex';
    }

    // visa
    var re = new RegExp('^4');
    if (number.match(re) != null) {
      return 'visa';
    }

    return '';
  }

  function addEvent(elem, event, func) {
    elem.addEventListener(event, func);
  }
})();
