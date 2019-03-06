function mostrar()
{
var num;
var cont=0;
var sumaNegativos=0;
var sumaPositivos=0;
var cantPositivos=0;
var cantNegativos=0;
var cantCeros = 0;
var cantPares = 0;
var promedioPositivos;
var promedioNegativos=0;
var restaPosYNeg;
var confirm;

do{

    num = prompt("Ingrese un numero");

    while(isNaN(num)){
        num = prompt("Error, ingrese un numero");
    }
    
    num = parseInt(num);
    
    if(num < 0){//suma negativos, contar cant de neg ingre, promedio de neg
        sumaNegativos = sumaNegativos + num;
        cantNegativos++;
    }
    
    if(num >=0){//suma positivos, contar cant de pos ingre, promedio de pos
        sumaPositivos = sumaPositivos + num;
        cantPositivos++;
    }
    
    if(num == 0){
        cantCeros++;
    }
    
    if(num %2 == 0){
        cantPares++;
    }
    
    confirm = window.confirm("desea agregar otro numero mas?");

}while(confirm == true);


promedioPositivos = sumaPositivos / cantPositivos;
promedioNegativos = sumaNegativos / cantNegativos;
restaPosYNeg = cantPositivos - cantNegativos;



document.write("1)La suma de negativos es " + sumaNegativos + "<br>"
             + " 2)La suma de los positivos es " + sumaPositivos + "<br>"
             + " 3)La cantidad de positivos es " + cantPositivos + "<br>"
             + " 4)La cantidad de negativos es " + cantNegativos + "<br>"
             + " 5)La cantidad de ceros es " + cantCeros + "<br>"
             + " 6)La cantidad de numeros pares es " + cantPares + "<br>"
             + " 7)El promedio de positivos es " + promedioPositivos + "<br>"
             + " 8)El promedio de los negativos es " + promedioNegativos + "<br>" 
             + " 9)La diferencia entre positivos y negativos es " + restaPosYNeg)




}//FIN DE LA FUNCIÓN


