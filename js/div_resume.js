
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
            width:"30%",
        }, {
            key: "learn",
            title: "Skills/Knowledge",
            width:"29%",
        }, {
            key: "score",
            title: "Final Score",
            width:"10%",
        }, {
            key: "links",
            title: "Outcome Links",
            width:"20%",
        } ]
});

var data = [{
        "type":"Fundamental",
        "name":"Introduction to Networking and Security",
        "learn":"Network Protocols, Network Layer",
        "score":"89",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Fundamental",
        "name":"Introduction to Windows Administration",
        "learn":"Windows10",
        "score":"85",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Fundamental",
        "name":"Introduction to Object Oriented Programming",
        "learn":"Java/Swing",
        "score":"95",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Fundamental",
        "name":"Introduction to Systems Analysis and Design",
        "learn":"Use Cases/UML Diagrams/Domain Diagrams",
        "score":"88",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Fundamental",
        "name":"Project Management",
        "learn":"bbb",
        "score":"Ing",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Front End",
        "name":"User Interface Design and Development",
        "learn":"Photoshop",
        "score":"94",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Front End",
        "name":"Web Design Fundamentals",
        "learn":"bbb",
        "score":"Ing",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Front End",
        "name":"Logic and Programming I",
        "learn":"JavaScript",
        "score":"94",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Front End",
        "name":"Client Side Programming",
        "learn":"ES6, DOM",
        "score":"91",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Front End",
        "name":"Website Development",
        "learn":"HTML5, CSS3",
        "score":"96",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Front End",
        "name":"Web Application Programming II",
        "learn":"bbb",
        "score":"??",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Front End",
        "name":"Developing for Content Management Systems",
        "learn":"bbb",
        "score":"??",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Back End",
        "name":"Data Fundamentals",
        "learn":"MySQL",
        "score":"96",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Back End",
        "name":"Operating Systems - Linux",
        "learn":"Ubuntu, Mint",
        "score":"100",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Back End",
        "name":"Web Server Fundamentals",
        "learn":"Apache/Windows IIS",
        "score":"100",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Full Stack",
        "name":"Full Stack Programming",
        "learn":"MongoDB, Express, React, NodeJS",
        "score":"Ing",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Full Stack",
        "name":"Special Topics I",
        "learn":"Electron",
        "score":"Ing",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    },
    {
        "type":"Full Stack",
        "name":"Web Application Programming I",
        "learn":"PHP, Laravel",
        "score":"Ing",
        "links":`<a href="http://www.w3school.com.cn">W3School</a>`
    }]

uiduck.setData(data, false);
////end////