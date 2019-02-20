/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (largo + ancho) * 2;

    alambre = perimetro * 3;

    alert("Usted debe comprar " + alambre + " metros de alambre ");

    
}
function Circulo () 
{
    var perimetro;
    var diametro
    var alambre1;

    radio = document.getElementById("Radio").value;

    radio = parseInt(radio);


    diametro = radio * 2;

    perimetro = 3.14 * diametro;

    alambre1 = perimetro * 3;


    alert("Usted debe comprar " + alambre1 + " metros de alambre ");
}
function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var cemento;
    var cal;


    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    cemento = parseInt(cemento);
    cal = parseInt(cal);

    superficie = (largo * ancho);

    cemento = (superficie) / 2;

    cal = (superficie) / 3;





    alert("Usted debe comprar " + cemento + "bolsas de cemento " + " y " + cal + " bolsas de cal " + " para dicha superficie que es " + superficie);
}