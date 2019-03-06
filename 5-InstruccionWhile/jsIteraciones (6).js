function mostrar()
{

	var num;
	var cont=0;
	var suma=0;


	//num = prompt("Ingrese un numero");

	while(cont <5){

		num = prompt("Ingrese un numero");

		while(isNaN(num)){
			num = prompt("No se ingreso numero, intentelo de nuevo");
		}
		num = parseInt(num);
		suma = suma + num;
		cont++;


	}

alert(cont);
	document.getElementById("suma").value = suma;

	//ducument.getElementById("promedio").value = promedio;
	document.getElementById('promedio').value=suma/cont;


}//FIN DE LA FUNCIÓN
