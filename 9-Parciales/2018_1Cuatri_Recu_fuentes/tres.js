function mostrar()
{
var grupo
var cuota
var total
var totalcuenta


grupo = prompt("Ingresar cantidad de personas");

totalcuenta = prompt("ingresar el total de la cuenta");

grupo = parseInt(grupo);
totalcuenta = parseInt(totalcuenta);


porcentaje = total * 0.10;

total = totalcuenta / grupo;

porcentaje1 = porcentaje + total;

iva = porcentaje1 * 0.21;

iva2 = iva + porcentaje1;








alert("La cuenta total es " + totalcuenta + " y cada integrante debe pagar " + iva2);











}
