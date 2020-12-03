(function() 
{
    //Souldn't change index.html,but "script" is before table tags, so use window.onload = function(){}.
    window.onload = function()
    {
        var theGameDiv = document.getElementById('theGame');
        var newHtml = "";
        var addin = "";
        var tdCanClick = true;
       
        fetch('https://www.mikecaines.com/3inarow/sample.json')
        //fetch('https://www.mikecaines.com/3inarow/puzzle.php')
        .then(function(response)
        {
            return response.json();
        })
        .then(function(json)
        {          
            for(var i=0; i<json.rows.length; i++)
            {
                newHtml += "<tr>";
                for(var j=0; j<json.rows[i].length; j++)
                { 
                    if(json.rows[i][j].currentState === 0)
                    {
                        newHtml += `<td class="eachTD" id="rnc${i}${j}" style="background-color:#95918C" onselectstart="" οnselect=""></td>`
                    }
                    else if(json.rows[i][j].currentState === 1)
                    {
                        newHtml += `<td class="eachTD" id="rnc${i}${j}" style="background-color:#1A4876" onselectstart="" οnselect=""></td>`
                    }	
                    else if(json.rows[i][j].currentState === 2)
                    {
                        newHtml += `<td  class="eachTD"  id="rnc${i}${j}"  style="background-color:#FFFFFF" onselectstart="" οnselect=""></td>`
                    }
                }
                newHtml += "</tr>";  
            }
            var fullNewHtml = "<table>"+newHtml+"</table>" 
            +`<button type="button" id="check">Check</button>` + `<span id ="checkResult"></span>` +"<br>" + "<br>"
            +`<label><input type="checkbox" id="showincorrect">Show incorrect squares</label>` +"<br>" +"<br>"
            +`<button type="button" id="answer">Show Answer</button>` ;
            theGameDiv.innerHTML = fullNewHtml;

            for(var m = 0; m < json.rows.length; m++)
            {
                for(var n = 0; n < json.rows[m].length; n++)
                {
                    (function(m,n) 
                    {
                        document.getElementById(`rnc${m}${n}`).addEventListener("click",function(e)
                        {
                            if(tdCanClick) 
                            {
                                //console.log(e)
                                if(json.rows[m][n].canToggle === true && json.rows[m][n].currentState ===0)
                                {
                                    json.rows[m][n].currentState = 1;
                                    e.target.style.backgroundColor = "#1A4876";
                                }
                                else if(json.rows[m][n].canToggle === true && json.rows[m][n].currentState ===1)
                                {                         
                                    json.rows[m][n].currentState = 2;
                                    e.target.style.backgroundColor = "#FFFFFF";                     
                                }
                                else if(json.rows[m][n].canToggle === true && json.rows[m][n].currentState ===2)
                                {
                                    json.rows[m][n].currentState = 0;
                                    e.target.style.backgroundColor = "#95918C"; 
                                }
                            }  
                        },false);
                    })(m,n);
                }
            }

            var checkresult = document.getElementById('checkResult');
            var checkButton = document.getElementById('check');
            checkButton.addEventListener("click", function()
            {
                var arr = [];
                json.rows.map(function(value)
                {
                    return value.map(function(v)
                    {
                        if(v.canToggle === true && v.currentState !=0 && v.currentState != v.correctState)
                        {
                            arr.push("aaa"); //you clicked,but this one is  wrong
                        }
                        else if(v.canToggle === true && v.currentState !=0 && v.currentState === v.correctState)
                        {
                            arr.push("bbb");  //you clicked, and this one is right
                        }
                        else if(v.canToggle === true && v.currentState === 0)
                        {
                            arr.push("ccc"); //never clicked
                        }
                        else{
                            arr.push("ddd");  //default
                        }
                    });  
                });
                console.log(arr);
                
                //i.	“So far so good”       (NO aaa && HAVE bbb && HAVE ccc), 
                //ii.	“Something is wrong”   (HAVE aaa), COULD HAVE bbb, COULD HAVE ccc
                //iii.	“You did it!!”         (HAVE bbb && NO ccc && NO aaa)  
                if(!(arr.includes("aaa")) && arr.includes("bbb") && arr.includes("ccc"))
                {
                    addin = "So far so good";
                }
                else if(arr.includes("aaa"))
                {
                    addin = "Something is wrong";
                }
                else if(arr.includes("bbb") && !(arr.includes("ccc")) && !(arr.includes("aaa")))
                {
                    addin = "You did it!!"
                }
                else{
                    addin = "So far so good";
                }
                checkresult.innerHTML = addin;
            },false);

            var showIncorrectCheckbox = document.getElementById('showincorrect');
            showIncorrectCheckbox.addEventListener("click", function(e)
            {
                //console.log(e);
                if(e.target.checked === true)
                {
                    for(var i = 0; i < json.rows.length; i++)
                    {
                        for(var j = 0; j < json.rows[i].length; j++)
                        {
                            (function(i,j) 
                            {
                                if(json.rows[i][j].canToggle === true && json.rows[i][j].currentState !=0 && json.rows[i][j].currentState != json.rows[i][j].correctState)
                                {
                                    document.getElementById(`rnc${i}${j}`).innerText = "X";
                                    document.getElementById(`rnc${i}${j}`).align = "center";
                                }
                            })(i,j);
                        }
                    }
                }
                else if(e.target.checked === false)
                {
                    for(var i = 0;i<json.rows.length; i++)
                    {
                        for(var j = 0;j<json.rows[i].length; j++)
                        {
                            (function(i,j)
                            {
                                document.getElementById(`rnc${i}${j}`).innerText = "";
                            })(i,j);
                        }
                    }
                }
            },false);

            var answerButton = document.getElementById('answer');
            answerButton.addEventListener("click", function()
            {
                if(window.confirm('Are you sure you want to see the answer?'))
                {
                    for(var i = 0;i<json.rows.length; i++)
                    {
                        for(var j = 0;j<json.rows[i].length; j++)
                        {
                            (function(i,j){
                                var ele = document.getElementById(`rnc${i}${j}`);

                                if(json.rows[i][j].correctState ===1)
                                {
                                    ele.style.backgroundColor = "#1A4876";
                                }
                                else if(json.rows[i][j].correctState === 2)
                                {
                                    ele.style.backgroundColor = "#FFFFFF";
                                }
                            })(i,j);
                        }
                    } 

                    document.getElementById('showincorrect').disabled=true;
                    document.getElementById('check').disabled=true;
                    tdCanClick = false;

                    return true;
                }
                else 
                {
                    return false;
                }
            });
        });
    };
})();





//what i learned

//window.event.stopPropagation();

//another way to line 45
            // for(var m = 0; m < json.rows.length; m++)
            // {
            //     for(var n = 0; n < json.rows[m].length; n++)
            //     {
            //         var element = document.getElementById(`rnc${m}${n}`);
            //         //console.log(json.rows[m][n].currentState);
            //         element.addEventListener("click", function(e){                      
            //             if(json.rows[e.target.id[3]][e.target.id[4]].canToggle === true && json.rows[e.target.id[3]][e.target.id[4]].currentState ===0)
            //             {
            //                 json.rows[e.target.id[3]][e.target.id[4]].currentState = 1;
            //                 e.target.style.backgroundColor = "#1A4876";
            //             }
            //             else if(json.rows[e.target.id[3]][e.target.id[4]].canToggle === true && json.rows[e.target.id[3]][e.target.id[4]].currentState ===1)
            //             {                         
            //                     json.rows[e.target.id[3]][e.target.id[4]].currentState = 2;
            //                     e.target.style.backgroundColor = "#FFFFFF";                     
            //             }
            //             else if(json.rows[e.target.id[3]][e.target.id[4]].canToggle === true && json.rows[e.target.id[3]][e.target.id[4]].currentState ===2)
            //             {
            //                     json.rows[e.target.id[3]][e.target.id[4]].currentState = 0;
            //                     e.target.style.backgroundColor = "#95918C"; 
            //             }
            //         },false);
            //     }
            // } 