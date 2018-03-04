$(document).ready(function () {
    $(".btnBuy").on("click", function () {
        $("#baskInCat").addClass("basketPlus");
        setTimeout(refreshOneUp, 500);

        function refreshOneUp() {
            $("#baskInCat").removeClass("basketPlus");
        }
    });
    var firmaTop = $(".firma").offset().top;

    $(".arrCont").on("click", function () {
        $("html").animate({
            scrollTop: firmaTop
        }, 700, 'swing');
    });
    $(".arrToForm").on("click", function(){
        $("html, body").animate({
            scrollTop: 820
        }, 700, 'swing');
    });
    // Site MAP footer
    $("#FmapI li:nth-child(1)").on("click", function () {
        $("html").animate({
            scrollTop: 0
        }, 700, 'swing');
    });
    $("#FmapI li:nth-child(2)").on("click", function () {
        window.location.replace("shop.html");
    });
    $("#FmapI li:nth-child(3)").on("click", function () {
        window.location.replace("shop.html");
    });
    $("#FmapI li:nth-child(4)").on("click", function () {
        $("html").animate({
            scrollTop: firmaTop
        }, 700, 'swing');
    });
    $("#FmapS li:nth-child(1)").on("click", function () {
        window.location.replace("index.html");
    });
    $("#FmapS li:nth-child(2)").on("click", function () {
        $("body").animate({
            scrollTop: 0
        }, 700, 'swing');
    });
    $("#FmapS li:nth-child(3)").on("click", function () {
        $("body").animate({
            scrollTop: $(".orderCont").offset().top
        }, 700, 'swing');
    });
    $("#FmapS li:nth-child(4)").on("click", function () {
        window.location.replace("index.html");
    });
    $("#cont").on("click", function () {
        $("html").animate({
            scrollTop: firmaTop
        }, 700, 'swing');
    });
});
$(window).on("scroll", function () {

    console.log(window.pageYOffset);

    if ($(window).scrollTop() > 40) {
        $("#mainNav").css({
            position: 'fixed',
            zIndex: 15,
            opacity: 0.8,
            height: '40px'
        });
        $("#logo70").css({
            transform: "scale(.58)",
            marginTop: "-13px"
        });
        $(".socialICont").css({
            height: '25px',
            width: '25px',
            lineHeight: '27px',
            margin: '3px'
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
        $("#logo70").css({
            transform: "scale(.95)",
            marginTop: "0px"
        });
        $(".socialICont").css({
            height: '35px',
            width: '35px',
            lineHeight: '37px',
            margin: 'auto 5px'
        });
        $(".singleNavi").css({
            height: '70px',
            padding: '20px',
            fontSize: '23px',
        });
    }
});
