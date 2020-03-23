(function(){
	document.onkeydown=function (e){
		var currKey=0,evt=e||window.event;
		currKey=evt.keyCode||evt.which||evt.charCode;
		if (currKey == 123) {
			window.event.cancelBubble = true;
			window.event.returnValue = false;
		}
	}
	
    //create map in leaflet and tie it to the div called 'theMap'
    var map = L.map('theMap').setView([42, -60], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    L.marker([44.66966767715829, -63.61473441123962]).addTo(map)
        .bindPopup('This is where you are')
        .openPopup();   

    var flyIcon = L.icon({
        iconUrl: 'plane2.png',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    });

    var geo;
   
    function fetchLoop()
    {
        //var newArr = [];
        fetch('https://opensky-network.org/api/states/all')
        .then(function(response)
        {
            return response.json();
        })
        .then(function(json)
        {
            var newArr = json.states.filter(function(value)
            {   
                //return (value[2] ==="Canada" || value[2] ==="United States");
                return (value[2] ==="Canada" && value[5] != null && value[6] != null);
            }).map(function(value){
                    return {
                        "type": "Feature",
                        "properties": {"rotationAngle": value[10], 
                                       "bindPopup": `Origin Country: ${value[2]};<br/> Callsign: ${value[1]};<br/> 
                                                     Velocity: ${value[9]}m/s;<br/> On ground: ${value[8]};`},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [value[5], value[6]]
                        }} 
            })
            
            var geojson = {
                "type": "FeatureCollection",
                "features": newArr};
            console.log(geojson);

            if(geo) {
                geo.clearLayers();
            }

            geo = L.geoJSON(geojson, {  
                pointToLayer:function(feature, layer) {
                    return L.marker(layer, {
                        rotationAngle: feature.properties.rotationAngle,
                        icon: flyIcon,
                    });
                },
                onEachFeature:function(feature, layer) {
                    return layer.bindPopup(feature.properties.bindPopup);
                }
            }).addTo(map);
            
            setTimeout(fetchLoop(),7000);
        })       
    }
    fetchLoop();
})()











//newArr.map(function(value){
    // return L.marker([value[6], value[5]], {icon: flyIcon}).addTo(map).bindPopup(`Origin Country: ${value[2]};\n 
    //                                                                             Callsign: ${value[1]};\n 
    //                                                                             Velocity: ${value[9]}m/s;\n 
    //                                                                             On ground: ${value[8]};`);