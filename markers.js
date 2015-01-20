var Marker = function (markerTitle, lat, lng, iconImg, bigImg) {
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
    zIndex:102,
  });

  var boxText = document.createElement("DIV");
  boxText.style.cssText = pop_up_info;
  boxText.innerHTML = '<span class="pop_up_box_text"><img src="images/' + bigImg + '" width="300" height="200" border="0" /></span>';

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
}
