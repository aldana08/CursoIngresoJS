function mostrar()
{
    var precio
    var porcentaje
    var cuenta
    var preciofinal
    

    precio = prompt("Ingrese el precio");
    porcentaje = prompt("Ingrese el porcentaje a calcular");

    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);

    cuenta = (precio * porcentaje) / 100;

    preciofinal = precio - cuenta;

    document.getElementById("elPrecioFinal").value = preciofinal;



}
