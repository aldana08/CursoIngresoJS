function mostrar()
{
    var libros;
    var importe;
    var tarjeta;
    var total;
    var desc;

    libros = prompt("Ingresar cantidad de libros");
    importe = prompt("Ingresar el valor total");
    tarjeta = confirm("¿Paga con tarjeta?");

    libros = parseInt(libros);
    importe = parseInt(importe);

    total = importe;

    if(tarjeta == true){
        total = importe + (importe * 0.10);
    }

    desc = importe * 0.10;

   if (libros > 2) {
       total = importe - desc;
   }
   if (importe > 2000 && libros > 2){
       total = total - (total * 0.15);
   }

   alert("Usted compro " + libros + "libros" + "\n" + 
        "si su compra fue mayor a 2 libros tiene un 10% de descuento" + desc +
        "y si ademas supera los $2000 tiene un 15% de descuento adicional" + total );

/*
   if(precio>2000){

    desc = desc + 0.15;
   }

   if(tarjeta){
}
*/
    
   


}
