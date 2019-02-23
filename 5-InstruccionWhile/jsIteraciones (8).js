function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

  var respuesta='si';
  var numeros;

  while(respuesta == "si"){

		numeros = prompt("ingrese un numero");

    numeros = parseInt(numeros);

    positivo = parseInt(positivo);

		positivo = positivo + numeros;

		contador++;

    respuesta = prompt("Desea seguir agregando numeros?");

    document.getElementById('suma').value=positivo;

    if(numeros<1){

      negativo = negativo * numeros;
    }

  }



  acumulador = parseInt(acumulador);

  contador = parseInt(contador);





  document.getElementById('producto').value=negativo;





}//FIN DE LA FUNCIÓN


