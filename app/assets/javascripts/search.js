// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var map;
var flag_id;
var walk = false;
sumDistance = 0;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.84181747, lng: 140.7669687},
    zoom: 14
  });
}

$(function(){
    map.addListener('click', function(event) {
      if(walk ==true){
        way(event.latLng.lat(), event.latLng.lng(), flag_id);
        walk = false;
      }
    });
});

//散歩ルートの描画(場所データは決め打ち)
function way(lat, lng){
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("map"));

  var point = new Array();
  sumDistance = 0;
  var cnt = 0;

  point[0] = {lat:lat, lng:lng};
  var feel;
  if(flag_id == 1)
    feel = gon.sensation;
  else if(flag_id == 2)
    feel = gon.sensation;
  else if(flag_id == 3)
    feel = gon.sensation;
  else if(flag_id == 4)
    feel = gon.sensation;
  else if(flag_id == 5)
    feel = gon.sensation;
  else if(flag_id == 6)
    feel = gon.sensation;
  else if(flag_id == 7)
    feel = gon.sensation;
  else if(flag_id == 8)
    feel = gon.sensation;
  
  while(sumDistance<3000){
    var min = minDistance(point[cnt].lat, point[cnt].lng, feel);
    point.push({lat:Number(feel[min].lat), lng:Number(feel[min].lon)});
    feel.splice(min,1);
    cnt += 1;
  }
  point.pop();//3km超えた分の配列の要素を削除

  if(point.length<2){
    alert("近くに散歩コースがありません。");
  }
  else{
    var location = []
    for(var i=1;i<point.length-1;i++){
      location[location.length] = {location: point[i].lat+","+point[i].lng};
    }
    var request = {
      origin: {"lat": point[0].lat, "lng": point[0].lng},
      destination: {"lat": point[point.length-1].lat, "lng": point[point.length-1].lng},
      waypoints: location,
      travelMode: google.maps.DirectionsTravelMode.WALKING
    }

    directionsService.route(request, function(response, status){
      if(status == google.maps.DirectionsStatus.OK){
        directionsDisplay.setDirections(response);
      }
    });
  }
}

var infowindow;
var showInfoWindow = function(markerObj) {
  if(infowindow) {
    infowindow.close();
  }
  var content = markerObj.content=="" ? "コメントが登録されていません。" : markerObj.content;
  infowindow = new google.maps.InfoWindow({
    content: content
  });
  return infowindow.open(map, markerObj);
};

function plotMarker(lat, lon, emotion, comment){
  mark_latlng = new google.maps.LatLng(lat, lon);
  var marker = new google.maps.Marker({
    position: mark_latlng,
    map: map,
    icon: './feelings/img'+emotion+'.png',
    content: comment
  }); 
  google.maps.event.addListener(marker, 'mouseover', function() {
    showInfoWindow(this);
  });
}

function searchFeeling(){
    var feeling = document.searchForm.feelings.value;
    window.location.href = feeling;
}

function iconSelect(){
}

function dropsort() {
    var browser = document.sort_form.sort.value;
    location.href = browser
}

function flag(i){
    flag_id=i;
}
function isWalk(){
  walk = true;
}

//最小距離を持つ配列のインデックスを返す
function minDistance(lat, lng,feel){
  var min = 0;
  for(var i=1; i<feel.length;i++){
    if(geoDistance(lat, lng, feel[min].lat, feel[min].lon) > geoDistance(lat, lng, feel[i].lat, feel[i].lon)){
      min = i;
    }
  }
  sumDistance += geoDistance(lat, lng, feel[min].lat, feel[min].lon);
  return min;
}

function geoDistance(lat1, lng1, lat2, lng2) {
  var precision=8;
  // 引数　precision は小数点以下の桁数（距離の精度）
  var dist = 0;
  if ((Math.abs(lat1 - lat2) < 0.00001) && (Math.abs(lng1 - lng2) < 0.00001)) {
    dist = 0;
  } else {
    lat1 = lat1 * Math.PI / 180;
    lng1 = lng1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    lng2 = lng2 * Math.PI / 180;
 
    var A = 6378140;
    var B = 6356755;
    var F = (A - B) / A;
 
    var P1 = Math.atan((B / A) * Math.tan(lat1));
    var P2 = Math.atan((B / A) * Math.tan(lat2));
 
    var X = Math.acos(Math.sin(P1) * Math.sin(P2) + Math.cos(P1) * Math.cos(P2) * Math.cos(lng1 - lng2));
    var L = (F / 8) * ((Math.sin(X) - X) * Math.pow((Math.sin(P1) + Math.sin(P2)), 2) / Math.pow(Math.cos(X / 2), 2) - (Math.sin(X) - X) * Math.pow(Math.sin(P1) - Math.sin(P2), 2) / Math.pow(Math.sin(X), 2));
    
    dist = A * (X + L);
    var decimal_no = Math.pow(10, precision);
    dist = Math.round(decimal_no * dist / 1) / decimal_no; //メートル単位の距離
  }
  return dist;
}