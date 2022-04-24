$(function(){
  $('.box p').addClass('move');
  $(window).scroll(function(){
    $(".box").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("img").removeClass('move');
      } else {
        $(this).find("img").addClass('move');
      }
		$(".box2").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("h2,p").removeClass('move');
      } else {
        $(this).find("h2,p").addClass('move');
      }
			$(".box3").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("img").removeClass('move');
      } else {
        $(this).find("img").addClass('move');
      }
				$(".box4").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("h2,p").removeClass('move');
      } else {
        $(this).find("h2,p").addClass('move');
      }
    });
  });
});
});
});
});