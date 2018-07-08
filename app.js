$(document).ready(function(){
	var pesos;

    $(".pesos").on('keyup',function(){
               pesos=$('.pesos').val();

               });
    $(".dolar").on('keyup',function(){
               pesos=$('.dolar').val();

               });


      $.ajax({
            url: 'https://mindicador.cl/api',
            method: 'GET'
         }).then(function(response){
         	var dolar=response.dolar.valor;
         	var euro=response.euro.valor;
         	var uf=response.uf.valor;
         	$('#dolar').html(dolar.toLocaleString());
         	$('#euro').html(euro.toLocaleString());
         	$('#uf').html(uf.toLocaleString());
         	$('#utm').html(response.utm.valor);

            $(".button__pesos").click(function(e){
	        e.preventDefault();
	        var resultado= pesos/dolar;
	        $('.resultado').html(resultado.toLocaleString());
	        });

	        $(".button__dolar").click(function(e){
	        e.preventDefault();
	        var resultado2= pesos*dolar;
	        $('.resultado__dolar').html(resultado2.toLocaleString());

	     });


         } );

});