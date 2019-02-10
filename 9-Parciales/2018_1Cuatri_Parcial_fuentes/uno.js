
function mostrar()
{
    var dato1
    var dato2
    var calcular

    dato1 = prompt("Ingrese el valor de lado uno");
    dato2 = prompt("ingrese el valor de lado dos");

    dato1 = parseInt(dato1);
    dato2 = parseInt(dato2);

    calcular = (dato1 + dato2) * 2;

    alert("El perimetro del cuadrado es " + calcular);




}
