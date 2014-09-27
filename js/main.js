function setCarouselSlide (slide) {
  $('.carousel .slides section').eq(slide).addClass('current');
  $('.carousel nav a').eq(slide).addClass('current');
}

$(function() {
  var currentSlide = 0;
  var numSlides = 3;

  $('.slides .hello').removeClass('current').addClass('current');

  function changeSlide (change) {
    $('.carousel .current').removeClass('current');
    currentSlide = (currentSlide + change) % numSlides;
    setCarouselSlide(currentSlide);
  }

  $('.carousel .next').on({
    mouseenter: function() {
      changeSlide(1);
    },
    click: function() {
      changeSlide(1);
    }
  });

  $('.carousel .previous').on({
    mouseenter: function() {
      changeSlide(-1);
    },
    click: function() {
      changeSlide(-1);
    }
  });
});
