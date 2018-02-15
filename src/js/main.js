$(document).ready(function(){
    
});

$(window).on("scroll", function(){
    
    if($(window).scrollTop() > 70){
        $("#mainNav").css({
            position: 'fixed',
            zIndex: 15,
            opacity: 0.8,
            height: '40px'
            
        });
        $(".socialICont").css({
            height: '25px',
            width: '25px',
            lineHeight: '27px'
        });
        $(".singleNavi").css({
            height: '40px',
            padding: '10px',
            fontSize: '18px',
        });
    }else{
        $("#mainNav").css({
            position: '',
            zIndex: 0,
            opacity: 1,
            height: '70px'
        });
        $(".socialICont").css({
            height: '35px',
            width: '35px',
            lineHeight: '37px'
        });
        $(".singleNavi").css({
            height: '70px',
            padding: '20px',
            fontSize: '23px',
        });
    }
});