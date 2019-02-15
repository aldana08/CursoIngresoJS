function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var aleatorio = Math.round(Math.random()*10);
	alert("Mostrar numero aleatorio entre 1 y 10: " + aleatorio);

	if(aleatorio <=10 && aleatorio >=9 ){

		alert("EXCELENTE");
	}

	if(aleatorio >=4 && aleatorio <9 ){

		alert("APROBO");
	}

	if(aleatorio <4 ){

		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN

