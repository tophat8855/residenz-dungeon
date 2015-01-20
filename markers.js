function setZoomWhenEncounterClicked() {
  var currentZoom = dungeonMap.getZoom();
  if (currentZoom < 15) {
    dungeonMap.setZoom(15);
  }
}

var Marker = function (markerTitle, lat, lng, iconImg, bigImg, z) {
  var encounterPosition = new google.maps.LatLng(lat, lng);
  var encounterIcon = {
    url: 'images/' + iconImg,
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 16),
  };

  encounterMarker = new google.maps.Marker({
    position: encounterPosition,
    map: dungeonMap,
    title: markerTitle,
    icon: encounterIcon,
    zIndex: z,
  });

  var boxText = document.createElement("DIV");
  boxText.style.cssText = pop_up_info;
  boxText.innerHTML = '<span class="pop_up_box_text"><img src="images/' + bigImg + '" width="75" height="50" border="0" />I put something here.</span>';

  var infoboxOptions = {
    content: boxText,
    disableAutoPan: false,
    maxWidth: 0,
    pixelOffset: new google.maps.Size(0, 0),
    zIndex:null,
    boxStyle:{
      background: "url('infobox/pop_up_box_top_arrow.png') no-repeat",
      opacity: 1,
      width: "150px"
    },
    closeBoxMargin: "10px 2px 2px 2px",
    closeBoxURL: "images/button_close.png",
    infoBoxClearance: new google.maps.Size(1, 1),
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false
  };

  infobox = new InfoBox(infoboxOptions);

  google.maps.event.addListener(encounterMarker, "click", function(e) {
    infobox.open(dungeonMap, this);
    this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    setZoomWhenEncounterClicked();
    dungeonMap.setCenter(encounterMarker.getPosition());
  });
}
