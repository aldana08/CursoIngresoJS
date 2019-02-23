function mostrar()
{

	var contador=0;
	// declarar variables
  var maximo=0;
  var minimo=0;
  var numero=0;
  var bandera=true;

	var respuesta='si';

  //while(respuesta!='no')

  while(confirm !==true ){

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
      }

    }
  }


	{


	}




}//FIN DE LA FUNCIÓN
