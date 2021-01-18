////password input function////
// $(document).ready(function() {
// 	$('#resumePwdButton').click(function(){
// 		var aa = $('#resumePwdInput').val();
// 		if(aa == 'webbychen') {
// 			$('#resumePwd').css("display","none");
// 			$('.tab-body').css("display","block");
// 		}
// 		else{	
// 			$('#resumePwdInput').val("");
// 			alert("Please try again, or contact me at 902-410-8762 for password.");
// 		}
// 	})

// 	$('#resumePwdReset').click(function(){
// 		$('#resumePwdInput').val("");
// 	})
// });
////end////


////tab changing function////
$(function(){
    $('.tab-head-content').on('click',function(e){
        var index = $('.tab-head-content').index(this);
        var bodyDOM = $('.tab-body-content').get(index);
        $(bodyDOM).addClass('on').siblings().removeClass('on');
    });
});
////end////


////textillate.js////
$(function(){
    $('.flashTab').textillate({
        loop: true,
        in:{effect: 'flash'},
        out:{effect: 'flash'}
      });
});
////end////


////tab "IT course" table setting////
uiduck.setOptions({
    templateId: "nsccCourseTable",
    style: { tbClass: "uiduck-coffee" },
    page: true,
    pageOptions: { limit: 5, limits: ['5', '6', '7', '8', '9'] },
    fieldOptions: [
        {
            index: true,
            title: "No.",
            width:"3%",
        },
        {
            key: "type",
            title: "Type",
            width:"8%",
        },{
            key: "name",
            title: "Course Name",
            width:"40%",
        }, {
            key: "learn",
            title: "Skills/Knowledge",
            width:"34%",
        }, {
            key: "score",
            title: "Score",
            width:"5%",
        }, {
            key: "links",
            title: "Outcomes",
            width:"10%",
        } ]
});

var data = [
    {
        "type":"Full Stack",
        "name":"Full Stack Programming",
        "learn":"MongoDB/Express/React/NodeJS",
        "score":"98",
        "links":`<a href="https://talktozhe.herokuapp.com">Portfolios</a>`
    },
    {
        "type":"Full Stack",
        "name":"Web Application Programming I",
        "learn":"PHP/Laravel",
        "score":"100",
        "links":`<a href="https://w0430503-laravel.herokuapp.com/">Portfolios</a>`
    }, 
    {
        "type":"Full Stack",
        "name":"Special Topics I",
        "learn":"Electron",
        "score":"98",
        "links":`<a href="../assets/download/InterviewHelper.exe" download="InterviewHelper.exe" type="button">Download</a>`
    },   
    {
        "type":"Full Stack",
        "name":"Developing for Content Management Systems",
        "learn":"WorldPress/Drupal",
        "score":"Ing",
        "links":`<a href="/">Portfolios</a>`
    },    
    {
        "type":"Full Stack",
        "name":"Web Application Programming II",
        "learn":"ASP.NET Core / Entity Feamework / SQL Server",
        "score":"Ing",
        "links":`<a href="/">Portfolios</a>`
    },
    {
        "type":"Full Stack",
        "name":"Special Topics II",
        "learn":"JS Game Program/Canvas/WebGL/Phaser3",
        "score":"Ing",
        "links":`<a href="/">Portfolios</a>`
    },
    {
        "type":"Full Stack",
        "name":"Web Application Security",
        "learn":"Web Security / OWASP / Kali Linux / WebGoat",
        "score":"Ing",
        "links":`<a href="/">Portfolios</a>`
    },
    {
        "type":"Back End",
        "name":"Data Fundamentals",
        "learn":"MySQL",
        "score":"96",
        "links":`<a href="/">Demos</a>`
    },
    {
        "type":"Back End",
        "name":"Operating Systems - Linux",
        "learn":"Ubuntu/Mint",
        "score":"100",
        "links":`<a href="/">Demos</a>`
    },
    {
        "type":"Back End",
        "name":"Web Server Fundamentals",
        "learn":"Apache/Windows IIS",
        "score":"100",
        "links":`<a href="/">Demos</a>`
    },
    {
        "type":"Front End",
        "name":"User Interface Design and Development",
        "learn":"Photoshop",
        "score":"94",
        "links":`<a href="/">Demos</a>`
    },
    {
        "type":"Front End",
        "name":"Web Design Fundamentals",
        "learn":"Design Principles/CRAP/Inkscape/Color Scheme",
        "score":"88",
        "links":`<a href="/">Portfolios</a>`
    },
    {
        "type":"Front End",
        "name":"Logic and Programming I",
        "learn":"JavaScript",
        "score":"94",
        "links":`<a href="/">Portfolios</a>`
    },
    {
        "type":"Front End",
        "name":"Client Side Programming",
        "learn":"ES6/DOM",
        "score":"91",
        "links":`<a href="/">Portfolios</a>`
    },
    {
        "type":"Front End",
        "name":"Website Development",
        "learn":"HTML5/CSS3",
        "score":"96",
        "links":`<a href="/">Portfolios</a>`
    },
    {
        "type":"Fundamental",
        "name":"Introduction to Networking and Security",
        "learn":"Network Protocols/Network Layer",
        "score":"89",
        "links":`<a href="/">Demos</a>`
    },
    {
        "type":"Fundamental",
        "name":"Introduction to Windows Administration",
        "learn":"Windows10",
        "score":"85",
        "links":`<a href="/">Demos</a>`
    },
    {
        "type":"Fundamental",
        "name":"Introduction to Object Oriented Programming",
        "learn":"Java/Swing",
        "score":"95",
        "links":`<a href="/">Demos</a>`
    },
    {
        "type":"Fundamental",
        "name":"Introduction to Systems Analysis and Design",
        "learn":"Use Cases/UML Diagrams/Domain Diagrams",
        "score":"88",
        "links":`<a href="/">Demos</a>`
    },
    {
        "type":"Fundamental",
        "name":"Project Management",
        "learn":"Documentation/Agile/Waterfall",
        "score":"86",
        "links":`<a href="/">Demos</a>`
    },
    ]

uiduck.setData(data, false);
////end////