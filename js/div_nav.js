////top bar ////
$('#topBar').headBand({
    'background':'black',  //this color MUST be same as nav bar!!!!
    'height':"3"
});
////end////

////change nav font size then mouse enter////
$(function() {
    $('.nav-item').on('mouseenter',function(){
        var index = $('.nav-item').index(this);
        var chooseLi = $('.nav-item').get(index);
        $(chooseLi).css('font-size','2rem').siblings().css('font-size','1.5rem');
    }).on('mouseleave',function(){
        var index = $('.nav-item').index(this);
        var chooseLi = $('.nav-item').get(index);
        $(chooseLi).css('font-size','1.5rem');
    });
});
////end////

////animate for nav to show and hide when scroll up and down////
$(function() {
    var new_scroll_position = 0;
    var last_scroll_position;
    
    window.addEventListener('scroll', function(e) {
        last_scroll_position = window.scrollY;
    
        // Scrolling down
        if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
            $('#navBar').removeClass("slideDown");
            $('#navBar').addClass("slideUp");
        } // Scrolling up
        else if (new_scroll_position > last_scroll_position) {
            $('#navBar').removeClass("slideUp");
            $('#navBar').addClass("slideDown");
        }
    
        new_scroll_position = last_scroll_position;
    });
});
////end////

////animate for scroll to each div////
$(function(){
    $('#li_home').click(function () {
        $('html,body').animate({ scrollTop: $('#home').offset().top}, 1000)
    });
    $('#li_aboutMe').click(function () {
        $('html,body').animate({ scrollTop: $('#aboutMe').offset().top}, 1000)
    });
    $('#li_skillsList').click(function () {
        $('html,body').animate({ scrollTop: $('#skillsList').offset().top}, 1000)
    });
    $('#li_resume').click(function () {
        $('html,body').animate({ scrollTop: $('#resume').offset().top}, 1000)
    });
    $('#li_portfolios').click(function () {
        $('html,body').animate({ scrollTop: $('#portfolios').offset().top}, 1000)
    });
    $('#li_contactMe').click(function () {
        $('html,body').animate({ scrollTop: $('#contactMe').offset().top}, 1000)
    });
});
////end////

////"back to top" function////
$(function(){
    //"back to top" icon
    $('#top_btn').on('click', function(e){
        $('html, body').animate({
            scrollTop:0
        }, 900);
    }); 
});
//show "back to top" icon when scrolltop value is not 0
function getScrollTop(){
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
    documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}
window.onscroll = function() {
    if(getScrollTop() != 0){
        $('#backToTop').show();
    }
    else if(getScrollTop() == 0) {
        $('#backToTop').hide();
    }
};
////end////