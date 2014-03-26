/// <reference path="_reference.js" />

var renderers = (function () {

	var drawSnake = function (canvas, snake) {
		for (var i = 0; i < snake.parts.length; i++) {
			drawSnakePart(canvas, snake.parts[i]);
		}
	};

	var drawSnakePart = function (canvas, part) {
		var ctx = canvas.getContext("2d");
		if (part instanceof snakes.HeadSnakePartType) {
			ctx.fillStyle = "black";
			ctx.strokeStyle = "black";
		} else if (part instanceof snakes.SnakePartType) {
			ctx.fillStyle = "lime";
			ctx.strokeStyle = "black";
		}
		var position = part.getPosition();
		ctx.beginPath();
		ctx.arc(position.x, position.y, part.size/2, 0,2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}
	var drawFood = function (canvas, food) {
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "red";
		ctx.strokeStyle = "black";
		var position = food.getPosition();

		ctx.beginPath();
		ctx.arc(position.x, position.y, food.size/1.5, 0,2*Math.PI);
		ctx.stroke();
		ctx.fill();
	};
	var drawWall = function (canvas, wall) {
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "black";
		var position = wall.getPosition();
		ctx.fillRect(position.x, position.y, wall.size, wall.size);
		ctx.strokeStyle = "black";
		ctx.strokeRect(position.x, position.y, part.size, part.size);
	};

	function CanvasRenderer(selector) {
		if (selector instanceof HTMLCanvasElement) {
			this.canvas = selector;
		} else if (typeof selector === "String" ||
			typeof selector === "string") {
			this.canvas = document.querySelector(selector);
		}
	}

	CanvasRenderer.prototype = {
		draw: function (obj) {
			if (obj instanceof snakes.SnakeType) {
				drawSnake(this.canvas, obj);
			} else if (obj instanceof snakes.SnakePartType) {
				drawSnakePart(this.canvas, obj);
			} else if (obj instanceof snakes.FoodType) {
				drawFood(this.canvas, obj);
			} else if (obj instanceof snakes.WallType) {
				drawWall(this.canvas, obj);
			}
		},
		clear: function () {
			var ctx = this.canvas.getContext("2d");
			var w = this.canvas.width;
			var h = this.canvas.height;
			ctx.clearRect(0, 0, w, h);
		},

		gameEnd: function(score) {

			var ctx = this.canvas.getContext("2d");
			ctx.font = "bold 140px sans-serif";

			ctx.beginPath();
			ctx.fillStyle = "darkred";
			ctx.fillText("Game Over!", 10, this.canvas.height/2 - 75);

			ctx.beginPath();
			ctx.font = "bold 120px chiller"
			ctx.fillStyle = "lime";
			ctx.fillText("Score: " + score, 200, this.canvas.height/2 + 75);

			controller.startNewGame();

		},

		showScore: function(score) {

			var ctx = this.canvas.getContext("2d");

			ctx.fillStyle = "lime";
			ctx.font = "32px chiller";
			ctx.fillText("Score: " + score, this.canvas.width - 200,  this.canvas.height - 30);
		},

		getDimensions: function () {
			return {
				minWidth: 0,
				maxWidth: this.canvas.width,
				minHeight: 0,
				maxHeight: this.canvas.height
			};
		}
	};

	return {
		getCanvas: function (selector) {
			return new CanvasRenderer(selector);
		}

	};

}());