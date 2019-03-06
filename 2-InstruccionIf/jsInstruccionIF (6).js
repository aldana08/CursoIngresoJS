function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if(edad >=18){
    alert("Eres mayor de edad")
}
if(edad >=13 && edad<=17){
    alert("Eres adolescente");
}
if(edad<13){
    alert("Eres un niño");
}


}//FIN DE LA FUNCIÓN