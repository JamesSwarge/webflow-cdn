// $(document).load($(window).bind("resize", checkPosition));

// $(document).ready(function () {
//   $(".custom-scroller").mCustomScrollbar();
// });

// function checkPosition() {
//   if (window.matchMedia('(max-width: 991.98px)').matches) {
//     $(".custom-scroller").mCustomScrollbar("destroy");
//   } else {
//     $(".custom-scroller").mCustomScrollbar();
//   }
// }

if ($(window).width() > 992) {
  $(".custom-scroller").mCustomScrollbar();
}else{
  $(".custom-scroller").mCustomScrollbar("destroy");
}