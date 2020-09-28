import './jquery.vidbacking.js';

$(function(){
    // $("#starting").show();
    setTimeout(function () {
        $("#starting").hide();
        $("header").css("display","block");
        $("#autoVideo").css("display","block");

        //call home-div background video (jquery.vidbacking.js)
        $('#home').vidbacking();
        // animate for home-div bottom number change
        $('#homeDivNum1').animate({count: 111}, {duration: 3000, step: function(){
        $('#homeDivNum1').text(Math.round(this.count));
        }});
        $('#homeDivNum2').animate({count: 222}, {duration: 3000, step: function(){
        $('#homeDivNum2').text(Math.round(this.count));
        }});
        $('#homeDivNum3').animate({count: 333}, {duration: 3000, step: function(){
        $('#homeDivNum3').text(Math.round(this.count));
        }});

        $('#welcomeH1').fadeIn("3000");
    }, 20000); //20000
});

// $(function(){
   
// });

// $(function(){
    // //call home-div background video (jquery.vidbacking.js)
    // $('#home').vidbacking();

    // // animate for home-div bottom number change
    // $('#homeDivNum1').animate({count: 111}, {duration: 3000, step: function(){
    //     $('#homeDivNum1').text(Math.round(this.count));
    // }});
    // $('#homeDivNum2').animate({count: 222}, {duration: 3000, step: function(){
    //     $('#homeDivNum2').text(Math.round(this.count));
    // }});
    // $('#homeDivNum3').animate({count: 333}, {duration: 3000, step: function(){
    //     $('#homeDivNum3').text(Math.round(this.count));
    // }});
// });