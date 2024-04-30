$(document).ready(function() {

  // Stop Motion Effect
  var lFollowX = 0,
      lFollowY = 0,
      x = 0,
      y = 0,
      friction = 1 / 30;

  function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    
    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.bg').css({
      '-webit-transform': translate,
      '-moz-transform': translate,
      'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
  }

  $(window).on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

  });
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  } else {

  moveBackground();
  };

  // Legal Age Confirmation
  $('#enterSite').click(function() {
    if ($('#isAgeSelected').is(':checked')) {
      $( "article#landingPage" ).replaceWith(function() {
      $('this').fadeOut("slow");
      $("div#siteContent").fadeIn("slow");

      });
    } else {
      alert("Sorry, you need to be of legal drinking age in order to proceed.");
      }
  });

  // Smooth Scrolling
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Activate Our Story Carousel
  $("#ourStorySlider").carousel();
  
  $(".item").click(function(){
      $("#ourStorySlider").carousel(1);
  });
  $(".left").click(function(){
      $("#ourStorySlider").carousel("prev");
  });
  $(".right").click(function(){
      $("#ourStorySlider").carousel("next");
  });

    // Activate Wine Carousel
  $("#wineSection").carousel();

  $(".item").click(function(){
      $("#wineSection").carousel(1);
  });
  $(".left").click(function(){
      $("#wineSection").carousel("prev");
  });
  $(".right").click(function(){
      $("#wineSection").carousel("next");
  });
});

