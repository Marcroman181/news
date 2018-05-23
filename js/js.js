var cargas = 1;
var row=0;
var scroll=false;
var cargarSiguiente=true;

//-------------------------------EVeNTOS--------------------------------------------

$(document).ready(function(){

	$(window).scroll(function () {
		if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && scroll && cargarSiguiente) {
			cargarSiguiente=false;
			cargar();
		}
	});


	$(".botonscroll").click(function(){
		if(scroll){
			scroll=false;
			$("#scrollon").css("display","none");
			$("#scrolloff").css("display","inline-block");
			$("#scrollp").html("Scroll desactivado");
			if(cargas<=3){
				$("#divcargar").css("display","inline-block");
			}
		}else{
			scroll=true;
			$("#scrolloff").css("display","none");
			$("#scrollon").css("display","inline-block");
			$("#divcargar").hide();
			$("#scrollp").html("Scroll activado");
		}
	});

	$("#cargar").click(function(){
		cargar();
	});
	
	$("body").on("click", ".foto", function(){
		var id = $(this).attr('id');
		$("#imgmodal").attr("src","img/imgbig/"+id+".jpg");
    });
	
	$('.modal').on('shown.bs.modal', function() {
		$(".modal").css("padding",'0px');
	});
	
});


//-----------------------FUNCIONES--------------------------------------------

function cargar() {
	if (cargas <= 3) {
		$("#cargando").show();
		$.getJSON("https://rawgit.com/Marcroman181/news/master/json/news"+cargas+".json", function(result){
			addnews(result);
			$("#cargando").hide();
		}); 
	}
};

function addnews(jsonObject) {

	$("#contenidor").append('<div id="row'+row+'" class="row"></div>');
	$.each(jsonObject, function (numero, noticia) {
		$("#row"+row).append('<div class="col-sm-6">' +
			'<div class="thumbnail">' +
			'<img id="news'+ ((cargas-1)*2+numero+4) +'" class="img-responsive foto" src='+noticia.imgmid+' alt="'+noticia.title+'" data-toggle="modal" data-target="#myModal">' +
			'<div class="caption">' + '<h2 class="text-left"><b>'+noticia.title+ "</b></h2>" +
			'<h6 class="text-justify">'+noticia.description+'</h6>' +
			'<p class="text-right"><em>'+noticia.datetime+'</em></p>'+'</div></div></div>');
	})	
	cargas=cargas+1;
	row++;
	if(cargas>3){
		$("#divcargar").hide();
		$("#NoNews").show();
	}
	cargarSiguiente=true;
};