function mostrar()
{
	var num = 0;

	while(num >= 0 && num <= 9){
		//numero = prompt("Numero erroneo");
		var num = prompt("ingrese un número entre 0 y 9.");
		document.getElementById("Numero").value = num;
	}

	if(num < 0 && num > 9){
		alert("No es un numero del 0 al 9");
	}

}//FIN DE LA FUNCIÓN