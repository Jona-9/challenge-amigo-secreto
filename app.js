let amigos = [];
function avisosdecambios(tipo, nuevoname){
  nombre = document.querySelector(tipo);
  nombre.innerHTML=nuevoname;
}
// Agregué una función para notificar sobre algún cambio que se produzca más adelante
// avisosdecambios("h2","Hola Jona");
function agregarAmigo(){
  avisosdecambios("h2","Digite el nombre de sus amigos")
  let amigo = document.querySelector("input").value;
 if(amigo === "" || (/^\d+$/.test(amigo))){
  avisosdecambios("h2","Error! Digite el nombre de sus amigos correctamente")
 }else{
  amigos.push(amigo);
 }
 limpiarCaja();
 console.log(amigos);
}
/* He creado una función para almacenar los valores y puse una 
condición, para que solo entren los que sean tipo Texto */

console.log(amigos.length)

function limpiarCaja(){
  let limpiar = document.getElementById('amigo');
  limpiar.value = "";
  return;
}
/* habilitar el otro botón y crear números aleatorios del tamaño 
de la matriz y desabilitar el botón añadir, para evitar erorres*/