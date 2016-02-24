// ADVOCACY PAGE
$('.readlgbt').click(readLgbt);
$('.readimmigration').click(readImmigration);
$('.readtax').click(readTax);


function readLgbt() {
	$('#show_lgbt_on_click').slideToggle();
}

function readImmigration() {
	$('#show_immigration_on_click').slideToggle();
}

function readTax() {
	$('#show_tax_on_click').slideToggle();
}


// DIGITAL PAGE
$(document).ready(function() {

var pictures = ['images/array/Haley.jpg', 'images/array/Margaret quote.jpg', 'images/array/McKinnon.jpg', 'images/array/delegates post-IA.jpg'];
var currentImage = 0;

$('#nextbtn').click(function() {
	event.preventDefault();
	currentImage = currentImage + 1;

	if (currentImage == pictures.length) {
           currentImage = 0;
       }

$('#facebook_graphics').attr('src', pictures[currentImage]);
   });

$('#previousbtn').click(function() {
       currentImage = currentImage - 1;

 if (currentImage < 0) {
     currentImage = pictures.length - 1;
       }

 $('#facebook_graphics').attr('src', pictures[currentImage]);
   });

});


//Development Page

$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');

  $('#myTabs a[href="#profile"]').tab('show'); // Select tab by name
	$('#myTabs a:first').tab('show'); // Select first tab
	$('#myTabs a:last').tab('show'); // Select last tab
	$('#myTabs li:eq(2) a').tab('show'); // Select third tab (0-indexed)
});
