function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeros;


while(contador < 5){

contador++;

numeros = prompt("Ingrese un numero");

numeros = parseInt(numeros);

while(isNaN(numeros)){

  numeros = prompt();
  numeros = parseInt(numeros);
}

acumulador = acumulador + numeros;



}


document.getElementById('suma').value=acumulador;

document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN
