
$(document).ready(function () {
  // alert("modals.js");
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

  $('.pr-home-common-yt-embbd').click(function() {
    let curr_vid = $(this)
    console.log("curr_vid", curr_vid[0].id, ".pr-yt-modal."+curr_vid[0].id);
    $(".pr-yt-modal."+curr_vid[0].id).fadeIn();
    // e.stopPropagation();
  });

  $('.pr-yt-modal-close').click(function() {
    $('.pr-yt-modal').fadeOut();
    let curr_vid_close = $(this)
    const videoElement = $('.pr-yt-vid-embd lite-youtube');
    // const iframe = videoElement[0].domRefFrame.lastChild.lastChild.lastChild.lastChild.lastChild;
    // const iframe2 = videoElement[0].domRefFrame.lastChild.lastChild.lastChild.lastChild.lastChild;
    // const iframe2 =  $(curr_vid_close[0].parentElement+" .pr-yt-vid-embd lite-youtube");
    let bb = $(this).closest('.pr-yt-modal')
    console.log("curr_vid_closed", bb, curr_vid_close[0].parentElement.lastChild);
    // curr_vid_close[0].parentElement.empty()
    return bb.html("");
    // iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
  });  

});

$(document).ready(function () {
  $(".custom-scroller").mCustomScrollbar();
});