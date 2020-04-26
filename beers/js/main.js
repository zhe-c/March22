function custom_close() {
    if(confirm(`You should come back when you 21 or older.\nClick OK to close this page`)) {
       window.opener=null;
       window.open('','_self');
       window.close();
    }
    else {
    }
 }

(function() {
    var mymap = L.map('mapid').setView([33, -90], 4.4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    navigator.geolocation.watchPosition(function(pos){
        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;
        L.marker([latitude, longitude]).addTo(mymap).bindPopup('This is where you are');
    });

    var beerIcon = L.icon({
        iconUrl: '../beers/pics/beerIcon.png',
        iconSize:     [30, 30], 
        popupAnchor:  [-3, -76]
    });

    function getState() {
        fetch ('../beers/json/states_titlecase.json')
        .then (function(response){
            return response.json();
        })
        .then (function (json){
            var chooseState = document.getElementById("stateName");
            var eachState = "";
            eachState += `<option value="0" selected>---------------------Choose State---------------------</option>`;

            var nameArr = json.map(function(value) {
                return value.name;
            })
            for(var i=0; i<nameArr.length; i++) {
                eachState += `<option value="${nameArr[i]}">${nameArr[i]}</option>`;
            }
            chooseState.innerHTML = eachState;   
        })
    }
    getState();

    function clickButtonGO1() {
        var layerGroup1 = L.layerGroup().addTo(mymap);

        $("#buttonGo1").click(function() {
            
            var stateValue = document.getElementById("stateName").value;
            var cityValue = document.getElementById("cityInput").value;
            var tpyeValue = document.getElementById("typeList1").value;

            if(stateValue != "0")
            {
                //console.log("state no empty,fetch(state)");
                fetch (`https://api.openbrewerydb.org/breweries?by_state=${stateValue}`)
                .then (function(response){
                    return response.json();
                })
                .then (function (json){
                    if(json.length ==0)
                    {
                        alert("No result match, or wrong input");
                    }
                    else{
                        //console.log(json);
                        if(cityValue == "")
                        {
                            if(tpyeValue == "0")
                            {
                                // console.log("this is the 0 place:stateValue!=0,cityValue==null, tpyeValue==0");
                                // console.log(json);
                                json.forEach(function(value){
                                    if(value.latitude != null && value.longitude != null){
                                        return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup1)
                                        .bindPopup(`Name: ${value.name}<br/>
                                                    Type: ${value.brewery_type}<br/>
                                                    Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                                    Phone: ${value.phone}<br/>
                                                    Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                                    }
                                });                             
                            }
                            else if(tpyeValue != "0")
                            {
                                var newarr1 = json.filter(function(value){
                                    return value.brewery_type = tpyeValue;
                                })
                                if(newarr1.length ==0)
                                {
                                    alert("No result match, or wrong input");
                                }
                                else{
                                    // console.log("this is the 1 place:tpyeValue !=0,cityValue ==0,stateValue !=0");
                                    // console.log(newarr1);
                                    newarr1.forEach(function(value){
                                        if(value.latitude != null && value.longitude != null){
                                            return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup1)
                                            .bindPopup(`Name: ${value.name}<br/>
                                                        Type: ${value.brewery_type}<br/>
                                                        Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                                        Phone: ${value.phone}<br/>
                                                        Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                                        }
                                    }); 
                                }
                            }
                        }
                        else if(cityValue != "")
                        {
                            if(tpyeValue == "0")
                            {                              
                                var newarr2 = json.filter(function(value){
                                    return value.city.match(new RegExp(cityValue, "g")); 
                                });
                                if(newarr2.length ==0)
                                {
                                    alert("No result match, or wrong input");
                                }
                                else
                                {
                                    // console.log("this is the 2 place:tpyeValue =0,cityValue !=0,stateValue !=0");
                                    // console.log(newarr2);
                                    newarr2.forEach(function(value){
                                        if(value.latitude != null && value.longitude != null){
                                            return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup1)
                                            .bindPopup(`Name: ${value.name}<br/>
                                                        Type: ${value.brewery_type}<br/>
                                                        Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                                        Phone: ${value.phone}<br/>
                                                        Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                                        }
                                    }); 
                                }
                            }
                            else if(tpyeValue != "0")
                            {
                                var newarr3 = json.filter(function(value){
                                    return value.city.match(new RegExp(cityValue, "g")); 
                                }).filter(function(value){
                                    return value.brewery_type = tpyeValue;
                                });
                                if(newarr3.length ==0)
                                {
                                    alert("No result match, or wrong input");
                                }
                                else
                                {
                                    // console.log("this is the 3 place:tpyeValue !=0,cityValue !=0,stateValue !=0");
                                    // console.log(newarr3);
                                    newarr3.forEach(function(value){
                                        if(value.latitude != null && value.longitude != null){
                                            return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup1)
                                            .bindPopup(`Name: ${value.name}<br/>
                                                        Type: ${value.brewery_type}<br/>
                                                        Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                                        Phone: ${value.phone}<br/>
                                                        Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                                        }
                                    }); 
                                } 
                            }
                        }
                    }
                })
            }
            else if(cityValue != "" && stateValue == "0")
            {
                //console.log("stste empty,city no empty, fetch(city)");
                fetch (`https://api.openbrewerydb.org/breweries?by_city=${cityValue}`)
                .then (function(response){
                    return response.json();
                })
                .then (function (json){
                    if(json.length ==0)
                    {
                        alert("No result match, or wrong input");
                    }
                    else{
                        //console.log(json);
                        if(tpyeValue == "0")
                        {                              
                            var newarr4 = json.filter(function(value){
                                return value.city.match(new RegExp(cityValue, "g")); 
                            });
                            if(newarr4.length ==0)
                            {
                                alert("No result match, or wrong input");
                            }
                            else
                            {
                                // console.log("this is the 4 place:tpyeValue =0,cityValue !=0,stateValue=0");
                                // console.log(newarr4);
                                newarr4.forEach(function(value){
                                    if(value.latitude != null && value.longitude != null){
                                        return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup1)
                                        .bindPopup(`Name: ${value.name}<br/>
                                                    Type: ${value.brewery_type}<br/>
                                                    Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                                    Phone: ${value.phone}<br/>
                                                    Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                                    }
                                }); 
                            }
                        }
                        else if(tpyeValue != "0")
                        {
                            var newarr5 = json.filter(function(value){
                                return value.city.match(new RegExp(cityValue, "g")); 
                            }).filter(function(value){
                                return value.brewery_type = tpyeValue;
                            });
                            if(newarr5.length ==0)
                            {
                                alert("No result match, or wrong input");
                            }
                            else
                            {
                                // console.log("this is the 5 place:tpyeValue !=0,cityValue !=0,stateValue=0");
                                // console.log(newarr5);
                                newarr5.forEach(function(value){
                                    if(value.latitude != null && value.longitude != null){
                                        return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup1)
                                        .bindPopup(`Name: ${value.name}<br/>
                                                    Type: ${value.brewery_type}<br/>
                                                    Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                                    Phone: ${value.phone}<br/>
                                                    Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                                    }
                                }); 
                            } 
                        }
                    }
                })
            }
            else if(cityValue == "" && stateValue == "0" && tpyeValue != "0")
            {
                //console.log("city empty, state empty, type no empty,fetch(type)");
                fetch (`https://api.openbrewerydb.org/breweries?by_type=${tpyeValue}`)
                .then (function(response){
                    return response.json();
                })
                .then (function (json){
                    if(json.length ==0)
                    {
                        alert("No result match, or wrong input");
                    }
                    else{
                        // console.log("this is the 6 place:tpyeValue !=0,cityValue=0,stateValue=0");
                        // console.log(json);
                        json.forEach(function(value){
                            if(value.latitude != null && value.longitude != null){
                                return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup1)
                                .bindPopup(`Name: ${value.name}<br/>
                                            Type: ${value.brewery_type}<br/>
                                            Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                            Phone: ${value.phone}<br/>
                                            Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                            }
                        }); 
                    }
                })
            }
            else if(cityValue == "" && stateValue == "0" && tpyeValue == "0")
            {
                alert("You should choose at least one condition!");
            }
        });
        $("#buttonReset1").click(function(){
            layerGroup1.clearLayers();
        });
        $("#buttonGo1").click(function(){
            layerGroup1.clearLayers();
        });
    };
    clickButtonGO1();

    function clickButtonGO2() {
        var layerGroup2 = L.layerGroup().addTo(mymap);

        $("#buttonGo2").click(function() {
            var postalValue = document.getElementById("postalInput").value;
            var tpyeValue = document.getElementById("typeList2").value;
            if(postalValue != "")
            {
                //console.log("post no empty, fetch(postal)");
                fetch (`https://api.openbrewerydb.org/breweries?by_postal=${postalValue}`)
                .then (function(response){
                    return response.json();
                })
                .then (function (json){
                    if(json.length ==0)
                    {
                        alert("No result match, or wrong input");
                    }
                    else{
                        //console.log(json);
                        if(tpyeValue == "0")
                        {                              
                            var newarr6 = json.filter(function(value){
                                return value.postal_code.match(new RegExp(postalValue, "g")); 
                            });
                            if(newarr6.length ==0)
                            {
                                alert("No result match, or wrong input");
                            }
                            else
                            {
                                // console.log("this is the 7 place:tpyeValue ==0,postalValue !=0");
                                // console.log(newarr6);
                                newarr6.forEach(function(value){
                                    if(value.latitude != null && value.longitude != null){
                                        return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup2)
                                        .bindPopup(`Name: ${value.name}<br/>
                                                    Type: ${value.brewery_type}<br/>
                                                    Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                                    Phone: ${value.phone}<br/>
                                                    Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                                    }
                                }); 
                            }
                        }
                        else if(tpyeValue != "0")
                        {
                            var newarr7 = json.filter(function(value){
                                return value.postal_code.match(new RegExp(postalValue, "g")); 
                            }).filter(function(value){
                                return value.brewery_type = tpyeValue;
                            });
                            if(newarr7.length ==0)
                            {
                                alert("No result match, or wrong input");
                            }
                            else
                            {
                                // console.log("this is the 8 place:tpyeValue !=0,postalValue !=0");
                                // console.log(newarr7);
                                newarr7.forEach(function(value){
                                    if(value.latitude != null && value.longitude != null){
                                        return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup2)
                                        .bindPopup(`Name: ${value.name}<br/>
                                                    Type: ${value.brewery_type}<br/>
                                                    Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                                    Phone: ${value.phone}<br/>
                                                    Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                                    }
                                }); 
                            } 
                        }
                    }
                })
            }
            else if (postalValue == "" && tpyeValue != "0")
            {
                //console.log("post empty, tpye no empty, fetch(type)");
                fetch (`https://api.openbrewerydb.org/breweries?by_type=${tpyeValue}`)
                .then (function(response){
                    return response.json();
                })
                .then (function (json){
                    if(json.length ==0)
                    {
                        alert("No result match, or wrong input");
                    }
                    else{
                        // console.log("this is the 9 place:postalValue ==0 && tpyeValue !=0 ");
                        // console.log(json);
                        json.forEach(function(value){
                            if(value.latitude != null && value.longitude != null){
                                return L.marker([value.latitude, value.longitude], {icon: beerIcon}).addTo(mymap).addTo(layerGroup2)
                                .bindPopup(`Name: ${value.name}<br/>
                                            Type: ${value.brewery_type}<br/>
                                            Address: ${value.street}, ${value.city}, ${value.state}<br/>Postal Code: ${value.postal_code}<br/>
                                            Phone: ${value.phone}<br/>
                                            Website: <a href="${value.website_url}" target="_BLANK">Click to visit</a>`);
                            }
                        }); 
                    }
                })
            }
            else if(postalValue == "" && tpyeValue == "0")
            {
                alert("You should choose at least one condition!");
            }
        });
        $("#buttonReset2").click(function(){
            layerGroup2.clearLayers();
        });
        
        $("#buttonGo2").click(function(){
            layerGroup2.clearLayers();
        });

    };
    clickButtonGO2();

    $("#lucky1").click(function(){
        alert("I know what you should do...");
    });

    $("#lucky2").click(function(){
        alert("I know where you should go...");
    });

    $("#stayHome").mouseover(function(){
        alert("So Stay the Blazes Home!");
    });

})();








