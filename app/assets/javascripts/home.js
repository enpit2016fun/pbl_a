// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
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