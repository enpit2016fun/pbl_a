// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var map;
var flag_id = 1;
var marker_id = 0;
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
  $('#confirm').on('click', function(event){
    $.post("/sensations/update",{
      "id": marker_id,
      "comment": $('#comment-field').val(),
      "authenticity_token": $("#authenticity_token").val()
    });
    location.reload()
  });
});

var infowindow;
var showInfoWindow = function(markerObj) {
  if(infowindow) {
    infowindow.close();
  }
  var editBtn = "<div align=\"center\"><button data-target=\"modal-edit\" class=\"waves-effect btn btn-tiny grey darken-1 modal-trigger\">編集する<i class=\"material-icons\">mode_edit</i></button></div>";
  var comment = markerObj.content;
  var content = comment=="" ? "<div>コメントが登録されていません。<br><br>"+editBtn+"</div>" : "<div>"+markerObj.content+"<br><br>"+editBtn+"</div>";
  infowindow = new google.maps.InfoWindow({
    content: content
  });
  infowindow.open(map, markerObj);
  marker_id = markerObj.id;
  $('#comment-field').attr('placeholder', comment);
  $('#comment-field').val('');
  $('.modal-trigger').leanModal();
};

function plotMarker(lat, lon, emotion, comment, id){
  mark_latlng = new google.maps.LatLng(lat, lon);
  var marker = new google.maps.Marker({
    position: mark_latlng,
    map: map,
    icon: './feelings/img'+emotion+'.png',
    content: comment,
    id: id
  });
  google.maps.event.addListener(marker, 'mouseover', function() {
    showInfoWindow(this);
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
                 
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image[flag_id-1],
        content: ""
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