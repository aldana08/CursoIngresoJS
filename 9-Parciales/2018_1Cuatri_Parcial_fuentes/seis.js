function mostrar()
{
    var hora

    hora = prompt("Ingrese un horario");


    hora = parseInt(hora);

    switch(hora){

        case 6 :
        case 7 :
        case 8 :
        case 9 :
        case 10 :
        case 11 :
        alert("es de mañana");
        break;
    }

    if(hora){

        alert("es de tarde");
    }

    else{
        alert("es de noche");
    }




     
    

}
