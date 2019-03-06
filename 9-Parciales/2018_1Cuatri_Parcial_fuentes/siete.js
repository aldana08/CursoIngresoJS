function mostrar()
{
    var nota;
    var sexo;
    var cont=0;
    var totalNotas=0;
    var promedioNotas;
    var notaMasBaja=10;
    var sexoNotaMasBaja;
    var notaMayorYMasc=0;

    while(cont <5){
        nota = prompt("Ingrese la nota obtenida");

        while(isNaN(nota)){
            nota = prompt("Error, ingrese nota nuevamente");
        }
        
        while(nota <=0 || nota >=10){
            nota = prompt("Error, ingrese nota entre 0 y 10");
        }
        nota = parseInt(nota);

        sexo = prompt("Ingrese su genero f o m");

        while(sexo !="f" && sexo !="m"){
            sexo = prompt("Error, ingrese f o m")
        }
        totalNotas = totalNotas + nota;

        if(notaMasBaja > nota){
            notaMasBaja = nota;
            sexoNotaMasBaja = sexo;
        }
        if(nota >= 6 && sexo == "m"){
            notaMayorYMasc++;
        }
        cont++;   
    }

    promedioNotas = totalNotas / cont;

    alert(" El promedio de las notas totales es " + promedioNotas + 
    " \nLa nota mas baja es " + notaMasBaja + 
    " \nY el genero de la persona con la nota mas baja es " + sexoNotaMasBaja + 
    " \nLa cantidad de masculinos con nota mayor o igual a 6 es " + notaMayorYMasc)




}

