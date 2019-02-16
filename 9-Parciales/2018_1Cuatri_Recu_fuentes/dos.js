function mostrar()
{
  var compra
  var descuento
  var total
  var totalmasiva

  compra = parseInt(compra);


  compra = prompt("Ingrese el valor de la compra");

  descuento = (compra)*0.10;

  total = compra - descuento;

  totalmasiva = (total) *0.21;

  iva = totalmasiva + total;



  alert("Tu compra es de " + compra + " tenes un descuento del 10% queda en " + total + " ,mas el Iva es " + iva );
}
