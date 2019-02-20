/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

 var valorLampara = 35;
 var cantidad;
 var totalcompra;
 var marca;
 var desc50;
 var desc40;
 var desc30;
 var desc25;
 var desc20;
 var desc15;
 var desc10;
 var desc5;
 var totaliibb;
 var ingreso;

 var msjTotalCompra;
 var total;

 var msj50 = "Su compra con un 50% de desc seria de $";
 var msj40 = "Su compra con un 40% de desc seria de $";
 var msj30 = "Su compra con un 30% de desc seria de $";
 var msj25 = "Su compra con un 25% de desc seria de $";
 var msj20 = "Su compra con un 20% de desc seria de $";
 var msj15 = "Su compra con un 15% de desc seria de $";
 var msj10 = "Su compra con un 10% de desc seria de $";
 var msj5 = "Su compra con un 5% de desc seria de $";


 cantidad = document.getElementById("Cantidad").value;
 marca = document.getElementById("Marca").value;
 valorLampara = parseInt(valorLampara);

 desc50 = cantidad * ((valorLampara * 50) / 100);
 desc40 = cantidad * ((valorLampara * 40) / 100);
 desc30 = cantidad * ((valorLampara * 30) / 100);
 desc25 = cantidad * ((valorLampara * 25) / 100);
 desc20 = cantidad * ((valorLampara * 20) / 100);
 desc15 = cantidad * ((valorLampara * 15) / 100);
 desc10 = cantidad * ((valorLampara * 10) / 100);
 desc5 = cantidad * ((valorLampara * 5) / 100);

 
 if( cantidad >= 6 ){
   totalcompra = cantidad * valorLampara;
   total = totalcompra - desc50;
   msjTotalCompra = msj50 + total;
 }

 if( cantidad == 5 && marca == "ArgentinaLuz"){
   totalcompra = cantidad * valorLampara;
   total = totalcompra - desc40;
   msjTotalCompra = msj40 + total;
 }

 if( cantidad == 5 && marca !== "ArgentinaLuz"){
   totalcompra = cantidad * valorLampara;
   total = totalcompra - desc30;
   msjTotalCompra = msj30 + total;
 }

 if( cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas"  ){
   totalcompra = cantidad * valorLampara;
   total = totalcompra - desc25;
   msjTotalCompra = msj25 + total;
 }

 if( cantidad == 4 && marca !== "ArgentinaLuz" && marca !=="FelipeLamparas"  ){
   totalcompra = cantidad * valorLampara;
   total = totalcompra - desc20;
   msjTotalCompra = msj20 + total;
 }

 if( cantidad == 3 && marca == "ArgentinaLuz"){
   totalcompra = cantidad * valorLampara;
   total = totalcompra - desc15;
   msjTotalCompra = msj15 + total;
 }
 
 if( cantidad == 3 && marca == "FelipeLamparas"){
   totalcompra = cantidad * valorLampara;
   total = totalcompra - desc10;
   msjTotalCompra = msj10 + total;
 }

 if( cantidad == 3 && marca !== "FelipeLamparas" && marca !== "ArgentinaLuz"){
   totalcompra = cantidad * valorLampara;
   total = totalcompra - desc5;
   msjTotalCompra = msj5 + total;
 }

 if( total > 120){
   
   ingreso = (total) * 0.10;

   totaliibb = total + ingreso;
   
   alert("IIBB Usted pago " + totaliibb);
 }

 document.getElementById("precioDescuento").value = msjTotalCompra;


}


