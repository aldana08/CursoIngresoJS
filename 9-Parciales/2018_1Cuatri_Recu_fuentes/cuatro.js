function mostrar()
{
    var libros;
    var importe;
    var desc10;
    var desc15;
    var tarjeta;
    var totalParcial;

    var total;
    var msjRecargo = "Su compra tiene un 10% de rec por abonar con TC $";
    var msjTotalCompra;

    var msj10 = "Su compra con un 10% de desc seria de $";
    var msj15 = "Su compra con un 10% de desc,tiene un 15% adic que seria de $";

    libros = prompt("Ingrese la cantidad de libros que compro ");
    importe = prompt("Ingrese el valor de la compra ");
    tarjeta = confirm("Paga con tarjeta");

    libros = parseInt(libros);
    importe = parseInt(importe);

    desc10 = (importe * 10) / 100;
    desc15 = (importe * 15) / 100;

    //alert(tarjeta);

    if(libros > 2 && importe < 2000){
        total = importe - desc10;
        msjTotalCompra = msj10 + total;
    }

    if(libros > 2 && importe > 2000){
        totalParcial = importe - desc10;
        desc15 = (totalParcial * 15) / 100;
        total = totalParcial - desc15;
        msjTotalCompra = msj15 + total;
    }

    if(tarjeta == true){
        total = total + desc10;
        msjTotalCompra = msjRecargo + total;
    }

    alert(msjTotalCompra);

}



