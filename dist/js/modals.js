
$(document).ready(function () {
  alert("modals.js");
  // $('.pr-yt-video-embd').click(function() { 
  //   var ytid = $(this).attr('id');
  //   alert(ytid);
  //   // $container.cycle(id.replace('#', '')); 
  //   return false; 
  // });

  $('.pr-yt-video-embd').click(function() {
    let curr_vid = $(this)
    console.log("curr_vid", curr_vid[0].id, ".pr-yt-modal."+curr_vid[0].id);
    $(".pr-yt-modal."+curr_vid[0].id).fadeIn();
    // e.stopPropagation();
  });
  $('.pr-yt-modal-close').click(function() {
    $('.pr-yt-modal').fadeOut();
  });  
});

// $(function() {
//   $('.contact-button').click(function() {
//     $('.modal').fadeIn();
//     $('.modal-background').fadeIn();
//     e.stopPropagation();
//   });
//   $('.close-modal').click(function() {
//       $('.modal').fadeOut();
//       $('.modal-background').fadeOut();
//   });  
//   $('.modal-background').click(function() {
//       $('.modal').fadeOut();
//       $('.modal-background').fadeOut();
//   }); 
//   $(document).keydown(function (event) {
//       if (event.keyCode == 27) {
//           $('.modal').fadeOut();
//           $('.modal-background').fadeOut();
//       }
//   });
// });