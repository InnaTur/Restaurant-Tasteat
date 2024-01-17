$(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1120,
        settings:{
          slidesToShow: 1
        }
      }
    ]
  });


  // бургер меню
$('.burger-btn').on('click', function() {
  $(this).toggleClass('dagger');
  $('.list').toggleClass('active');
});

// скрол по сторінці та закриття бургер-меню
$('.list__link, .header__view-menu, .reservation-btn, .menu-btn').on('click', function(event) {
  event.preventDefault();

  var targetId = $(this).attr('href');
  var targetBlock = $(targetId);

  if (targetBlock.length) {
      $('html, body').animate({
          scrollTop: targetBlock.offset().top
      }, 1000);

      // Закриваємо бургер-меню після кліку
      $('.burger-btn').removeClass('dagger');
      $('.list').removeClass('active');
  }
});

});

