$(function(){
    $('#searchButton').on("click", function(){
        $('header').css("display","none");
    });
    $('#closeModal').on("click", function(){
        $('header').css("display","block");
    });
});


/* 保存初始测试文本内容 */
var oldStr=$("#skillSearch").html();
/* 测试按钮点击 */
$("#replace").click(function () {
    var val=$("#replaceVal").val();
    if(!val){
        // alert('请输入需要高亮的内容');
        return;
    }  
    /* 插件调用，返回 添加高亮效果 的字符串 */
    var newStr=$.highlight(oldStr,{
        color:'#ea0000',// 高度颜色，默认:#f00
        weight:true,    // 是否加粗，默认:不加粗
        keys:val        //需要高亮的值，必须的
    });
    $("#skillSearch").html(newStr);
});
/* 执行测试按钮点击事件 */
$("#replace").click();

//extend jQuery by writing my own function	
$.extend({
    highlight:function (str,params) {
        var reg=new RegExp(("("+params.keys+")"),"gm");
        var color=params.color || '#f00';
        var weight=params.weight ? 'bold':'normal';
        var replace='<span style="color:'+color+';font-weight: '+weight+';">$1</span>';
        return str.replace(reg,replace);
    }
});
