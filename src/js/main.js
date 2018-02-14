$(document).ready(function(){
    
});

$(window).on("scroll", function(){
    
    if($(window).scrollTop() > 70){
        $("#mainNav").css({
            position: 'fixed',
            zIndex: 15,
            opacity: 0.8,
            
        });
    }else{
        $("#mainNav").css({
            position: '',
            zIndex: 0,
            opacity: 1,
            height: '40px'
        });
    }
});