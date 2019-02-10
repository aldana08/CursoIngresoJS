/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldos
    var result
    var porcentaje

    sueldos = document.getElementById('sueldo').value;

    sueldos = parseInt(sueldos);

    porcentaje = (sueldos * 10) / 100 ;

    result = porcentaje + sueldos;

    document.getElementById('resultado').value = result;

    //alert(porcentaje);


    
}
