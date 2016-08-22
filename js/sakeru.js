// $(function() {
//   var h = $(window).height();
 
//   $('#wrap').css('display','none');
//   $('#loader-bg ,#loader').height(h).css('display','block');
// });
 
// $(window).load(function () { //全ての読み込みが完了したら実行
//   $('#loader-bg').delay(900).fadeOut(800);
//   $('#loader').delay(600).fadeOut(300);
//   $('#wrap').css('display', 'block');
// });
 
// //10秒たったら強制的にロード画面を非表示
// $(function(){
//   setTimeout('stopload()',100);
// });
 
// function stopload(){
//   $('#wrap').css('display','block');
//   $('#loader-bg').fadeOut(100);
//   $('#loader').fadeOut(100);
// }


$(function(){
    var x=0;
    $('.main').fadeIn(100);

	$('.header').css('background-image','url(./images/color.png)');

    setInterval(function(){
    	if(x<8){
			var pos = x * -$(window).height();
			$('.header').css({
			'background-position': 0+ 'px ' +  pos + 'px'
			});
		}
		if(x>5){
			$(".title").fadeIn(200);
			$(".memo").fadeIn(1000);
		}

		if(x>7){
			$(".rankdai").fadeIn(100);
			$(".rank1-top").fadeIn(300);
			$(".rank2-top").fadeIn(600);
			$(".rank3-top").fadeIn(400);
			$(".rank4-top").fadeIn(800);
			$(".rank5-top").fadeIn(500);
		}
		if(x>8){
			$('header').removeClass('.header');
			$('.header').remove();
		}
		x++;
	},200);
});

$(function(){
setTimeout(function(){setInterval(function(){
    $('.scroll').fadeOut(200, function(){$(this).fadeIn(500)});
}, 1400);},1000);

});
