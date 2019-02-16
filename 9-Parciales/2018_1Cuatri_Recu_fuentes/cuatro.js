function mostrar()
{
    var libros
    var importe
    var tarjeta
    var total
    var desc


    libros = prompt("Ingresar cantidad de libros");
    importe = prompt("Ingresar el valor total");
    tarjeta = confirm("¿Paga con tarjeta?");

    libros = parseInt(libros);
    importe = parseInt(importe);

   if(cantidad>2 && precio<2000){

    desc = 0.1;
   }

   if(precio>2000){

    desc = desc + 0.15;
   }

   if(tarjeta){

    
   }


}
