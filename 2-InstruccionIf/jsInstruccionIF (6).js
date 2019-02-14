function mostrar()
{
//tomo la edad  

var edad

edad = document.getElementById("edad").value;

edad = parseInt(edad);

if(edad >=13 && edad<= 17){

    alert("eres adolescente");
}

if(edad >=18 ){

    alert("eres mayor de edad")
}

else{
    
    alert("eres un niño");
}


}//FIN DE LA FUNCIÓN