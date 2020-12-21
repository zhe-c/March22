// Animate On Scroll Library
AOS.init({
    offset: -800,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 500,
    // once: true,
    disable: 'mobile'
});
////


////percentageCounter////
$(window).scroll(function() {
	var scrollTo = $(window).scrollTop(),
	docHeight = $(document).height(),
	windowHeight = $(window).height();
	scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
	scrollPercent = scrollPercent.toFixed(1);

	$('#percentageCounter span').text(scrollPercent+"%");

}).trigger('scroll');
////end////


////////////////footer////////////////////////
////Must like it////
function f1(){
	alert('Thank you! I like it too!') 
} 

var flag = 1;
function f() { 
	var Bn = document.getElementById('Bn');
	// var aWidth= document.body.clientWidth || document.documentElement.clientWidth;
	// var aHeight= document.body.clientHeight || document.documentElement.clientHeight;
	// var sJs1=Math.floor(Math.random()*aHeight);
    // var sJs2=Math.floor(Math.random()*aWidth);
    var sJs1=Math.floor(Math.random()*500);
	var sJs2=Math.floor(Math.random()*500);
	if(flag==1) {
		Bn.style.bottom = sJs1 + 'px';
		Bn.style.left = sJs2+'px'; 
		flag = 2;
	} else if(flag==2) {
		Bn.style.bottom=sJs1+'px';
		Bn.style.left=sJs2+'px';
		flag=3;
	} else if(flag==3) {
	    Bn.style.bottom = 235 + 'px';
		Bn.style.left = 286 + 'px';
		flag=4;
	}else if(flag==4){
		Bn.style.bottom = 235 + 'px';
		Bn.style.left = 300 + 'px';
		flag=1;
	}
}
function f2() {
	alert('What??!! You found this tricky bug! Contact and tell me about this!');
}
////end////


//////////////////////////////////////////////////////
$(function(){
	fetch('https://ipapi.co/json/').then(function(response) {
		return response.json();
	  }).then(function(data) {
		// console.log(data);
		$('#greetingCity').html(data.city);
		$('#greetingCountry').html(data.country_name);
	  }).catch(function(e) {
		console.log("Oops, Locationing error");
	  });
});

////////////////////////////
//for "youmustlikeit"div
var limit = "0:0:0";
var parselimit = limit.split(":");
totallimit = parselimit[0]*3600+parselimit[1]*60+parselimit[2]*1;

function beginTimer()
{        	
	curhour = Math.floor(totallimit/3600);
	curmin = Math.floor((totallimit-curhour*3600)/60);
	cursec = Math.floor(totallimit-curhour*3600-curmin*60)
	
	document.getElementById('greetingHour').innerHTML=curhour;
	document.getElementById('greetingMin').innerHTML=curmin;
	document.getElementById('greetingSec').innerHTML=cursec

	totallimit++;
	window.setTimeout("beginTimer();",1000);
}

