
function mostrar()
{
    var mascota1
    var mascota2
    var peso1
    var peso2
    var total

    mascota1=prompt("Ingrese el nombre de tu primer mascota");
    mascota2=prompt("Ingrese el nombre de tu segunda mascota");

    peso1=prompt("Ingrese el peso de su primer mascota");
    peso2=prompt("Ingrese el peso de su segunda mascota");

    peso1=parseInt(peso1);
    peso2=parseInt(peso2);

    total=peso1 + peso2;

    alert("Tenes dos macotas " + mascota1 + " y " + mascota2 + " , que pesan " + peso1 + " y " + peso2 + " , la suma de los kilos es " + total);





}
