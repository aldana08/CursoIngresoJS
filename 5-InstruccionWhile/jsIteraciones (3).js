function mostrar()
{
    var cont;

    cont = 1;

var clave = prompt("ingrese el número clave.");

    while(clave != "utn750" && cont <3){

        clave = prompt("Error ingrese la clave nuevamente");

        cont++;

    
}
if(cont == 3){
    
    alert("Se ingresaron 3 intentos. No se pueden ingresar mas");
}

}//FIN DE LA FUNCIÓN
