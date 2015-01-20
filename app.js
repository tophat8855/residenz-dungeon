console.log("Working");

var style_dungeon =[
  {
    "elementType": "labels",
    "stylers": [
    { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "stylers": [
    { "hue": "#ffc300" },
    { "lightness": -30 },
    { "color": "#a79e80" },
    { "weight": 2.3 },
    { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
    { "hue": "#00ff11" },
    { "saturation": 100 },
    { "color": "#a5cc80" }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
    { "color": "#80b780" }
    ]
  },{
    "featureType": "water",
    "stylers": [
    { "color": "#4d80ce" }
    ]
  },{
    "featureType": "poi.school",
    "stylers": [
    { "color": "#808080" }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
    { "color": "#beb280" }
    ]
  }
];

var styled_dungeon = new google.maps.StyledMapType(style_dungeon, {name: "Map style"});

var dungeonMapCenter = new google.maps.LatLng(49.791563, 9.941251);
var dungeonMapZoom = 17;
var dungeonMapZoomMax = 19;
var dungeonMapZoomMin = 12;

var dungeonMapOptions = {
  center: dungeonMapCenter,
  zoom: dungeonMapZoom,
  mapTypeId: google.maps.MapTypeId.ROAD,
  maxZoom: dungeonMapZoomMax,
  minZoom: dungeonMapZoomMin,
  panControl: false,
  mapTypeControl:false,
  mapTypeControlOptions: {
    mapTypeIds: ['map_styles_dungeon']
  }
};

var dungeonMap;
var pop_up_info = "border: 0px solid black; background-color: #ffffff; padding:15px; margin-top: 8px; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; box-shadow: 1px 1px #888;";

google.maps.event.addDomListener(window, 'load', loadDungeonMap);

var hexagonalOverlay = new google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
    return 'workingtiles/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
  },
  tileSize: new google.maps.Size(256,256)
});

function loadDungeonMap() {
  dungeonMap = new google.maps.Map(document.getElementById("dungeon-map"), dungeonMapOptions);
  dungeonMap.mapTypes.set('map_styles_dungeon', styled_dungeon);
  dungeonMap.setMapTypeId('map_styles_dungeon');
  dungeonMap.overlayMapTypes.insertAt(0, hexagonalOverlay);
  loadEncounters();
}

function loadEncounters() {
  var owlbear = new Marker('Owlbear', 49.791683, 9.940143, 'icon_owlbear.png', 'owlbear.png', 105);
  var pub = new Marker('Pub', 49.790951, 9.942430, 'icon_pub.png', 'pub.png', 109);
  var dungeon = new Marker('Dungeon', 49.792657, 9.939437, 'icon_dungeon.png', 'entrance.png', 102);


  google.maps.event.addListener(dungeonMap, "zoom_changed", function() {
    var newZoom = dungeonMap.getZoom();
    if (newZoom > 12) {
      dungeonMap.setMapTypeId('map_styles_dungeon_zoomed');
    } else {
      dungeonMap.setMapTypeId('map_styles_dungeon');
    }
  });
}
