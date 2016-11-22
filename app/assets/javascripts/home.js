// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var map;
var flag_id = 0;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.84181747, lng: 140.7669687},
    zoom: 14
  });

  map.addListener('click', function(event) {
    addMarker(event.latLng, flag_id);
  });

}

function addMarker(location, flag_id) {
    var image = ['./feelingsresize/img01.png',
                 './feelingsresize/img02.png',
                 './feelingsresize/img03.png',
                 './feelingsresize/img05.png',
                 './feelingsresize/img06.png',
                 './feelingsresize/img11.png',
                 './feelingsresize/img12.png',
                 './feelingsresize/img13.png'];
    
    console.log("flag="+flag_id);
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image[flag_id]
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