/* ////////////////////////////// MAP LA TANIA ///////////////////////////////////// */

var platform = new H.service.Platform({
    apikey: 'api key'
});
var defaultLayers = platform.createDefaultLayers();

//map center La Tania
var map = new H.Map(document.getElementById('mapTania'),
    defaultLayers.vector.normal.map, {
        center: {
            lat: 45.97556318504053, 
            lng: 6.662779505883311
        },
        zoom: 8,
        pixelRatio: window.devicePixelRatio || 1
    }
);

window.addEventListener('resize', () => map.getViewPort().resize());
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);

// add markers to the map
function addMarkersToMapTania(map) {
    var icon = new H.map.Icon('media/ski_icon.svg');
    var icon_orange = new H.map.Icon('media/ski_icon_orange.svg');

    // tignes in blue
    var tignes = new H.map.Marker({
        lat: 45.472957126678274, 
        lng: 6.90704332608275},
        {icon: icon
    });
    map.addObject(tignes);
    
    // Morzine in blue
    var morzine = new H.map.Marker({
        lat: 46.17983642691084, 
            lng: 6.708334682303176},
        {icon: icon
    });
    map.addObject(morzine);

    // La Tania in orange
    var laTania = new H.map.Marker({
        lat: 45.43242238266784,
        lng: 6.595031579471021},
        {icon: icon_orange
    });
    map.addObject(laTania);
}

/* function called when page loads */
window.onload = function () {
    addMarkersToMapTania(map);
};



