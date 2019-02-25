function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

  var respuesta="si";
  var numero;

  while(respuesta == "si"){
    numero = prompt("ingrese un numero");
    numero = parseInt(numero);


    if(numero >= 0){
      positivo = positivo + numero;
      //contador++;
    }else{
      negativo = negativo * numero;
    }

    respuesta = prompt("Desea seguir agregando numeros?si/no");

  }

//alert(positivo);


  //acumulador = parseInt(acumulador);
  //contador = parseInt(contador);
  document.getElementById("suma").value = positivo;
  document.getElementById("producto").value = negativo;

}//FIN DE LA FUNCIÓN




