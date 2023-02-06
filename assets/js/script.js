$(document).ready(function () {
  $('.tabs-buttons a').on('click', function () {
    if (!$(this).data('tab')) {
      return;
    }
    $('.tabs-buttons a').removeClass('active');
    $(this).addClass('active');
    const tab = $(this).data('tab');
    $('.tabs section').removeClass('active');
    $('.tabs')
      .find('.' + tab)
      .addClass('active');
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

  $('#menu-item-769').on('mouseenter', () => {
    $('.hover-menu').show()
  })

  $('.hover-menu').on('mouseover', () => {
    $('.hover-menu').addClass('isHover')
  })

  $('.hover-menu').on('mouseleave', () => {
    $('.hover-menu').hide()
    $('.hover-menu').removeClass('isHover')
  })

  $('.input-wrapper .show-password').on('click', function(){
    if ($(this).parent().find('input').attr('type') === "password") {
      $(this).parent().find('input').attr('type', "text");
      console.log('1111');
    } else {
      $(this).parent().find('input').attr('type', "password");
    }
  })

  

});
