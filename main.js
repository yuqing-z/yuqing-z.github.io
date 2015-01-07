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

  var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(".overlay").hover(function() {
    $(this).addClass("animated fadeIn").one(animationEndEvents, function() {
      $(this).removeClass("animated fadeIn");
    });;
  }, function() {
    $(this).addClass("animated fadeOut").one(animationEndEvents, function() {
      $(this).removeClass("animated fadeOut");
    });;
  });

});
