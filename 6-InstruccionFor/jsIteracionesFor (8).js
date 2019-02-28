function mostrar()
{

    var contador=0;
    numeroIngresado = prompt("Ingrese un numero");
    numeroIngresado=parseInt(numeroIngresado);

    while(isNaN(numeroIngresado)){
        
                numeroIngresado= prompt("Ingrese un numero");
                
               }
        
    for(var i=2; i<= numeroIngresado/2; i++){

       if(num % i ==0){

        //console.log(i);

        contador++;

        break;
       }

       /*if(contador>2){

        alert("no es primo");
       }
    */
 
    

    
    }



}//FIN DE LA FUNCIÓN

