/* Variables */
var AnimEnd = 'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd';
var nav = $('.nav');
var navButton = $('.nav-el');
var overlay = $('.overlay');

/* On menu button click event */
$(navButton).click(function(event){

    /* This conditional statement is here to prevent
    clicks on inactive buttons on IE10, as pointer-events
    cannot be applied on non-SVG elements */

    if ($(this).hasClass("inactive")) {
        event.preventDefault();
    } else {
        /* Remove old previous classes */
        $(navButton).removeClass('inactive_reverse active_reverse');
        $(nav).removeClass('fx-box_rotate fx-box_rotate_reverse');
        $(overlay).removeClass('active active_reverse');

        /* Add classes on defined elements */
        $(this).siblings().addClass('inactive');
        $(this).addClass('active');
        $(nav).addClass('fx-box_rotate');

        /* Activate related overlay */
        var o_target = $(this).data('id');
        $('#'+o_target).addClass('active');

        /* Prevent scrolling */
        $("body").addClass('noscroll');
    }

    $('#topBar').css('display','none');
});

/* On close button click event */
$(".closeOverlay").click(function(){
    /* Add *_reverse classes */
    $('.active', nav).removeClass('active').addClass('active_reverse');
    $('.inactive', nav).addClass('inactive_reverse');
    $(nav).addClass('fx-box_rotate_reverse');
    $(this).parent().addClass('active_reverse');

    /* Remove .noscroll and .inactive when animation is finished */
    $('.inactive_reverse').bind(AnimEnd, function(){
        $('body').removeClass('noscroll');
        $(navButton).removeClass('inactive');
        $('.inactive_reverse').unbind(AnimEnd);
    });

    $('#topBar').css('display','block');
});

////////////////////////////////////////////
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});
//////////////////////////////////////////////


////next fix the bug which when closing overlay pages , contant disappear after page disappear////
$(function(){
    $("#closeWebsiteOverlay").click(function(){
        $("#ov-topleft").css("display","none")
    });
    $("#el-topleft").click(function(){
        $("#ov-topleft").css("display","block")
    });

    $("#closeAppOverlay").click(function(){
        $("#ov-topright").css("display","none")
    });
    $("#el-topright").click(function(){
        $("#ov-topright").css("display","block")
    });

    $("#closeGameOverlay").click(function(){
        $("#ov-btmleft").css("display","none")
    });
    $("#el-btmleft").click(function(){
        $("#ov-btmleft").css("display","block")
    });

    $("#closeOtherOverlay").click(function(){
        $("#ov-btmright").css("display","none")
    });
    $("#el-btmright").click(function(){
        $("#ov-btmright").css("display","block")
    });
});
////end////

////Tooltip for 4 buttons, required jBox.all.js & jBox.all.css////
$(document).ready(function() {
	new jBox('Mouse', {
	    attach: '#el-topleft',
	    position: {x: 'right', y: 'bottom'},
	    content: 'Click to see all the Websites I code'
    });
    new jBox('Mouse', {
	    attach: '#el-topright',
	    position: {x: 'right', y: 'bottom'},
	    content: 'Click to see all the Apps I code'
    });
    new jBox('Mouse', {
	    attach: '#el-btmleft',
	    position: {x: 'right', y: 'bottom'},
	    content: 'Click to see all the Games I code'
    });
    new jBox('Mouse', {
	    attach: '#el-btmright',
	    position: {x: 'right', y: 'bottom'},
	    content: 'Click to see all the other things I code'
	});
});
////end////

