function mostrar()
{
//tomo la edad  

var edad
var estadocivil



edad = document.getElementById("edad").value;
estadocivil = document.getElementById("estadoCivil").value;

//alert(estadocivil);
edad = parseInt(edad);

if(estadocivil == "Soltero" && edad >= 18){
    alert("Es soltero y no es menor");
}

	


}//FIN DE LA FUNCIÓN

