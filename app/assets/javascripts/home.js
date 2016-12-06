// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var map;
var flag_id = 1;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.84181747, lng: 140.7669687},
    zoom: 14
  });
}

$(function(){
    map.addListener('click', function(event) {
      addMarker(event.latLng, flag_id);
      $.post("/sensations/new", {
        "lat": event.latLng.lat(),
        "lon": event.latLng.lng(),
        "emotion": flag_id,
        "authenticity_token": $("#authenticity_token").val()
      })
    });
});

//散歩ルートの描画(場所データは決め打ち)
function way(){
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("map"));

  var anticipacion_point = [
    {"lat": 41.796959902027965, "lng": 140.75696468353271},
    {"lat": 41.799215430653845, "lng": 140.75893878936768},
    {"lat": 41.79598408135528, "lng": 140.7599687576294},
    {"lat": 41.794496326162594, "lng": 140.755934715271},
    {"lat": 41.794320352834355, "lng": 140.7530701160431}
    ];

  var request = {
    origin: {"lat": anticipacion_point[0]["lat"], "lng": anticipacion_point[0]["lng"]},
    destination: {"lat": anticipacion_point[4]["lat"], "lng": anticipacion_point[4]["lng"]},
    waypoints: [{location: anticipacion_point[1]["lat"]+","+anticipacion_point[1]["lng"]},
      {location: anticipacion_point[2]["lat"]+","+anticipacion_point[2]["lng"]},
      {location: anticipacion_point[3]["lat"]+","+anticipacion_point[3]["lng"]}],
    travelMode: google.maps.DirectionsTravelMode.WALKING
  }

  directionsService.route(request, function(response, status){
    if(status == google.maps.DirectionsStatus.OK){
      directionsDisplay.setDirections(response);
    }
  });
}

//フィルター後の画面遷移時にマーカーを設置する(場所とアイコンのデータは決め打ち)
function searchMarker(lat, lon, emotion){
  mark_latlng = new google.maps.LatLng(lat, lon);
  var marker = new google.maps.Marker({
    position: mark_latlng,
    map: map,
    icon: './feelings/img'+emotion+'.png'
  }); 
}

function addMarker(location, flag_id) {
    var image = ['./feelings/img1.png',
                 './feelings/img2.png',
                 './feelings/img3.png',
                 './feelings/img4.png',
                 './feelings/img5.png',
                 './feelings/img6.png',
                 './feelings/img7.png',
                 './feelings/img8.png'];
    
    console.log("flag="+flag_id);
    console.log("lat="+location.lat());
    console.log("lng="+location.lng());
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image[flag_id-1]
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