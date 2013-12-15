(function (){

    $(".traffic-light").first().css("background-color", "red");
    $(".yellow").css("background-color", "yellow");
    $(".traffic-light").last().css("background-color", "green");
    $(".traffic-light").css("border", "3px solid black");
    $(".traffic-light").css("border-radius", "50%");
    $(".traffic-light").css("width", "100px");
    $(".traffic-light").css("height", "100px");
    $("img").css("width", "400px")

    $(".slide").css("display", "none");
    document.getElementsByClassName("slide")[0].style.display = "";
    $(".slide").css("z-index", "1");
    $(".slide").css("position", "absolute");
    $(".slide").css("margin-left", "50px");
    $(".slide").css("width", "400px");
    $(".slide").css("height", "500px");
    $(".slide").css("color", "white");
    $(".slide").css("font-family", "Tahoma");

    $("#container").css("background-color", "green");
    $("#container").css("width", "500px");
    $("#container").css("height", "420px");
    $("#container").css("border-radius", "20px");
    $("#container").css("position", "absolute");
    $("#container").css("top", "10%");
    $("#container").css("left", "35%");

    var btnLeft = document.createElement("button");
    btnLeft.appendChild(document.createTextNode("<"));
    $("#container").prepend(btnLeft);
    var btnRight = document.createElement("button");
    btnLeft.style.float = "left";
    btnRight.style.float = "right";
    btnRight.appendChild(document.createTextNode(">"));
    $("#container").append(btnRight);
    $("button").css("margin-top", "240px");

    var crntSlide = 0;
    var maxSlides = $(".slide").length;

    function slideLeft() {
        crntSlide -= 1;
        (crntSlide < 0) ? crntSlide = maxSlides - 1 : false;

        changeSlide();
    }
    function slideRight() {
        crntSlide += 1;
        (crntSlide > maxSlides - 1) ? crntSlide = 0 : false;

        changeSlide();
        clearInterval(int);
        setTimeout(function() {
        int = setInterval(slideRight, 5000);
        });
    }

    function changeSlide() {

       $(".slide").css("display", "none");
       document.getElementsByClassName("slide")[crntSlide].style.display = "";

    }

    var int = setInterval(slideRight, 5000);
    btnLeft.addEventListener("click", slideLeft, true);
    btnRight.addEventListener("click", slideRight, true);

}())