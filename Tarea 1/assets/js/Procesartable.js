$(document).ready(function(){

$('.ProcesarTabla').click(function(){
var Run = $('#txt_run').val();
var Nombres = $('#txt_nombres').val();
var Correo= $('#txt_correo').val();
var Edad= $('#txt_edad').val();
var Telefono= $('#txt_telefono').val();


$('.MostrarRespuesta').html("<p> Run: "+Run+" <br/>Nombres: "+Nombres+"<br/>Correo: "+Correo+" <br/>Edad: "+Edad +"<br/>Telefono:"+Telefono +" </p>")

});
})
