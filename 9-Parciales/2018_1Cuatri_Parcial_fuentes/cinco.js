function mostrar()
{
    var nombre

    nombre = prompt("Ingrese el nombre de un planeta del sistema solar");


    switch (nombre) {
        case 'mercurio':
          console.log('Aca hace mas calor');
          break;
        case 'venus':
          console.log('Aca hace mas calor');
          break;
        case 'tierra':
          console.log('Aca vivimos');
          break;
        case 'marte':
          console.log('Aca hace mas calor');
          break;
          case 'jupiter':
          console.log('Aca hace mas calor');
          break;
          case 'saturno':
          console.log('Aca hace mas frio');
          break;
          case 'urano':
          console.log('Aca hace mas frio');
          break;
          case 'neptuno':
          console.log('Aca hace mas frio');
          break;
          
        default:
          alert("No es un planeta valido");

    }      
      

}



