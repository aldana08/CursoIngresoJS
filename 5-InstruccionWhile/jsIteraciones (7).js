function mostrar()
{

	var num;
	var cont=0;
	var suma=0;
	var confirm=true;
	
	while(confirm == true){

		num = prompt("Ingrese un numero");

		while(isNaN(num)){
			num = prompt("No se ingreso numero, intentelo de nuevo");
		}

		num = parseInt(num);
		suma = suma + num;
		cont++;


		confirm = window.confirm("desea agregar otro numero mas?");
		
	}


	document.getElementById("suma").value = suma;
	document.getElementById('promedio').value=suma/cont;

}//FIN DE LA FUNCIÓN





