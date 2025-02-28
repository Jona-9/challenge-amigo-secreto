// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function avisosdecambioslet(tipo, nuevoname){
  nombre = document.querySelector(tipo);
  nombre.innerHTML=nuevoname;
}
// Agregué una función para notificar sobre algún cambio que se produzca más adelante
avisosdecambioslet("h2","Hola Jona");