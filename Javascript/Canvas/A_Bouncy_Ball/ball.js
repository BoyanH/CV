(function() {
    var canvas = document.getElementById("canvas-animations"),
		ctx = canvas.getContext("2d"),
		direction = {
		    x: "right",
		    y: "down"
		},
		directions = {
		    "left": -1.3,
		    "right": +1.3,
		    "up": -0.7,
		    "down": +0.7
		};
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                   window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	function getRandomValue(min, max) {
		return (Math.random() * (max - min) + min) | 0;
	}

	function getRandomColor() {
		var red = getRandomValue(0, 255);
		var green = getRandomValue(0, 255);
		var blue = getRandomValue(0, 255);
		return "rgb(" + red + "," + green + "," + blue + ")";
	}

	function Ball(x, y, radius, speed, direction) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.speed = speed;
		this.direction = direction;
		this.fillColor = getRandomColor();
		this.strokeColor = getRandomColor();

		this.draw = function(ctx) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.strokeColor;
			ctx.fill();
			ctx.stroke();
		};

		this.move = function() {
			this.x += this.speed * directions[this.direction.x];
			this.y += this.speed * directions[this.direction.y];
		};

		this.bounce = function (maxX, maxY) {
		    if (this.x < this.radius) {
		        this.direction.x = "right";
		    }
		    if (this.x > maxX - this.radius) {
		        this.direction.x = "left";
		    }
		    if (this.y < this.radius) {
		        this.direction.y = "down";
		    }
		    if (this.y > maxY - this.radius) {
		        this.direction.y = "up";
		    }
		};
	}

	
	var directionX = (getRandomValue(0, 2) % 2 === 0) ? "left" : "right";
	var directionY = (getRandomValue(0, 2) % 2 === 0) ? "up" : "down";
	var x = getRandomValue(0, ctx.canvas.width);
	var y = getRandomValue(0, ctx.canvas.height);
	var ball = new Ball(x, y, 10, 5, {
	    x: directionX,
	    y: directionY
	});

	(function animationFrame() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ball.move();
		ball.bounce(ctx.canvas.width, ctx.canvas.height);

		ball.draw(ctx);
		
		requestAnimationFrame(animationFrame);
	}())

	requestAnimationFrame(animationFrame);

	
}());