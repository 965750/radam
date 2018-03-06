$(document).ready(function(){
    
$(window).on("scroll", function(){
    
    var firmaTop = $(".firma").offset().top - 100;
    
    if ($(window).scrollTop() > 0 && $(window).scrollTop() < firmaTop) {
        $("#cont").removeClass("activeNav");
        $("#home").addClass("activeNav");
        
    } else if ($(window).scrollTop() > firmaTop) {
        $("#home").removeClass("activeNav");
        $("#cont").addClass("activeNav");
    }
});   
    
});
function initMap(){
        var location = {
            lat: 50.319376,
            lng: 18.242230
        };
        var map = new google.maps.Map(document.getElementById("map"),{
            zoom: 15,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    };