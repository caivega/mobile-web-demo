"use strict";

var canvas;
var ctx;
var tool;

$(function() {
	setupPalette();

	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");

	$('.swatch').click(function() {
		changeColor($(this).css('background-color'));
	});

	$('.draw-tool').click(function() {
		$('')
		console.log($(this).val());
	});
	
	var startingPosition;
	$(canvas)
		.mousedown(function(event) {
			startingPosition = getMousePosition(event);
		})
		.mouseup(function(event) {
			var endingPosition = getMousePosition(event);
			drawRectangle(startingPosition.x, startingPosition.y, endingPosition.x, endingPosition.y);
		});

	$('#delete').click(function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});
	
});

function changeColor(color) {
	ctx.fillStyle = color;
}

function drawRectangle(x1Coord, y1Coord, x2Coord, y2Coord) {
	var xCoord = (x1Coord < x2Coord) ? x1Coord : x2Coord;
	var yCoord = (y1Coord < y2Coord) ? y1Coord : y2Coord;
	var width = Math.abs(x2Coord - x1Coord);
	var height = Math.abs(y2Coord - y1Coord);
	ctx.fillRect(xCoord, yCoord, width, height);
}

function drawCircle() {

}

function drawLine() {

}

function freeDraw() {

}

function clearCanvas() {

}

function setupPalette() {
	var colors = ['BLACK', 'WHITE', 'GRAY', 'BLUE', 'RED', 'YELLOW', 'GREEN', 'PURPLE'];

	var palette = $('#colors');
	$.each(colors, function(index, color) {
		var swatch =  $('<li>').addClass('swatch');
		swatch.css('background-color', color);
		swatch.appendTo(palette);
	});
}


// Credit: http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
function getMousePosition(event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: Math.round((event.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
		y: Math.round((event.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
	};
}