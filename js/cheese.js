
// ----------slider----------
$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','5thPage','6thPage','other'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['top', '5位','4位','3位','2位','1位','other']
	});
});

// ----------落る---------

// $(function(){
// 	var rank1 = $('.fp-viewing-3rdPage');

// });

// setInterval(function(){


// },100);


$(function(){
	// var class1 = $('body').hasClass('fp-viewing-secondPage');

// easeOutBounce

	setInterval(function(){
		var class1 = $('body').hasClass('fp-viewing-secondPage');
		var class2 = $('body').hasClass('fp-viewing-3rdPage');
		var class3 = $('body').hasClass('fp-viewing-4thPage');
		var class4 = $('body').hasClass('fp-viewing-5thPage');
		var class5 = $('body').hasClass('fp-viewing-6thPage');

		var anime1= true;
		var anime2= true;
		var anime3= true;
		var anime4= true;
		var anime5= true;

		console.log(anime1);
		if(class1==true){
			setTimeout(function() {
				$(".rank5-top").attr("src","images/sakeche.png");
			},200);
			$(".rank5 .chee").fadeIn(200);
			$(".rank5 .sara").fadeIn(900);
			$(".rank5 .kai").fadeIn(900);
			if(anime1==true){
				 $('.rank5 .chee').animate({ top: 160 }, 500, 'easeOutBounce');
				 anime1 = false;
			}


		}if(class2==true){
			setTimeout(function() {
				$(".rank4-top").attr("src","images/kama.png");
			},200);
			$(".rank4 .chee").fadeIn(200);	
			$(".rank4 .sara").fadeIn(900);
			$(".rank4 .kai").fadeIn(900);
			if(anime2==true){
				 $('.rank4 .chee').animate({ top: 100 }, 1200, 'easeOutQuad');
				 anime2 = false;
			}
		}else if(class3==true){
			setTimeout(function() {
				$(".rank3-top").attr("src","images/ torokeru.png");
			},200);
			$(".rank3 .chee").fadeIn(200);
			$(".rank3 .sara").fadeIn(900);
			$(".rank3 .kai").fadeIn(900);
			if(anime3==true){
				 $('.rank3 .chee').animate({ top: 240 }, 500, 'easeInOutBack');
				 anime3 = false;
			}


		}else if(class4==true){
			setTimeout(function() {
				$(".rank2-top").attr("src","images/cream.png");
			}, 200);
			$(".rank2 .chee").fadeIn(250);
			$(".rank2 .sara").fadeIn(900);
			$(".rank2 .kai").fadeIn(900);
			if(anime4==true){
				 $('.rank2 .chee').animate({ top: 160 }, 550, 'easeOutBounce');
				 anime4 = false;
			}

		}else if(class5==true){
			setTimeout(function(){
				$(".rank1-top").attr("src","images/mottuan.png");
			},200);
			$(".rank1 .chee").fadeIn(250);
			$(".rank1 .sara").fadeIn(900);
			$(".rank1 .kai").fadeIn(900);
			if(anime5==true){
				 $('.rank1 .chee').animate({ top: 160 }, 550, 'easeOutElastic');
				 anime5 = false;
			}
		}
	},200);

	// if(class1==true){
	// 	$('.rank5 .chee').animate({ top: 160 }, 160, 'linear');

	// }
});

$(function() {
 	$(".top").click(function () {
        $("body").attr("class","fp-viewing-firstPage");
    });
});
	// $('.rank5 .chee').animate({ top: 160 }, 160, 'linear');












