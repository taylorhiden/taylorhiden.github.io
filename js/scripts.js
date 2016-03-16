// ADVOCACY PAGE
$('.readgiving').click(readGiving);
$('.readlgbt').click(readLgbt);
$('.readimmigration').click(readImmigration);
$('.readtax').click(readTax);
$('.readenergy').click(readEnergy);
$('.readestatetax').click(readEstatetax);
$('.readinvestment').click(readInvestment);
$('.readmessaging').click(readMessaging);
$('.readtech').click(readTech);
$('.readwater').click(readWater);
$('.readschool').click(readSchool);


function readGiving() {
  $('#show_giving_on_click').slideToggle();
}

function readLgbt() {
	$('#show_lgbt_on_click').slideToggle();
}

function readImmigration() {
	$('#show_immigration_on_click').slideToggle();
}

function readTax() {
	$('#show_tax_on_click').slideToggle();
}

function readEnergy() {
  $('#show_energy_on_click').slideToggle();
}

function readEstatetax() {
  $('#show_estate_on_click').slideToggle();
}

function readInvestment() {
  $('#show_investment_on_click').slideToggle();
}

function readMessaging() {
  $('#show_message_on_click').slideToggle();
}

function readTech() {
  $('#show_tech_on_click').slideToggle();
}

function readWater() {
  $('#show_water_on_click').slideToggle();
}

function readSchool() {
  $('#show_schools_on_click').slideToggle();
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

