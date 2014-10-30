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

//iterate over array, calling passed function for each element
//also works with objects
var array = ['a', 'b', 'c', 'd'];

_.forEach(array, function(element, index) {
	console.log(element);
	console.log(index);
});

_.difference(array, ['c', 'd']);

var unionArray = _.union(array, ['e', 'f']);

_.intersection(array, ['b', 'c']);

var numArray = [1,2,3,4,5,6,7];

//sho me the even values of the arra
var evens = _.filter(numArray, function(num) {return 0 == num % 2;});
console.log(evens);

//shuffle() returns a new shuffled array,
//leaving the original array intact
var shuffledArray = _.shuffle(numArray);

console.log(shuffledArray);
console.log(numArray);
console.log(array);
console.log(unionArray);

/*
 .-') _          _   .-')       ('-.  ,---.,---.,---. 
(  OO) )        ( '.( OO )_   _(  OO) |   ||   ||   | 
/     '._ ,-.-') ,--.   ,--.)(,------.|   ||   ||   | 
|'--...__)|  |OO)|   `.'   |  |  .---'|   ||   ||   | 
'--.  .--'|  |  \|         |  |  |    |   ||   ||   | 
   |  |   |  |(_/|  |'.'|  | (|  '--. |  .'|  .'|  .' 
   |  |  ,|  |_.'|  |   |  |  |  .--' `--' `--' `--'  
   |  | (_|  |   |  |   |  |  |  `---..--. .--. .--.  
   `--'   `--'   `--'   `--'  `------''--' '--' '--'  
*/

var startTime = _.now();
console.log(startTime);

var timer; //hold our timer value

//use window.setInterval to create a timer that runs a function
//every second

timer = window.setInterval(onTimer, 100);

function onTimer () {
	//compare _.now() to start time to get elapsed time
	//Math.floor() rounds down to the nearest intege
	var elapsedSeconds = Math.floor((_.now() - startTime) / 100);
	console.log(elapsedSeconds);
	$('#game-board h2').css("font-size", elapsedSeconds + 'px');
}

function stopTimer () {
	window.clearInterval(timer);
	$('#game-board').empty();
}

$('.jumbotron').click(stopTimer);


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