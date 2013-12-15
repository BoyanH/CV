(function (){

    var images = document.querySelector("#image-container"),
        totalImages = document.querySelectorAll(".carousel-image").length,
        currentImage = 0;

    function slide(change) {

        currentImage = (currentImage + change + totalImages) % totalImages;
        images.style.left = -(currentImage * 100) + "%";

    }

     document.querySelector('.carousel-arrow-left').addEventListener('click', function() {
        slide(-1);
    });

    document.querySelector('.carousel-arrow-right').addEventListener('click', function() {
        slide(1);
    });




}())