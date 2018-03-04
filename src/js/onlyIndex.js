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