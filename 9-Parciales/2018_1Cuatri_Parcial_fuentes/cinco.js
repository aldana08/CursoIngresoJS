function mostrar()
{
    var nombre

    nombre = prompt("Ingrese el nombre de un planeta del sistema solar");


    switch (nombre) {
        case 'mercurio':
          alert('Aca hace mas calor');
          break;
        case 'venus':
          alert('Aca hace mas calor');
          break;
        case 'tierra':
          alert('Aca vivimos');
          break;
        case 'marte':
          alert('Aca hace mas calor');
          break;
          case 'jupiter':
          alert('Aca hace mas calor');
          break;
          case 'saturno':
          alert('Aca hace mas frio');
          break;
          case 'urano':
          alert('Aca hace mas frio');
          break;
          case 'neptuno':
          alert('Aca hace mas frio');
          break;
          
        default:
          alert("No es un planeta valido");

    }      
      

}

