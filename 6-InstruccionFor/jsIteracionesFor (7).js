function mostrar()
{

    var contador=0;
    numeroIngresado = prompt("Ingrese un numero");
    numeroIngresado=parseInt(numeroIngresado);

    while(isNaN(numeroIngresado)){
        
                numeroIngresado= prompt("Ingrese un numero");
                
               }
        
    for(var i=1; i<= numeroIngresado; i++){

       if(numeroIngresado % i ==0){

        console.log(i);

        contador++;
       }
    
 
    

    
    }



}//FIN DE LA FUNCIÓN