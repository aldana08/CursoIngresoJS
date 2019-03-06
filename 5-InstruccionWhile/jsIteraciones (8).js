function mostrar()
{
    var num;
	var suma=0;
    var confirm=true;
    var multiplicar=1;
	
	while(confirm == true){

		num = prompt("Ingrese un numero");

		while(isNaN(num)){
			num = prompt("No se ingreso numero, intentelo de nuevo");
		}

        num = parseInt(num);
        
        if(num >=0){
		    suma = suma + num;
		    
        }

        if(num < 0){
            multiplicar = multiplicar * num;
            
        }

		confirm = window.confirm("desea agregar otro numero mas?");
		
	}


	document.getElementById("suma").value = suma;
	document.getElementById('producto').value=multiplicar;

}//FIN DE LA FUNCIÓN




