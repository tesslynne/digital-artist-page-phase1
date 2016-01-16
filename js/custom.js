/*Reference:
http://getbootstrap.com/javascript/#carousel
- explore many options there

interval
number 	5000
The amount of time to delay between automatically cycling an item. 
If false, carousel will not automatically cycle.
*/

$('.carousel').carousel() {
	interval: 500;
});



/*
Note default behavior is
Pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave.
*/