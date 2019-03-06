function mostrar()
{
var num;
var max;
var min;
var confirm;

num = prompt("Ingrese un numero");
	
while(isNaN(num)){
	num = prompt("No es un numero. Ingrese un numero nuevamente");
}

num = parseInt(num);
max = num;
min = num;
confirm = window.confirm("desea agregar otro numero mas?");

while(confirm == true){

	num = prompt("Ingrese un numero");
	
	while(isNaN(num)){
		num = prompt("No es un numero. Ingrese un numero nuevamente");
	}

	num = parseInt(num);

	if(num < min){
		min = num;
	}

	if(num > max){
		max = num;
	}

	confirm = window.confirm("desea agregar otro numero mas?");

}

document.getElementById("maximo").value = max;
document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN
