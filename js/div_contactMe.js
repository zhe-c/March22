
//copy phone number function 
//http://www.manongjc.com/article/17002.html
var copyThePhone = function() {
    var inp =document.createElement('input'); 
    document.body.appendChild(inp) 
    inp.value ="Zhe Chen's phone number is: "+document.getElementById("myPhoneNum").textContent
    inp.select(); 
    document.execCommand('copy',false);
    alert("Phone # is Copied !");
    inp.remove(); 
}

var copyTheEmail = function() {
    var inp =document.createElement('input'); 
    document.body.appendChild(inp) 
    inp.value ="Zhe Chen's Email is: "+document.getElementById("myPhoneNum").textContent
    inp.select(); 
    document.execCommand('copy',false);
    alert("Email Address is Copied !");
    inp.remove(); 
}

$(function(){
    $('#copyNumBtn').click(copyThePhone);
    $('#copyNumImg').click(copyThePhone);
    $('#copyEmailBtn').click(copyTheEmail);
    $('#copyEmailImg').click(copyTheEmail);
})
////end////


////count down function////
$(document).ready(function() {
	$('#countdown').ClassyCountdown({
		end: Date.UTC(2021, 4, 25, 0, 0, 0)/1000,
		now:  $.now()/1000,
		labels: true,
		style: {
			element: "",
			textResponsive: .5,
			days: {
				gauge: {
					thickness: .01,
					bgColor: "rgba(0,0,0,0.05)",
					fgColor: "#1abc9c"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			},
			hours: {
				gauge: {
					thickness: .01,
					bgColor: "rgba(0,0,0,0.05)",
					fgColor: "#2980b9"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			},
			minutes: {
				gauge: {
					thickness: .01,
					bgColor: "rgba(0,0,0,0.05)",
					fgColor: "#8e44ad"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			},
			seconds: {
				gauge: {
					thickness: .01,
					bgColor: "rgba(0,0,0,0.05)",
					fgColor: "#f39c12"
				},
				textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
			}

		},
		onEndCallback: function() {
			console.log("Time out!");
		}
	});
});
////end////


$(document).ready(function() {
	new jBox('Mouse', {
	    attach: '#countdown',
	    position: {x: 'right', y: 'bottom'},
	    content: 'Graduation day: April 24th, 2020'
	});
});