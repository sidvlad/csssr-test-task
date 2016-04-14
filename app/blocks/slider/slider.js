var slider = (function () {
	var init = function () {
		var body = document.querySelector('body');
		var levelsElement = document.querySelector('.slider__levels');
		var hiddenInput = document.querySelector('.slider__currentlevel');
		var line = document.querySelector('.slider__line');
		var dot = document.querySelector('.slider__dot');
		var offset = line.offsetLeft;
		var width = line.offsetWidth;
		var mousedown = false;
		var levelAll = document.querySelectorAll('.slider__level');
		var i;

		for (i = 0; i < levelAll.length; i += 1) {
			if (levelAll[i].dataset.lval != 0 && levelAll[i].dataset.lval != 100) {
				levelAll[i].style.left = levelAll[i].dataset.lval + '%';
			}
		}
		setDot(hiddenInput.value);
		levelsElement.onclick = function (event) {
			var target = event.target;
			setVal(target.dataset.lval);
		};
		hiddenInput.onchange = function () {
			setDot(hiddenInput.value);
		};
		dot.onmousedown = function () {
			mousedown = true;
		};
		body.onmouseup = function () {
			if (mousedown) {
				mousedown = false;
			}
		};
		line.onclick = function (event) {
			setVal(Math.round((event.pageX - offset) * 100 / width));
		};
		body.onmousemove = function (event) {
			if (mousedown) {
				setVal(Math.round((event.pageX - offset) * 100 / width));
			}
		};

		function setDot(val) {
			dot.style.left = val + '%';
		}

		function setVal(val) {
			if (val < 0 || val > 100) {
				return;
			}
			hiddenInput.value = val;
			hiddenInput.onchange();
		}
	};
	return {
		init
	};
})();
module.exports = slider;
