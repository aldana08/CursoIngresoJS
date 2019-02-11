function mostrar()
{
    var num1
    var num2

    num1 = prompt("Ingrese un primer numero");
    num2 = prompt("Ingrese un segundo numero");

    if (num1 == num2){ 

       alert(num1 + " y " + num2 + " son iguales");

    }else{ 

       if (num1 > num2) {

        var resta

        resta = num1 - num2;

          alert(resta + " es la resta entre el numero mayor y el numero menor");

      }else{
          
        if(num1 < num2){ 

            var suma

            num1 = parseInt(num1);
            num2 = parseInt(num2);

            suma = num1 + num2;

          alert(suma + " se sumaron ambos porque el primer numero es menor");

       } 

       if(suma > 10){

        alert("La suma es " + suma + " y supero los 10");

       }
    }

}

}


