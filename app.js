console.log("Working");

var dungeonMapCenter = new google.maps.LatLng(49.791884, 9.940035);
var dungeonMapZoom = 17;
var dungeonMapZoomMax = 20;
var dungeonMapZoomMin = 14;

var dungeonMapOptions = {
  center: dungeonMapCenter,
  zoom: dungeonMapZoom,
  mapTypeId: google.maps.MapTypeId.HYBRID,
  maxZoom: dungeonMapZoomMax,
  minZoom: dungeonMapZoomMin,
  panControl: false,
  mapTypeControl:false,
};

var dungeonMap;
var pop_up_info = "border: 0px solid black; background-color: #ffffff; padding:15px; margin-top: 8px; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; box-shadow: 1px 1px #888;";

google.maps.event.addDomListener(window, 'load', loadDungeonMap);

function loadDungeonMap() {
  dungeonMap = new google.maps.Map(document.getElementById("dungeon-map"), dungeonMapOptions);
  loadEncounters();
};

function loadEncounters() {
  loadOwlbear();
  loadPub();

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
    boxTextOwlbear.innerHTML = '<span class="pop_up_box_text"><img src="images/owlbear.png" width="300" height="194" border="0" /></span>';

    var infoboxOptionsOwlbear = {
      content: boxTextOwlbear,
      disableAutoPan: false,
      maxWidth: 0,
      pixelOffset: new google.maps.Size(-241, 0),
      zIndex:null,
      boxStyle:{
        background: "url('infobox/pop_up_box_top_arrow.png') no-repeat",
        opacity: 1,
        width: "320px"
      },
      closeBoxMargin: "10px 2px 2px 2px",
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
  };

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
    boxTextPub.innerHTML = '<span class="pop_up_box_text"><img src="images/pub.png" width="128" height="128" border="0" /></span>';

    var infoboxOptionsPub = {
      content: boxTextPub,
      disableAutoPan: false,
      maxWidth: 0,
      pixelOffset: new google.maps.Size(-241, 0),
      zIndex:null,
      boxStyle:{
        background: "url('infobox/pop_up_box_top_arrow.png') no-repeat",
        opacity: 1,
        width: "320px"
      },
      closeBoxMargin: "10px 2px 2px 2px",
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
  };

  function setZoomWhenEncounterClicked() {
    var currentZoom = dungeonMap.getZoom();
    if (currentZoom < 15) {
      dungeonMap.setZoom(15);
    };
  };

  google.maps.event.addListener(dungeonMap, "zoom_changed", function() {
    var newZoom = dungeonMap.getZoom();
    if (newZoom > 16) {
      dungeonMap.setMapTypeId('map_styles_dungeon_zoomed');
    } else {
      dungeonMap.setMapTypeId('map_styles_dungeon');
    };
  });
};
