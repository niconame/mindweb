$(document).ready(function() {
	var redLeft = $('#red-left');
	var redRight = $('#red-right');
	var yellowLeft = $('#yellow-left');
	var yellowRight = $('#yellow-right');
	var blueLeft = $('#blue-left');
	var blueRight = $('#blue-right');
	var greenLeft = $('#green-left');
	var greenRight = $('#green-right');
	var purpleLeft = $('#purple-left');
	var purpleRight = $('#purple-right');

/* Yellow Circle Animations */
yellowLeft.css({
		r: 4});

yellowLeft.animate({r:10.5}, 400);

yellowRight.css({
		opacity: 0,
		r: 4});
	yellowRight.delay(250).animate({opacity:1, r:10.5}, 400);

/* Left Circle Animations */

redLeft.css({
		opacity: 0,
		r: 4});
redLeft.delay(550).animate({opacity:1, r:10.5}, 400);

blueLeft.css({
		opacity: 0,
		r: 4});
	blueLeft.delay(580).animate({opacity:1, r:10.5}, 400);

purpleLeft.css({
		opacity: 0,
		r: 4});
	purpleLeft.delay(610).animate({opacity:1, r:10.5}, 400);

greenLeft.css({
		opacity: 0,
		r: 4});
	greenLeft.delay(640).animate({opacity:1, r:10.5}, 400);


/* Left Circle Animations */
redRight.css({
		opacity: 0,
		r: 4});
	redRight.delay(2127).animate({opacity:1, r:10.5}, 400);

blueRight.css({
		opacity: 0,
		r: 4});
	blueRight.delay(2750).animate({opacity:1, r:10.5}, 400);

purpleRight.css({
		opacity: 0,
		r: 4});
	purpleRight.delay(1550).animate({opacity:1, r:10.5}, 400);

greenRight.css({
		opacity: 0,
		r: 4});
	greenRight.delay(1575).animate({opacity:1, r:10.5}, 400);
});