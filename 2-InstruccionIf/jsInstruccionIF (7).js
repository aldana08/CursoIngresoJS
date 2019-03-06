function mostrar()
{
//tomo la edad  
var edad;
var sexo;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

sexo = document.getElementById("estadoCivil").value;

if(edad <18 && sexo !="Soltero"){

    alert("Es muy pequeño para NO ser soltero");

}


}//FIN DE LA FUNCIÓN