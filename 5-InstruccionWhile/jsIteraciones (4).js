function mostrar()
{

	var cont;
	
	cont = 0;

	var numero = prompt("ingrese un número entre 0 y 10.");

	document.getElementById("Numero").value = numero;


	while(numero >0 && numero<9){

		numero = prompt("Numero erroneo");

		console.log (cont++);

	}

	if(numero > 10){

		alert("No es un numero del 0 al 9");
	}

}//FIN DE LA FUNCIÓN