$(document).ready(function() {

    //tag h1
    $("h1").css("color", "blue");

    //event mouseenter dan mouseleave
    $("#myDiv").mouseenter(function () {
        $(this).text("Kursor berada di dalam");
        $(this).css("color", "black");
        $(this).css("background-color", "red");
    });

    $("#myDiv").mouseleave(function () {
        $(this).text("Kursor berada di luar");
        $(this).css("color", "red");
        $(this).css("background-color", "lightblue");
    });

    //event focus
    $('input').focus(function () {
        $('input').css('background-color', '');
        $(this).css('background-color', 'lightblue');
    })

    //event button click
    $("#myButton").click(function () {
        alert("Tombol diklik!");
    });

    //event keyboard keypress
    $(document).keypress(function (event) {
        var key=String.fromCharCode(event.which);
        $("#hasil_input").text("Kamu menekan tombol "+key);
    });

    //event form submit
    $("#myForm").submit(function(event){

        event.preventDefault(); //menghentikan submit form
        var name=$("#nameInput").val();
        var email=$("#emailInput").val();

        $("#hasil_form").text("Nama: "+name+", Email: "+email);
    });


});