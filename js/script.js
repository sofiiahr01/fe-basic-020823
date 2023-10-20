console.log("It work!");

$(".burger").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
});
$(".close").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
});

$(document).ready(function () {
  $(".slider-wrap").slick({
    arrows: false,
    dots: true,
  });
});

$(document).ready(function () {
  $(".achiv-slider-wrap").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
  });
});
