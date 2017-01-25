var animatePoints = function() { 
	var points = document.getElementsByClassName('point');
	
	var revealPoint = function(points) {
		for (var i=0; i<points.length; i++) {
			points[i].style.opacity = 1;
			points[i].style.transform = "scaleX(1.1) translateY(3.2rem)";
			points[i].style.msTransform = "scaleX(1.1) translateY(3.2rem)";
			points[i].style.WebkitTransform = "scaleX(1.1) translateY(3.2rem)";
			points[i].style.color = "lightblue";
		}
	}
	
	revealPoint(points);
};	
