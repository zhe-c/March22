//build this .js is because to void error "Uncaught ReferenceError:xx is not defined at :1:1"
//this js type should be text/javascript, not "module" as main.js.  
//link: https://blog.csdn.net/ljj123_/article/details/82825247

getPage(1);
//翻页
function getPage(pn) {
  var dataCount=28;   //总数据条数!!! 和JSON数据配合！!!!!!
  var pageSize=8;   //每页显示条数!!!
  var pageCount= Math.ceil(dataCount / pageSize);   //总页数
  if(pn==0||pn>pageCount) {
    return;
  }
  var ul = $(".allCols");
  ul.empty();
  paintPage(pageCount,pn);   //绘制页码
  var startPage = pageSize * (pn - 1);

  fetch('../json/mySkillsList.json')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var name = json.map(function(value){
      return value.name; 
    })
    var front = json.map(function(value){
      return value.front;
    })
    var back = json.map(function(value){
      return value.back;
    })

    if (pageCount == 1) {     // 当只有一页时 
      for (var j = 0; j < dataCount; j++) {  
        var e="<div class='eachCol' ontouchstart='this.classList.toggle(\"hover\");'><div class='container'><div class='front' style='background-image: url(../assets/skills/"+j+".png);'><div class='inner'><p>"+name[j]+"</p><span>"+front[j]+"</span></div></div><div class='back'><div class='inner'><p>"+back[j]+"</p><button type='button' class='btn btn-secondary'>Demos: "+name[j]+"</button></div></div></div></div>";
        ul.append(e);    
      }
    }
    else {      // 当超过一页时 
      var e=""; 
      var endPage = pn<pageCount?pageSize * pn:dataCount;
      for (var j = startPage; j < endPage; j++) {  
        var e="<div class='eachCol' ontouchstart='this.classList.toggle(\"hover\");'><div class='container'><div class='front' style='background-image: url(../assets/skills/"+j+".png);'><div class='inner'><p>"+name[j]+"</p><span>"+front[j]+"</span></div></div><div class='back'><div class='inner'><p>"+back[j]+"</p><button type='button' class='btn btn-secondary'>Demos: "+name[j]+"</button></div></div></div></div>";
        ul.append(e);
      }
    }
  })
}

//绘制页码
function paintPage(number,currNum)  //number 总页数,currNum 当前页  
{
  var pageUl = $(".pagination");
  pageUl.empty();
  var ulDetail = "";

  if(number == 1) {
    ulDetail= "<li class=\"prev\"><a href=\"javascript:void(0)\">Previous</a></li>"+
    "<li class=\"numb choose\"><a href=\"javascript:getPage(1)\">1</a></li>"+
    "<li class=\"next\"><a href=\"javascript:void(0)\">Next</a></li>";
  }
  else if(number == 2) {
    ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage(1)\">Previous</a></li>"+
    "<li class=\"numb"+choosele(currNum,1)+"\"><a href=\"javascript:getPage(1)\">1</a></li>"+
    "<li class=\"numb"+choosele(currNum,2)+"\"><a href=\"javascript:getPage(2)\">2</a></li>"+
    "<li class=\"next\"><a href=\"javascript:getPage(2)\">Next</a></li>";
  }
  else if(number == 3) {
    ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">Previous</a></li>"+
    "<li class=\"numb"+choosele(currNum,1)+"\"><a href=\"javascript:getPage(1)\">1</a></li>"+
    "<li class=\"numb"+choosele(currNum,2)+"\"><a href=\"javascript:getPage(2)\">2</a></li>"+
    "<li class=\"numb"+choosele(currNum,3)+"\"><a href=\"javascript:getPage(3)\">3</a></li>"+
    "<li class=\"next\"><a href=\"javascript:getPage("+parseInt(currNum+1)+")\">Next</a></li>";
  }
  else if(number == currNum && currNum > 3) {
    ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">Previous</a></li>"+
    "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currNum-2)+")\">"+parseInt(currNum-2)+"</a></li>"+
    "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">"+parseInt(currNum-1)+"</a></li>"+
    "<li class=\"numb choose\"><a href=\"javascript:getPage("+currNum+")\">"+currNum+"</a></li>"+
    "<li class=\"next\"><a href=\"javascript:getPage("+currNum+")\">Next</a></li>";
  }
  else if(currNum == 1 && number > 3) {
    ulDetail= "<li class=\"prev\"><a href=\"javascript:void(0)\">Previous</a></li>"+
    "<li class=\"numb choose\"><a href=\"javascript:void(0)\">1</a></li>"+
    "<li class=\"numb\"><a href=\"javascript:getPage(2)\">2</a></li>"+
    "<li class=\"numb\"><a href=\"javascript:getPage(3)\">3</a></li>"+
    "<li class=\"next\"><a href=\"javascript:getPage(2)\">Next</a></li>";
  }
  else {
    ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">Previous</a></li>"+
    "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">"+parseInt(currNum-1)+"</a></li>"+
    "<li class=\"numb choose\"><a href=\"javascript:getPage("+currNum+")\">"+currNum+"</a></li>"+
    "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currNum+1)+")\">"+parseInt(currNum+1)+"</a></li>"+
    "<li class=\"next\"><a href=\"javascript:getPage("+parseInt(currNum+1)+")\">Next</a></li>";
  }

  $(".pagination").append(ulDetail);
}

function choosele(num,cur) {
  if(num == cur) {
    return "choose";
  }
  else {
    return "";
  }
}