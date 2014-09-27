function setCarouselSlide (slide) {
  $('.carousel .slides section').eq(slide).addClass('current');
  $('.carousel nav a').eq(slide).addClass('current');
}

$(function() {
  var currentSlide = 0;
  var numSlides = 3;

  function changeSlide (change) {
    $('.carousel .current').removeClass('current');
    currentSlide = (currentSlide + change) % numSlides;
    setCarouselSlide(currentSlide);
  }

  $('.carousel').on('click', '.next', function() {
    changeSlide(1);
  });

  $('.carousel').on('click', '.previous', function() {
    changeSlide(-1);
  });
});
