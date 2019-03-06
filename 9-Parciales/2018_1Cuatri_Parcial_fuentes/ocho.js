function mostrar()
{
    var letra;
    var num;
    var confirm;
    var cantPares=0;
    var cantImpares=0;
    var cantCeros=0;
    var sumaPos=0;
    var cantPos=0;
    var sumaNeg=0;
    var cantNeg=0;
    var letraMax;
    var letraMin;
    var numMax=0;
    var numMin=0;


    do{
        letra = prompt("Ingrese una letra");
        while(!isNaN(letra)){
            letra = prompt("Error, ingrese una letra");
        }
        num = prompt("Ingrese un numero");
        while(isNaN(num)){
            num = prompt("Error, ingrese un numero");          
        }
        while(num < -100 || num > 100){
            num = prompt("Error, ingrese un numero entre -100 y 100");
        }

        num = parseInt(num);

        confirm = window.confirm("Desea agregar letra y numero nuevamente?");

        if(num % 2 ==0){
            cantPares++;
        }

        if(num %2 !=0){
            cantImpares++;
        }

        if(num ==0){
            cantCeros++;
        }

        if(num >=0){
            sumaPos = sumaPos + num;
            cantPos++;
        }

        if(num < 0){
            sumaNeg = sumaNeg + num;
            cantNeg++;
        }

        if(numMin > num){
            numMin = num;
            letraMin = letra;
        }
        if(numMax < num){
            numMax = num;
            letraMax = letra;
        }


    }while(confirm == true);

    promedioPos = sumaPos / cantPos;

    alert("Cantidad de pares " + cantPares);
    alert("Cantidad de impares " + cantImpares);
    alert("Cantidad de ceros " + cantCeros);
    alert("Promedio de numeros positivos " + promedioPos);
    alert("Suma de negativos " + sumaNeg);
    alert("Letra min " + letraMin);
    alert("Numero min " + numMin);
    alert("Letra max " + letraMax); 
    alert("Numero max " + numMax);


}

