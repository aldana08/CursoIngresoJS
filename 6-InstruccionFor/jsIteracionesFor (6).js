function mostrar()
{

    var contPares=0;
    numeroIngresado = prompt("Ingrese un numero");
    numeroIngresado=parseInt(numeroIngresado);

    while(isNaN(numeroIngresado)){
        
                numeroIngresado= prompt("Ingrese un numero");
                
               }
        
    for(var i=1; i< numeroIngresado; i++){

       if(i % 2 == 0){

        console.log(i);

        contPares++;
       }
    
 
    

    
    }

}//FIN DE LA FUNCIÓN