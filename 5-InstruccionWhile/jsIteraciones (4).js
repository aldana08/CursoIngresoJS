function mostrar()
{
	var num=0;
	
	num = prompt("Ingrese un numero del 0 al 9");
	num = parseInt(num);

	while(isNaN(num) || num >9){

		alert("No es valido");
		num = prompt("Ingrese un numero del 0 al 9");
		num = parseInt(num);		
	}

	document.getElementById("Numero").value = num;
	//num++;

}//FIN DE LA FUNCIÓN