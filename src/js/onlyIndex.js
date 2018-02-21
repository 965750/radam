$(document).ready(function(){
    
$(window).on("scroll", function(){
    
    var firmaTop = $(".firma").offset().top - 100;
    
    if ($(window).scrollTop() > 0 && $(window).scrollTop() < firmaTop) {
        $(".singleNavi").removeClass("activeNav");
        $("#home").addClass("activeNav");
        
    } else if ($(window).scrollTop() > firmaTop) {
        $(".singleNavi").removeClass("activeNav");
        $("#cont").addClass("activeNav");
    }
});    
});