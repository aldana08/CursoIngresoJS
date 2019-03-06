function mostrar()
{

var sexo;

sexo = prompt("Ingrese su sexo f o m")

while(sexo !="f" && sexo != "m"){

  alert("Sexo ingresado no es valido")
  sexo = prompt("Ingrese su sexo f o m")

}

document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN
