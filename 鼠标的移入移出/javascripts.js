window.onload = function () {
	var div1 = document.getElementById('over');
	var div2 = document.getElementById('out');
	var timer = null;
	div1.onmouseover = function () {
		clearTimeout(timer);
		div2.style.display = 'block';
	}
	div1.onmouseout = function () {
		timer = setTimeout(function(){div2.style.display = 'none'}, 500);
	}
	div2.onmouseover = function(){
		clearTimeout(timer);
	}
	div2.onmouseout = function(){
		timer = setTimeout(function(){div2.style.display = 'none'}, 500);
	}
};