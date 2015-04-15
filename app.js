console.log("Working");

var styled_dungeon = new google.maps.StyledMapType(style_dungeon, {name: "Map style"});

var dungeonMap;
var dungeonMapCenter = new google.maps.LatLng(49.791760, 9.940939);
var dungeonMapZoom = 18;
var dungeonMapZoomMax = 19;
var dungeonMapZoomMin = 12;
var pop_up_info = "border: 0px solid black; background-color: #ffffff; padding:0px; margin-top: 2px; border-radius:2px; -moz-border-radius: 2px; -webkit-border-radius: 2px; box-shadow: 1px 1px #888;";


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

var hexagonalOverlay = new google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
    return 'out/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
  },
  tileSize: new google.maps.Size(256,256)
});

google.maps.event.addDomListener(window, 'load', loadDungeonMap);

function loadDungeonMap() {
  dungeonMap = new google.maps.Map(document.getElementById("dungeon-map"), dungeonMapOptions);
  dungeonMap.mapTypes.set('map_styles_dungeon', styled_dungeon);
  dungeonMap.setMapTypeId('map_styles_dungeon');
  dungeonMap.overlayMapTypes.insertAt(0, hexagonalOverlay);
  loadOwlbear();
  loadOwlbear2();
  loadPub();
  loadDungeonEntrance();
}

function loadOwlbear2() {
  var encounterPositionOwlbear = new google.maps.LatLng(49.792090, 9.941892);
  var encounterIconOwlbear = {
    url: 'images/icon_owlbear.png',
    size: new google.maps.Size(16, 16),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(8, 8),
  };

  encounterOwlbear = new google.maps.Marker({
    position: encounterPositionOwlbear,
    map: dungeonMap,
    title: 'Owlbear',
    icon: encounterIconOwlbear,
    zIndex:102,
  });

  var boxTextOwlbear = document.createElement("DIV");
  boxTextOwlbear.style.cssText = pop_up_info;
  boxTextOwlbear.innerHTML = '<span class="pop_up_box_text"><img src="images/owlbear1.png" width="100" height="75" border="0" /></span>';

  var infoboxOptionsOwlbear = {
    content: boxTextOwlbear,
    disableAutoPan: false,
    maxWidth: 0,
    pixelOffset: new google.maps.Size(-50, 0),
    zIndex:null,
    boxStyle:{
      background: "url('infobox/pop_up_box_top_arrow.png') no-repeat",
      opacity: 1,
    },
    closeBoxMargin: "2px 2px 2px 2px",
    closeBoxURL: "images/button_close.png",
    infoBoxClearance: new google.maps.Size(1, 1),
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false
  };

  infoboxOwlbear = new InfoBox(infoboxOptionsOwlbear);

  google.maps.event.addListener(encounterOwlbear, "click", function(e) {
    infoboxOwlbear.open(dungeonMap, this);
    this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    setZoomWhenEncounterClicked();
    dungeonMap.setCenter(encounterOwlbear.getPosition());
  });
}

function loadOwlbear() {
  var encounterPositionOwlbear = new google.maps.LatLng(49.791683, 9.940143);
  var encounterIconOwlbear = {
    url: 'images/icon_owlbear.png',
    size: new google.maps.Size(16, 16),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(8, 8),
  };

  encounterOwlbear = new google.maps.Marker({
    position: encounterPositionOwlbear,
    map: dungeonMap,
    title: 'Owlbear',
    icon: encounterIconOwlbear,
    zIndex:102,
  });

  var boxTextOwlbear = document.createElement("DIV");
  boxTextOwlbear.style.cssText = pop_up_info;
  boxTextOwlbear.innerHTML = '<span class="pop_up_box_text"><img src="images/owlbear.png" width="100" height="75" border="0" /></span>';

  var infoboxOptionsOwlbear = {
    content: boxTextOwlbear,
    disableAutoPan: false,
    maxWidth: 0,
    pixelOffset: new google.maps.Size(-50, 0),
    zIndex:null,
    boxStyle:{
      background: "url('infobox/pop_up_box_top_arrow.png') no-repeat",
      opacity: 1,
    },
    closeBoxMargin: "2px 2px 2px 2px",
    closeBoxURL: "images/button_close.png",
    infoBoxClearance: new google.maps.Size(1, 1),
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false
  };

  infoboxOwlbear = new InfoBox(infoboxOptionsOwlbear);

  google.maps.event.addListener(encounterOwlbear, "click", function(e) {
    infoboxOwlbear.open(dungeonMap, this);
    this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    setZoomWhenEncounterClicked();
    dungeonMap.setCenter(encounterOwlbear.getPosition());
  });
}

function loadPub() {
  var encounterPositionPub = new google.maps.LatLng(49.790951, 9.942430);
  var encounterIconPub = {
    url: 'images/icon_pub.png',
    size: new google.maps.Size(19, 23),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(10, 10),
  };

  encounterPub = new google.maps.Marker({
    position: encounterPositionPub,
    map: dungeonMap,
    title: 'Pub',
    icon: encounterIconPub,
    zIndex:104,
  });

  var boxTextPub = document.createElement("DIV");
  boxTextPub.style.cssText = pop_up_info;
  boxTextPub.innerHTML = '<span class="pop_up_box_text"><img src="images/pub.png" width="100" height="100" border="0" /></span>';

  var infoboxOptionsPub = {
    content: boxTextPub,
    disableAutoPan: false,
    maxWidth: 0,
    pixelOffset: new google.maps.Size(-50, 0),
    zIndex:null,
    boxStyle:{
      background: "url('infobox/pop_up_box_top_arrow.png') no-repeat",
      opacity: 1,
    },
    closeBoxMargin: "2px 2px 2px 2px",
    closeBoxURL: "images/button_close.png",
    infoBoxClearance: new google.maps.Size(1, 1),
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false
  };

  infoboxPub = new InfoBox(infoboxOptionsPub);

  google.maps.event.addListener(encounterPub, "click", function(e) {
    infoboxPub.open(dungeonMap, this);
    this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    setZoomWhenEncounterClicked();
    dungeonMap.setCenter(encounterPub.getPosition());
  });
}

  function loadDungeonEntrance() {
    var encounterPositionDungeon = new google.maps.LatLng(49.792657, 9.939437);
    var encounterIconDungeon = {
      url: 'images/icon_dungeon.png',
      size: new google.maps.Size(32, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(16, 16),
    };

    encounterDungeon = new google.maps.Marker({
      position: encounterPositionDungeon,
      map: dungeonMap,
      title: 'Pub',
      icon: encounterIconDungeon,
      zIndex:100,
    });

    var boxTextDungeon = document.createElement("DIV");
    boxTextDungeon.style.cssText = pop_up_info;
    boxTextDungeon.innerHTML = '<span class="pop_up_box_text">Some stuff I wrote<img src="images/entrance.png" width="64" height="64" border="0" /></span>';

    var infoboxOptionsDungeon = {
      content: boxTextDungeon,
      disableAutoPan: false,
      maxWidth: 0,
      pixelOffset: new google.maps.Size(-50, 0),
      zIndex:null,
      boxStyle:{
        background: "url('infobox/pop_up_box_top_arrow.png') no-repeat",
        opacity: 1,
      },
      closeBoxMargin: "2px 2px 2px 2px",
      closeBoxURL: "images/button_close.png",
      infoBoxClearance: new google.maps.Size(1, 1),
      isHidden: false,
      pane: "floatPane",
      enableEventPropagation: false
    };

    infoboxDungeon = new InfoBox(infoboxOptionsDungeon);

    google.maps.event.addListener(encounterDungeon, "click", function(e) {
      infoboxDungeon.open(dungeonMap, this);
      this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
      setZoomWhenEncounterClicked();
      dungeonMap.setCenter(encounterDungeon.getPosition());
    });

    function setZoomWhenEncounterClicked() {
      var currentZoom = dungeonMap.getZoom();
      if (currentZoom < 15) {
        dungeonMap.setZoom(15);
      }
    }
  }
