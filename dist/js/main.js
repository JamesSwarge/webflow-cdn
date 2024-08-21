// alert("Hello from my webflow-cdn repo");
$(".loader-api").delay(1800).fadeOut(2000);

// Neww JS
document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.bgdark').forEach(trigger => { 
    new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.closest('.pr-body').classList.add('dark-bg');
      }
      else{
        entry.target.closest('.pr-body').classList.remove('dark-bg');
      }
      });
    },
    { 
      threshold: 0.88
    }).observe(trigger);
   });
});

$(document).ready(function () {
  $(".custom-nav-toggle").click(function () {
    $("body").toggleClass("nav_menu_active");
  });
  // $(".comman-top-menu").toggleClass("active-class");
  $(".cus-container .custom-nav-toggle").click(function () {
    $(".comman-top-menu").addClass("active-class");
  });

  // for navigation menu click actions
  $(".pr-header .menu-bttn").click(function () {
    $("body").toggleClass("nav_menu_is_active");
    $(".pr-top-menu").toggleClass("active-class");
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("nav").addClass("sticky");
  } else {
    $("nav").removeClass("sticky");
  }
});

$(".nav-link-wrap a").click(function () {
  $(".nav-container").addClass("add-class");
});

{
  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/scrollify/1.0.21/jquery.scrollify.min.js" integrity="sha512-UyX8JsMsNRW1cYl8BoxpcamonpwU2y7mSTsN0Z52plp7oKo1u92Xqfpv6lOlTyH3yiMXK+gU1jw0DVCsPTfKew==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
  $(function() {
    $.scrollify({
      section : ".common-section-snap",
    });
  });
</script> */
}
