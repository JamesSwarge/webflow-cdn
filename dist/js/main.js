// alert("Hello from my webflow-cdn repo");
$(".loader-api").delay(1800).fadeOut(2000);

// Neww JS
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bgdark").forEach((trigger) => {
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.closest(".pr-body").classList.add("dark-bg");
          } else {
            entry.target.closest(".pr-body").classList.remove("dark-bg");
          }
        });
      },
      {
        threshold: 0.88,
      }
    ).observe(trigger);
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

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 100) {
//     $("nav").addClass("sticky");
//   } else {
//     $("nav").removeClass("sticky");
//   }
// });

// const windowWidth = $(window).width();
// if (windowWidth < 992) {
//   // alert("nav");
//   let didScroll;
//   let lastScrollTop = 0;
//   const delta = 80;
//   const navbarHeight = $("#pr-main-nav").outerHeight();
//   $(window).scroll(function (event) {
//     didScroll = true;
//   });
//   setInterval(function () {
//     if (didScroll) {
//       hasScrolled();
//       didScroll = false;
//     }
//   }, 250);
//   function hasScrolled() {
//     const st = $(window).scrollTop();
//     if (Math.abs(lastScrollTop - st) <= delta) {
//       return;
//     }
//     if (st > lastScrollTop && st > navbarHeight) {
//       // $("#pr-main-nav").removeClass("nav-down nav-up").addClass("nav-up");
//     } else {
//       if (st + $(window).height() < $(document).height()) {
//         if ($(window).scrollTop() < 80) {
//           $("#pr-main-nav").removeClass("nav-up").removeClass("nav-down");
//         } else {
//           $("#pr-main-nav").removeClass("nav-down").addClass("nav-up");
//         }
//       }
//     }
//     lastScrollTop = st;
//   }
// }

// $(".nav-link-wrap a").click(function () {
//   $(".nav-container").addClass("add-class");
// });


$(document).ready(function() {
  let lastScrollTop = 0; // Stores the last scroll position
  let nav = $('.pr-main-nav'); // Replace '.navigation' with your navigation class or ID

  $(window).scroll(function() {
      let currentScroll = $(this).scrollTop(); // Get the current scroll position

      // Check if we've scrolled to the top of the page
      if (currentScroll === 0) {
        // Hide navigation at the top of the page
        // nav.fadeOut();
      } else {
        // Show navigation when scrolling
        // nav.fadeIn();
          if (currentScroll > lastScrollTop) {
              // If scrolling down
              nav.removeClass('nav-up').addClass('nav-down');
          } else {
              // If scrolling up
              nav.removeClass('nav-down').addClass('nav-up');
          }
      }

      lastScrollTop = currentScroll; // Update the last scroll position
  });
});