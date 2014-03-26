var controller = (function () {
	'use strict';
	var canvasElement = document.getElementById("snake-canvas"),
		startBtn = document.getElementById("startBtn"),
		stopBtn = document.getElementById("stopBtn"),
		canvasRenderer = renderers.getCanvas(canvasElement),
		game = games.get(canvasRenderer);
	stopBtn.disabled = true;

	document.addEventListener("keydown", function (ev) {
		var keyCode = ev.keyCode;
		if (keyCode === 20 || keyCode === 32) {
			if (game.getState() === "running") {
				performGameStop();
			} else {
				performGameStart();
			}
		}
	});

	function performGameStart() {
		game.start();
		startBtn.disabled = true;
		stopBtn.disabled = false;
	}

	function performGameStop() {
		game.stop();
		startBtn.disabled = false;
		stopBtn.disabled = true;
	}

	function startNewGame() {

		game = games.get(canvasRenderer);
		startBtn.disabled = false;
		stopBtn.disabled = true;
	}

	startBtn.addEventListener("click", function (ev) {
		performGameStart();
	});

	stopBtn.addEventListener("click", function () {
		performGameStop();
	});

	return {

		startNewGame: startNewGame
	}
}());