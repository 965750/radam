$(document).ready(function () {
    
    var firmaTop = $(".firma").offset().top;

    $(".arrCont").on("click", function () {
        $("html").animate({
            scrollTop: firmaTop
        }, 700,'swing');
    });


});

$(window).on("scroll", function () {

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 40) {
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
    } else {
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
    if ($(window).scrollTop() > 0 && $(window).scrollTop() < 754) {
        $(".singleNavi").removeClass("activeNav");
        $(".singleNavi:nth-child(1)").addClass("activeNav");
    } else if ($(window).scrollTop() > 755) {
        $(".singleNavi").removeClass("activeNav");
        $(".singleNavi:nth-child(2)").addClass("activeNav");
    }
});
