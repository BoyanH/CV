(function () {

	var canvas = document.getElementsByTagName("canvas")[0],
		ctx = canvas.getContext("2d"),
		angle,
		i = 0;

	var Ball = function (x, y, radius) {

		this.x = x;
		this.y = y;
		this.radius = radius;

		//drawing the ball with the new coordinates
		this.draw = function (ctx) {
			
			//for the rubber band/ rope
			ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height/2);
            ctx.lineWidth = 3;
            ctx.lineCap = "round";
            ctx.strokeStyle = "yellow";
            ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle = "black";
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
		};

		//changing the x, y coordinats of the ball, according to the given angle
		this.move = function (angle) {

			this.angle = angle
			this.x = ctx.canvas.width/2 + (1+this.angle)*Math.cos(this.angle);
			this.y =ctx.canvas.height/2 +(1+this.angle)*Math.sin(this.angle);

		}
		
	};

	var ball = new Ball(ctx.canvas.width/2, ctx.canvas.height/2, 5);

	function animationFrame() {

		console.log((1+angle)*Math.sin(angle));


		//It looks quite too long, but it checks if the ball is getting out of the canvas => if it is it gets reset to starting position
		//it uses this whole formul and not just the size of the canvas so this script can work with all size canvases
		//everything is set according to the canvas and nothing is "hardcoded"
    	if (ball.x + ball.radius >= ctx.canvas.width || ball.x - ball.radius <= 0 || ball.y + ball.radius >= ctx.canvas.height || ball.y - ball.radius <=0)  {
    		i = 0;
    	}

        angle = 0.1 * i; //formul for the angle of the archimedian spiral

		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ball.move(angle);
        ball.draw(ctx);

        i++; //with this i we progressively change the angle of the archimedian spiral

        requestAnimationFrame(animationFrame);

    }

    requestAnimationFrame(animationFrame);


}());