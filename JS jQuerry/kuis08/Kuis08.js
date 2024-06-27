$(document).ready(function () {
    
    //hide effect
    $("#hideBtn").click(function(){
        $(".box").hide(1000);
    });

    //show effect
    $("#showBtn").click(function () {
        $(".box").show(1000);
    });
    
    //fade in effect
    $("#fadeOutBtn").click(function () {
        $(".box").fadeOut(1000);
    });

    //fade in effect
    $("#fadeInBtn").click(function () {
        $(".box").fadeIn(1000);
    });

    //slide up effect
    $("#slideUpBtn").click(function () {
        $(".box").slideUp(1000, 'linear');
    });

    //slide down effect
    $("#slideDownBtn").click(function () {
        $(".box").slideDown(1000, 'swing');
    });

    //toggle effect
    $("#toggleBtn").click(function () {
        $(".box").toggle(1000);
    });

    //animate effect
    $("#animateBtnPlus").click(function () {
        $(".box").animate({ left: '200px', 
                            opacity: '0.5', 
                            height: '+=150px', 
                            width: '+=150px'},1000);
    });

    $("#animateBtnMinus").click(function () {
        $(".box").animate({ left: '200px', 
                            opacity: '0.5', 
                            height: '-=150px', 
                            width: '-=150px'},1000);
    });
})