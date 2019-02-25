function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numeros;

	while(respuesta == "si"){

		numeros = prompt("ingrese un numero");
		numeros = parseInt(numeros);

		if(Number.isNaN(numeros) == false){
			acumulador = acumulador + numeros;
			respuesta = prompt("Desea seguir agregando numeros? si/no");
			contador++;
		}else{
			alert("No es un numero valido,ingrese numero nuevamente");
		}

	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value = acumulador/contador;

}//FIN DE LA FUNCIÓN





