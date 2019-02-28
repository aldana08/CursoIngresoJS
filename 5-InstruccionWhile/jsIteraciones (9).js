function mostrar()
{

	//var contador;
	// declarar variables
  var maximo;
  var minimo;
  var numero;
  var bandera=true;

	var respuesta='si';

  //while(respuesta!='no')

  while(respuesta){

    do{
      numero=prompt("Ingrese un numero");
      numero=parseInt(numero);

    }while(isNaN(numero)){

      if(bandera){

        bandera=false;
        maximo=numero;
        minimo=numero;
      }
      else{

        if(numero>maximo){
          maximo=numero;
        }
        if(numero<minimo){

          minimo=numero;
        }
          respuesta = confirm();
      }

    }
  }


	{


	}




}//FIN DE LA FUNCIÓN
