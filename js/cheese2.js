$(function(){
	var p = $(".article1").offset().top-500;
	var p2 = $(".article2").offset().top-400;
	var p3 = $(".article3").offset().top-300;

	$(window).scroll(function(){
		var w = $(window).scrollTop();
		if(w>p){
			$('.article1').animate({opacity:'1'},600); 
		}
		if(w>p2){
			$('.article2').animate({opacity:'1'},600); 
		}
		if(w>p3){
			$('.article3').animate({opacity:'1'},600); 
		}

	});
})