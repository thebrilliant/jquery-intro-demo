/* app.js
* main script file for our little application
* */

"use strict";

var tile = 'img/sec1.jpg';
var info = 'some other data';

var gameBoard = $('#game-board');

//create and configure a new img element
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');

//use the .data() method to associate extra data with HTML elements
newTile.data('assocTile', tile); //first param is key
newTile.data('tileInfo', info);

//add to the game board
gameBoard.append(newTile);

//when an image in gameboard is clicked
$('#game-board img').click(function() {
	//remember that 'this' refers to the DOM element that raised
	//the event; wrapped in jQuery $() to get more functionality
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);

	console.log(tileData1);
	console.log(tileData2);
});

/*
//select all navigation links
var allNavLinks = $('nav a');

//select all images
var allImgs = $('img');

//select all sections
var allSections = $('section');

function onReady() {

	//add attribute to all nav links to open in new tab
	//allNavLinks.attr('target', '_blank');
	//allNavLinks.addClass('awesomesauce');

	$('nav').slideUp(2000);
	$('nav').slideDown();
	allSections.hide();


}

$('#exit-button').dblclick(function() {
	//show the modal to the world
	$('#confirm-exit-modal').modal();
});

$('#confirm-exit-button').click(function() {
	window.location.href = 'http://courses.washington.edu/info343/morris';
});

allImgs.hover(function() {
	//console.log($(this));
	$(this).addClass('awesomesauce');
});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavLinks.click(function() {
	//the jQuery version
	console.log($(this).attr('href'));

	//plain version
	console.log(this);

	//acts on the jQuery object contianing this element
	//$(this).addClass('awesomesauce');

	allSections.hide();
	$($(this).attr('href')).fadeToggle(6000).addClass('awesomesauce');
});

$(onReady);
*/