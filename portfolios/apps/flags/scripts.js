"use strict";

//Read from JSON file and put all the country names into drop-down list.
function DisplayCountryData()
{  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
            localStorage.ns = this.responseText;
            var chooseCountry = document.getElementById("countryName");
            var eachCountry = "";
            //Create first list "Choose One", which is not from JSON file.
            eachCountry += "<option>Choose One</option>";           
            var myObjArray = JSON.parse(this.responseText);
            for(var i = 0; i < myObjArray.length; i++)
            {
                eachCountry += `<option value="${myObjArray[i].Name}">${myObjArray[i].Name}</option>`;              
            }
            chooseCountry.innerHTML = eachCountry;                    
        }
    };
    xmlhttp.open("GET", "countries.json", true);
    xmlhttp.send();
}


//This function is for click button then open selected country's wiki web page.
function clickButton()
{
    //function() is to get value of country name and put into wiki-link, then open the link.
    document.getElementById("wikiButton").addEventListener("click", function(){
        var selectedCountryValue = document.getElementById("countryName").value;
        //alert(selectedCountryValue);
        window.open(`https://en.wikipedia.org/wiki/${selectedCountryValue}`,"_blank");
    }); 
}
clickButton();


// This function is to display country name and flag.
function DisplayNameAndFlag(inCountryName)
{
    var country = document.getElementById("country");
    country.innerHTML= inCountryName;  

    var flag = document.getElementById("flag");
    var replaceInCountryName = inCountryName.replace(/ /g, "_");
    //flag.src=`./flags/${inCountryName}.png`;
    flag.src= `flags\\${replaceInCountryName}.png`;
}


// This function is to display populaction data when user selected a certain country.
function DisplayPopulationData(selectedCountry)
{   
    var selectedCountry;
    var populationsID = document.getElementById("populations");
    var objArray= JSON.parse(localStorage.ns);
    var populactionValue;
    for (var i = 0; i < objArray.length; i++)
    {        
        if(selectedCountry === objArray[i].Name)
        {           
            populactionValue = parseFloat(objArray[i].Population);
            break; 
        }
    }
    populationsID.value = populactionValue;
}


// This function is to display area in mile as default.
function DisplayAreaInMile(selectedCountry)   
{ 
    var areaID = document.getElementById("areaInOutput");
    var objArray= JSON.parse(localStorage.ns);
    var areaMileValue;
    for (var i = 0; i < objArray.length; i++)
    {
        if(selectedCountry === objArray[i].Name)
        {
            areaMileValue = parseFloat(objArray[i].Area);
            break;
        }
    }
    areaID.value = areaMileValue;
    return areaMileValue;
}


// This function is to conver mile to KM and return a float
function CalculateAreaInKM(countryAreaInMiles) 
{
    var areaID = document.getElementById("areaInOutput");
    var convertToKM = parseFloat(countryAreaInMiles / 0.3861).toFixed(3);
    areaID.value = convertToKM;
    return convertToKM;
}

// This function is to trigger mile function or KM function depends on user different option.
document.getElementById("areaIn").addEventListener("change", function () {
    var selectBox = document.getElementById("countryName");
    if(document.getElementById("optionKM").selected)
    {
        CalculateAreaInKM( DisplayAreaInMile(selectBox.options[selectBox.selectedIndex].value) );
    }
    else if(document.getElementById("optionMile").selected)
    {
        DisplayAreaInMile(selectBox.options[selectBox.selectedIndex].value);
    }   
});


// This function is to display population density in Mile.
function DisplayPopulationDensityInMile(selectedCountry)
{
    var desityOutput= document.getElementById("desityOutput")
    var objArray = JSON.parse(localStorage.ns);
    var populationDensity;
    // Calculate population density in mile
    for (var i = 0; i < objArray.length; i++)
    {
        if(selectedCountry === objArray[i].Name)
        {
            populationDensity = parseFloat(objArray[i].Population / objArray[i].Area).toFixed(3);
            break;
        }
    }
    desityOutput.value = populationDensity;
}  

// This function is to trigger DisplayPopulationDensityInMile() when user select mile option
document.getElementById("perMile").addEventListener("click", function () {
    var selectBox = document.getElementById("countryName");
    DisplayPopulationDensityInMile(selectBox.options[selectBox.selectedIndex].value);
});


// This function is to convert population density in KM and display it.
function DisplayPopulationDensityInKM(selectedCountry)
{
    var desityOutput= document.getElementById("desityOutput")
    var objArray = JSON.parse(localStorage.ns);
    var populationDensity;
    // Calculate population density in KM
    for (var j = 0; j< objArray.length; j++)
    {
        if(selectedCountry === objArray[j].Name)
        {
            populationDensity = parseFloat(objArray[j].Population / objArray[j].Area * 0.3861).toFixed(3);
            break;
        }      
    }
    desityOutput.value = populationDensity;
} 

// This function is to trigger DisplayPopulationDensityInKM() when user select KM
document.getElementById("perKM").addEventListener("click", function () {
    var selectBox = document.getElementById("countryName");
    DisplayPopulationDensityInKM(selectBox.options[selectBox.selectedIndex].value);
});


// This function is to calculate total world population
function CalculateTotalWorldPopulation() //Returns a float
{
    var objArray = JSON.parse(localStorage.ns);
    var totalPopulation = 0;
    for(var i = 0; i < objArray.length; i++)
    {
        totalPopulation += parseFloat(objArray[i].Population);
    }
    return totalPopulation;
}


// This function is to calculate percentage of word population and display it.
function DisplayPercentageofWordPopulation(selectedCountry)
{
    var percentagePopulation = document.getElementById("percentagePopulation");
    var percentageofWordPopulation = 0;
    var objArray = JSON.parse(localStorage.ns);
    // Calculate percentage of word population
    for(var k = 0; k < objArray.length; k++)
    {
        if(selectedCountry === objArray[k].Name)
        {
            percentageofWordPopulation = parseFloat((objArray[k].Population / CalculateTotalWorldPopulation()) * 100).toFixed(3);
            break;
        }      
    }
    percentagePopulation.value = `${percentageofWordPopulation} %`;
}


// When user choose/change the drop down list, trigger functions.
var selected = document.getElementById("countryName");
selected.addEventListener("change", function (){
    DisplayNameAndFlag(selected.value);
    DisplayPopulationData(selected.value);
    DisplayAreaInMile(selected.value);
    DisplayPopulationDensityInMile(selected.value);
    DisplayPercentageofWordPopulation(selected.value); 
});
