if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}

if (!Object.prototype.extend) {
    Object.prototype.extend = function (properties) {
        function f() { };
        f.prototype = Object.create(this);
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        f.prototype._super = this;
        return new f();
    }
}


var imageSlider = (function () {

	var Image = {

		init: function(title, thumbnailURL, imgURL) {

			this.title = title;
			this.thumbnailURL = thumbnailURL;
			this.imgURL = imgURL;
		}
	};

	var Button = {

		init: function(title, id) {

			this.title = title;
			this.id = id;
		}
	};

	var Slider = {

		init: function (setOfImages, previousButton, nextButton) {
			this.setOfImages = setOfImages;
			this.currentPosition = 0;
			this.htmlImages = this.createImages();
			this.previousButton = previousButton;
			this.nextButton = nextButton;
		},

		createImages: function () {

			var htmlImages = [],
				imgs = this.setOfImages;

			for (var i = 0; i < imgs.length; i++) {
				var image = document.createElement("img");
				image.src = imgs[i].thumbnailURL;
				image.alt = imgs[i].title;
				image.className = "sliderImage";
				image.id = i;
				image.style.borderRadius = "10px";
				image.style.opacity = "0.6";
				image.style.marginLeft = "3px";

				if(i == this.currentPosition) {

					image.style.border = "2px dashed orange";
					image.style.opacity = "1";
				}

				htmlImages[i] = image;

			};

			return htmlImages;
		},

		start: function() {

			var sliderDiv = document.createElement("div");
			sliderDiv.className = "sliderDiv";

			var crntDiv = document.createElement("div");
			crntDiv.id = "currentImageDiv";
			this.crntImg = document.createElement("img");
			this.crntImg.id = "currentImg";
			this.crntImg.style.marginLeft = "9px";
			this.crntImg.src = this.setOfImages[this.currentPosition].imgURL;
			crntDiv.appendChild(this.crntImg);
			sliderDiv.appendChild(crntDiv);

			for(var i=0; i<this.htmlImages.length; i++) {

				sliderDiv.appendChild(this.htmlImages[i]);
			}

			var self = this;

			var prevBtn = document.createElement("a");
			prevBtn.innerHTML = this.previousButton.title
			prevBtn.id = this.previousButton.id;
			prevBtn.href = "#";
			sliderDiv.appendChild(document.createElement("br"));
			sliderDiv.appendChild(prevBtn);
			prevBtn.addEventListener("click", function() {self.prevImg();}, false);
			
			var nextBtn = document.createElement("a");
			nextBtn.innerHTML = this.nextButton.title;
			nextBtn.id = this.nextButton.id;
			nextBtn.href = "#";
			nextBtn.addEventListener("click", function() {self.nextImg();}, false);
			sliderDiv.appendChild(nextBtn);

			document.body.appendChild(sliderDiv);

			this.clickableImages();
		},

		clickableImages: function() {

			var self = this;

			for (var k=0; k< this.htmlImages.length; k++) {

				var imageNumber = k;
				document.getElementsByClassName("sliderImage")[k].addEventListener("click", function(ev){

					var target = ev.target || ev.srcElement;
					self.currentPosition = target.id*1;
					self.changeCrntImage();

				}, false);

			}
		},

		changeCrntImage: function() {

			for(var j=0; j < this.htmlImages.length; j++) {

				this.htmlImages[j].style.opacity = "0.6";
				this.htmlImages[j].style.border = "none";
			}

			this.htmlImages[this.currentPosition].style.border = "3px dashed orange";
			this.htmlImages[this.currentPosition].style.opacity = "1";
			document.getElementById(this.crntImg.id).src = this.setOfImages[this.currentPosition].imgURL;
					
		},

		nextImg: function() {

			this.currentPosition += 1;

			if(this.currentPosition >= this.setOfImages.length) {

				this.currentPosition = 0;
			}

			this.changeCrntImage();
		},

		prevImg: function() {

			this.currentPosition -= 1;

			if(this.currentPosition <= -1) {

				this.currentPosition = this.setOfImages.length - 1;
			}

			this.changeCrntImage();
		}

	};



	return {

		Image: Image,
		Button: Button,
		Slider: Slider
	}

}());

var Image = imageSlider.Image;
var Button = imageSlider.Button;
var Slider = imageSlider.Slider;

var imageOne = Object.create(Image);
imageOne.init("First Image", "images/firstSmall.jpg", "images/firstBig.jpg");

var imageTwo = Object.create(Image);
imageTwo.init("Second Image", "images/secondSmall.jpg", "images/secondBig.jpg");

var imageThree = Object.create(Image);
imageThree.init("Third Image", "images/thirdSmall.jpg", "images/thirdBig.jpg");

var imageFour = Object.create(Image);
imageFour.init("Fourth Image", "images/fourthSmall.jpg", "images/fourthBig.jpg");


var prev = Object.create(Button);
prev.init("<", "prev");

var next = Object.create(Button);
next.init(">", "next");

var slider = Object.create(Slider);
slider.init([imageOne, imageTwo, imageThree, imageFour], prev, next);

slider.start();

