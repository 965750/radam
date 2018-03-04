$(document).ready(function(){
    
$(window).on("scroll", function(){
    
    var orderCont = $(".orderCont").offset().top - 200;
    
    if ($(window).scrollTop() > 0 && $(window).scrollTop() < orderCont) {
        $(".singleNavi").removeClass("activeNav");
        $("#shop").addClass("activeNav");
        
    } else {}
}); 
    $(".btnBuy").on("click", function(){
        $(".alertBuy").css({
            display: "block"
        });
        $(".alertBuy").animate({
        opacity: 1
        },300).delay(500).animate({
        opacity: 0  
    },400);
        setTimeout(function(){ 
            $(".alertBuy").css({
            display: "none"
        });
        }, 1200);
});
});