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

var body=document.body;
var register_mail=document.getElementById('register_mail');
var register_password=document.getElementById('register_password');
var register_password_check=document.getElementById('register_password_check');
var buttom_register=document.querySelector('.buttom_register');
var xhr=new XMLHttpRequest();

function sendData(e){
	e.preventDefault();
	if(register_password.value==register_password_check.value){
		xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		var str ='email='+register_mail.value+'&password='+register_password.value;
		xhr.send(str);
		register_password.value='';
		register_password_check.value='';
	}else{
		alert('兩次輸入的密碼不相同')
		register_password.value='';
		register_password_check.value='';
	}
};

buttom_register.addEventListener('click',sendData,false);

xhr.onload=function(){
	var array=[];
	array=JSON.parse(xhr.responseText);
	alert(array.message);
}

body.addEventListener('keydown',function(e){
	if(e.keyCode=='13'){sendData(e);}
},false);
