function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 


var nota = Math.round(Math.random()*10);


alert(nota);
	
if(nota ==9 || nota == 10){

	alert("Excelente");
}

if(nota >=4 && nota <9){

	alert("Aprobo");
}

if(nota <4 ){

	alert("Vamos, la proxima se puede");
}
}//FIN DE LA FUNCIÓN

