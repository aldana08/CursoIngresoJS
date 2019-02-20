/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var Fahrenheit;
    var centigrados;
    var totalgrados;

    Fahrenheit = document.getElementById("Temperatura").value;

    Fahrenheit = parseInt(Fahrenheit);

    centigrados = (Fahrenheit - 32) / 1.8000;

    totalgrados = centigrados;

    alert(Fahrenheit + " farenheit es igual a " + totalgrados + " centigrados ");


}

function CentigradosFahrenheit () 
{
    var Fahrenheit;
    var centigrados;
    var totalcentigrados;

    centigrados = document.getElementById("Temperatura").value;

    Fahrenheit = parseInt(Fahrenheit);
    centigrados = parseInt(centigrados);

    Fahrenheit = (centigrados * 1.8000 ) + 32.00;

    totalcentigrados = Fahrenheit;

    alert(centigrados + " centigrados es igual a " + totalcentigrados + " farenheit ");
}

//℉ =℃ * 1.8000 + 32.00