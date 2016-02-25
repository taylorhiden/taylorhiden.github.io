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


//DEVELOPMENT PAGE

$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');

  $('#myTabs a[href="#profile"]').tab('show'); // Select tab by name
	$('#myTabs a:first').tab('show'); // Select first tab
	$('#myTabs a:last').tab('show'); // Select last tab
	$('#myTabs li:eq(2) a').tab('show'); // Select third tab (0-indexed)
});


//MEDIA

$(document).ready(function(){

$('.hamburger').click(function(){

$('header .main_menu').toggleClass('appear');


});


});

//CONTACT PAGE

$("form").submit(checkEverything);
 
   function checkEverything(event) {
   		event.preventDefault();

   		checkName();
   		checkEmail();
      	checkSubject();
   }

   function checkName () {

       var firstName = $('#first').val();
       console.log(firstName);

       var lastName = $('#last').val();

       if (firstName == false) {
           alert("Please enter your first name");
       } else if (lastName == false) {
           alert("Please enter your last name");
       } else if (firstName == false && lastName == false){
          alert("Please enter your first and last name")
       } else if (firstName == true && lastName == true) {
       }
   }

   function checkEmail() {

   		var email = $('#email').val();

   		if (email == false) {
   		 alert('Invalid email');
   		} else {
   			
   		}
   }

   function checkSubject() {
   		var subject = $('#subject').val();

   		if (subject == false) {
   			alert('Please enter a subject')
   		} else {

   		}
   }
