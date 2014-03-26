/// <reference path="_reference.js" />

var snakes = (function () {
	var snakePartSize = 15;

	var directions = [{
		dx: -1,
		dy: 0
	}, {
		dx: 0,
		dy: -1
	}, {
		dx: +1,
		dy: 0
	}, {
		dx: 0,
		dy: +1
	}];

	function GameObject(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	GameObject.prototype = {
		getPosition: function () {
			return {
				x: this.x,
				y: this.y,
				size: this.size
			};
		},
		getSize: function () {
			return this.size;
		}
	};

	function SnakePart(x, y, size) {
		GameObject.call(this, x, y, size);
	}

	function Food(x, y, size) {

		GameObject.call(this, x, y, size);
	}

	SnakePart.prototype = new GameObject();
	SnakePart.prototype.constructor = SnakePart;

	SnakePart.prototype.changePosition = function (x, y) {
		this.x = x;
		this.y = y;
	}

	function HeadSnakePart(x, y, size) {
		SnakePart.call(this, x, y, size);
	}

	HeadSnakePart.prototype = new SnakePart();
	HeadSnakePart.prototype.constructor = HeadSnakePart;

	function Snake(x, y, size) {
		var part = null,
			partX,
			partY;
		this.parts = [];
		this.direction = 2;
		for (var i = 0; i < size; i++) {
			partX = x - i * snakePartSize;
			partY = y;
			part = new SnakePart(partX, partY, snakePartSize);
			this.parts.push(part);
		}

		this.addSnakePart = function(newSnakePart) {

			this.parts.push(newSnakePart);
		}
	}

	Snake.prototype = new GameObject();
	Snake.prototype.constructor = Snake;


	Snake.prototype.head = function () {
		return this.parts[0];
	}

	Snake.prototype.checkForCollision = function () {

		var head = this.head();
		var self = this;
		for(var i = 1; i < this.parts.length; i++) {

			var headPosition = head.getPosition();
			var partPosition = self.parts[i].getPosition();

			if(partPosition.x == headPosition.x && partPosition.y == headPosition.y) {

			 return true;
			}
		}
		return false;
	}

	Snake.prototype.checkIfFed = function(foodPart, Snake) {

		var head = this.head();
		var headPosition = head.getPosition();
		var foodPosition = foodPart.getPosition();

		var dx = directions[this.direction].dx;
		var dy = directions[this.direction].dy;

		if(Math.abs(headPosition.x - foodPosition.x) < 8 && Math.abs(headPosition.y - foodPosition.y) < 8) {

			var lastPartIndex = this.parts.length - 1;
			var lastPartData = this.parts[lastPartIndex].getPosition();
			var newSnakePart = new SnakePart(1, 1, lastPartData.size);
			Snake.addSnakePart(newSnakePart);

			return {

				parts: Snake.parts,
				if: true
			}
		}

		return {

			parts: Snake.parts,
			if: false
		}
	}

	Snake.prototype.move = function () {
		var x, y;
		var dx, dy, size;
		var dx = directions[this.direction].dx;
		var dy = directions[this.direction].dy;
		for (var i = this.parts.length - 1; i >= 1; i--) {
			var position = this.parts[i - 1].getPosition();
			this.parts[i].changePosition(position.x, position.y);
		}
		var head = this.head();
		var headPosition = head.getPosition();
		var newHeadPosition = {
			x: headPosition.x + head.size * dx,
			y: headPosition.y + head.size * dy
		};
		head.changePosition(newHeadPosition.x, newHeadPosition.y);
	}

	Snake.prototype.changeDirection = function (newDirection) {
		if (newDirection >= 0 && newDirection < directions.length &&
			(this.direction + newDirection) % 2) {
			this.direction = newDirection;
		}
	}

	Snake.prototype.getPosition = function () {
		return this.head().getPosition();
	}

	Snake.prototype.changePosition = function (x, y) {
		this.head().changePosition(x, y);
	}

	function Wall(x, y, size) {
		GameObject.call(this, x, y, size);
	}

	Wall.prototype = new GameObject();
	Wall.prototype.constructor = Wall;

	function Food(x, y, size) {
		GameObject.call(this, x, y, size);
	}

	Food.prototype = new GameObject();
	Food.prototype.constructor = Food;

	return {
		get: function (x, y, size) {
			return new Snake(x, y, size);
		},
		getFood: function (x, y, size) {
			return new Food(x, y, size);
		},
		SnakeType: Snake,
		SnakePartType: SnakePart,
		HeadSnakePartType: HeadSnakePart,
		FoodType: Food,
		WallType: Wall
	};
}());