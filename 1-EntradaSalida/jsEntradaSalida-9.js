/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldos
    var result

    sueldos=document.getElementById(sueldos).value;
    result=document.getElementById(result).value;

    sueldos=parseInt(sueldos);
    result=parseInt(result);

    aumento=parseInt(sueldos) + 10% parseInt(result);

    alert("El resultado con el incremento es " + aumento);


    
    
}
