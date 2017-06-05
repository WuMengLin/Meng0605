$(document).ready(function() {
	$('.mark').hide();
	$('.classification li a').eq(3).addClass('active');
	$('.showmenu').on('click', function(e) {
		e.preventDefault();
    	$('body').toggleClass('menu-show');
	});
	$('.like').on('click', function(e) {
		e.preventDefault();
    	$(this).find('.mark').toggle(0,'.mark');
    	$(this).find('.unmark').toggle(0,'.unmark');
	});
	$('.classification li a').on('click', function(e) {
		e.preventDefault();
		$('.classification li a').removeClass('active');
		$(this).addClass('active');
	});
	$('#login_mail').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}	
	});
	$('#login_password').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}
	});
	$('#register_mail').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}
	});
	$('#register_password').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}
	});
	$('#register_password_check').blur(function(e) {
		e.preventDefault();
		if ($(this).val()!="") {$(this).addClass('active');}
		else {$(this).removeClass('active');}
	});
	$('.meals li:eq(3) .like').click();
	type="text/javascript"
	var shoppingcart=0;
	$('.meals li .add').click(function(e) {
		shoppingcart=shoppingcart+1;
		document.getElementById("total").innerHTML=shoppingcart;
	});
	$('.meals li:eq(3) .add').click();
});