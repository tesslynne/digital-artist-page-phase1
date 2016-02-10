/*Reference:
http://getbootstrap.com/javascript/#carousel
- explore many options there

interval
number 	5000
The amount of time to delay between automatically cycling an item. 
If false, carousel will not automatically cycle.
*/

$(".carousel").carousel( {
	interval: 500
});



/*
Note default behavior is
Pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave.
*/

//script for VIDEO CONTENT in modals//

// $(document).ready(function(){
//     /* Get iframe src attribute value i.e. YouTube video url
//     and store it in a variable */
//     var url = $("civilwar-trailer").attr("src")
    
//     /* Assign empty url value to the iframe src attribute when
//     modal hides, which stops the video playing */
//     $("civilwar").on("hide.bs.modal", function(){
//         $("civilwar-trailer").attr("src", "")
//     });
    
//     /* Assign the initially stored url back to the iframe src
//     attribute when modal is displayed again */
//     $("civilwar").on("show.bs.modal", function(){
//         $("civilwar-trailer").attr("src", url)
//     });
// });

// $(document).ready(function(){
//     $('.modal fade').each(function(){
//             var src = $(this).find('iframe').attr('src');

//         $(this).on('click', function(){

//             $(this).find('iframe').attr('src', '');
//             $(this).find('iframe').attr('src', src);

//         });
//     });
// });

$('#civilwar').on('hidden.bs.modal', function () {
	console.log("modalclose")
	$('iframe').trigger('pause');
});
console.log("hey")