$(document).ready(function(){
    
$(window).on("scroll", function(){
    
    var orderCont = $(".orderCont").offset().top - 200;
    
    if ($(window).scrollTop() > 0 && $(window).scrollTop() < orderCont) {
        $(".singleNavi").removeClass("activeNav");
        $("#shop").addClass("activeNav");
        
    } else {}
});    
});