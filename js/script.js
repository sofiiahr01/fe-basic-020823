console.log("It work!");

$(".burger").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
});
$(".close").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
});
