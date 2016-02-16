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