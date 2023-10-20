console.log("It work!");

$(".burger").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
});
$(".close").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
});

$(document).ready(function scrollToElem(elem) {
  event.preventDefault();
  const target = document.querySelector(elem.hash);
  window.scrollTo({
    top: target.offsetTop,
    behavior: "smooth",
  });
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
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
