function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeros;


while(contador < 5){   

numeros = prompt("Ingrese un numero");

numeros = parseInt(numeros);

acumulador = acumulador + numeros;

contador++;

}



document.getElementById('suma').value=acumulador;

document.getElementById('promedio').value=acumulador/5;


}//FIN DE LA FUNCIÓN