function mostrar()
{

	var contador=0;
  //declarar contadores y variables
  var num;
  var sumaneg=0;
  var sumapos=0;
  var contpos=0;
  var contneg=0;
  var contceros=0;
  var contpares=0;

	var respuesta="si";

	/*while(respuesta!="no")
	{


	}

*/

do{
  num=prompt("Ingrese un numero");
  num=parseInt(num);
}while(isNaN(num));

if(num <0){
  sumapos=num;
  contneg++;
}else{

  if(num>0){
    sumapos=num;
    contpos++;
  }else{
    contceros++;
  }
} if(num%2 == 0){
  contpares++;
}
  rta=confirm();
}while(rta);


}//FIN DE LA FUNCIÓN


