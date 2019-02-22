function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeros;

	while(respuesta == "si"){

		numeros = prompt("ingrese un numero");

		numeros = parseInt(numeros);

		acumulador = acumulador + numeros;

		contador++;

		respuesta = prompt("Desea seguir agregando numeros?");


	}

	acumulador = parseInt(acumulador);

	contador = parseInt(contador);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value = acumulador/contador;

}//FIN DE LA FUNCIÓN



