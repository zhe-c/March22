
//activeted function after mouse enter div for the first time.
// $('.skw-pages').mouseover(function() {
$(document).ready(function() {

    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";
  
    function pagination() {
      scrolling = true;
  
      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");
  
      setTimeout(function() {
        scrolling = false;
      }, animTime);
    };
  
    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    };
  
    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    };

    $('#trunLeft').click(function(){
      navigateUp();
    });
    $('#trunRight').click(function(){
      navigateDown();
    });
  
});

////about me title////
var words = document.querySelectorAll(".word");
words.forEach(function (word) {
    var letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(function (letter) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
var rotateText = function () {
    var currentWord = words[currentWordIndex];
    var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach(function (letter, i) {
        setTimeout(function () {
            letter.className = "letter out";
        }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach(function (letter, i) {
        letter.className = "letter behind";
        setTimeout(function () {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);
////end////


//// page3 and page4////
$(function(){
  $('#aboutMePage4Button').one('click', function(){
      $('#aboutMePage4_ButtonDiv').fadeOut(2000, function(){
          $('#aboutMePage3Code').css("display","block");
          $('#aboutMePage4Words').css("display","block");  
          $('#aboutMePage3').typewriter();
          $("#codingWords").typewriter();
      });
  });
});
////end////


////page4 & page5 buttons hovering words////
$(document).ready(function() {
  new jBox('Mouse', {
    attach: '#aboutMePage4_ButtonDiv',
    position: {x: 'right', y: 'bottom'},
    content: 'Click & Wait for Printing...'
  });

  new jBox('Mouse', {
    attach: '#btnLikes',
    position: {x: 'right', y: 'bottom'},
    content: 'Keep Going...'
  });
});
////end////

////page5 likes button////
$(function () {
             
  $("#btnLikes").click(function(){
      // var x = 100;   
      var x = 0;       
      var y = 900;  
      var num = Math.floor(Math.random() * 3 + 1);
      var index=$('#demoEmpty').children('img').length;
      var rand = parseInt(Math.random() * (x - y + 1) + y); 
          
      $("#demoEmpty").append("<img class='likeHearts' src=''>");
      $('img:eq(' + index + ')').attr('src','../assets/likes/'+num+'.png');
      $(".likeHearts").animate({
          bottom:"80%",
          opacity:"0.7",
          left: rand,
      },3000) 
  })
}) 
////end////
