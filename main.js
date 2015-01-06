$(document).ready(function() {

  $(window).scroll(function() {
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
    if(scrollt > 200) {
      $(".topbar").stop().fadeTo(300, 0.7);
    }else{
      $(".topbar").stop().fadeTo(300, 1);
    }
  });
  $(".topbar").mouseenter(function() {
    $(".topbar").fadeTo(100, 1);
  });
  $(".topbar").mouseleave(function() {
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
    if (scrollt > 200) {
      $(".topbar").fadeTo(100, 0.7);
    }
  });
});
