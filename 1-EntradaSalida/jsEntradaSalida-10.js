/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numero
    var result
    var porcentaje

    numero = document.getElementById('importe').value;

    numero = parseInt(numero);

    porcentaje = (numero * 25) / 100 ;

    result = numero - porcentaje;

    document.getElementById('resultado').value = result;

    //alert(porcentaje);
}

