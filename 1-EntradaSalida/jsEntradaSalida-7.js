/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var suma;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    suma = num1 + num2;

    alert("La suma de ambos numeros es " + suma);


}

function restar()
{
    var num1;
    var num2;
    var resta;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    resta = num1 - num2;

    alert("La suma de ambos numeros es " + resta);
}

function multiplicar()
{ 
    var num1;
    var num2;
    var multi;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    multi = num1 * num2;

    alert("La suma de ambos numeros es " + multi);

}

function dividir()
{
    var num1;
    var num2;
    var dividir;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    dividir = num1 / num2;

    alert("La suma de ambos numeros es " + dividir);
	
}



