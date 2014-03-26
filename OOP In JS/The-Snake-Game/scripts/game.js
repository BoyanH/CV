function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var games = (function () {

	function Game(renderer) {
		this.renderer = renderer;
		this.snake = new snakes.get(250, 250, 3);
		this.food = new snakes.getFood(getRandomInt(5, this.renderer.canvas.width - 5), getRandomInt(5, this.renderer.canvas.height -5), 10);
		this.bindKeyEvents();
		this.state = "stopped";
		this.score = 0;
	}

	function animationFrame() {
		var snakePosition = theGame.snake.getPosition(),
			toChangePosition = false,
			newX = snakePosition.x,
			newY = snakePosition.y;

		if (snakePosition.x < dimensions.minWidth + snakePosition.size/2) {
			newX = dimensions.maxWidth - snakePosition.size/2;
			toChangePosition = true;
		} else if (dimensions.maxWidth - snakePosition.size/2 < snakePosition.x) {
			newX = dimensions.minWidth + snakePosition.size/2;
			toChangePosition = true;
		}
		if (snakePosition.y < dimensions.minHeight + snakePosition.size/2) {
			newY = dimensions.maxHeight - snakePosition.size/2;
			toChangePosition = true;
		}
		if (dimensions.maxHeight < snakePosition.y + snakePosition.size/2) {
			newY = dimensions.minHeight + snakePosition.size/2;
			toChangePosition = true;
		}
		if (toChangePosition) {
			theGame.snake.changePosition(newX, newY);
		}

		theGame.renderer.clear();
		theGame.snake.move();

		theGame.renderer.draw(theGame.snake);
		theGame.renderer.draw(theGame.food);
		theGame.renderer.showScore(theGame.score);

		if( theGame.snake.checkIfFed(theGame.food, theGame.snake).if) {

			theGame.snake.parts = theGame.snake.checkIfFed(theGame.food, theGame.snake).parts;
			theGame.snake.parts.length -= 1;
			theGame.food = new snakes.getFood(getRandomInt(5, theGame.renderer.canvas.width - 5), getRandomInt(5, theGame.renderer.canvas.height -5), 10);

			theGame.score ++;
		}

		window.setTimeout(requestFrame, 70);

		function requestFrame() {

			if (theGame.state === "running" && theGame.snake.checkForCollision() == false) {
				requestAnimationFrame(animationFrame);
			}

			else if(theGame.snake.checkForCollision() == true) {

				window.setTimeout(gameOver, 500);

				function gameOver() {
					
					theGame.renderer.clear();
					theGame.renderer.gameEnd(theGame.score);
				}
			}
		}
	}

	var dimensions;
	Game.prototype = {
		start: function () {
			theGame = this;
			requestAnimationFrame(animationFrame);
			dimensions = this.renderer.getDimensions();
			this.state = "running";
		},
		stop: function () {
			theGame.state = "stopped";
		},
		bindKeyEvents: function () {
			var self = this;
			document.body.addEventListener("keydown", function (ev) {
				var keyCode = ev.keyCode;
				if (37 <= keyCode && keyCode <= 40) {
					self.snake.changeDirection(keyCode - 37);
				}
			});
		},
		getState: function () {
			return this.state;
		},
		changeRenderer: function (newRenderer) {
			this.renderer = newRenderer;
		}
	}

	return {
		get: function (renderer) {
			return new Game(renderer);
		}
	};
}());