// JavaScript Document
$(document).ready(function(e) {
//COMENTARdocument.addEventListener("deviceready",function(){
	$('#btndatos').on('click',function() {
		
	alert('Hola');
	$('body').pagecontainer("change","#datos",
	{transition:"flip"}); // pasa a la otra pagina 
	}); // click btndatos
	
	$('#btnresultado').on('click',function()  {
	$('body').pagecontainer("change","#resultado",
	{transition:"flip"});	
		 
	var imc;
	var peso= $('#txtpeso').val();
	var talla=$('#txttalla').val();
	imc=(peso/(talla*talla));
	$('#imc').text('Nombre ' + $('#txtnombre').val()+' imc= '+imc);
   });// click siguiente
//}); 
});

