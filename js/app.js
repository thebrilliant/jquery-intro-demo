/* app.js
* main script file for our little application
* */

"use strict";

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
	$($(this).attr('href')).fadeToggle(6000);
});

$(onReady);