let amigos = [];
let nuevoname;
function avisosdecambios(tipo,  nuevoname){
  nombre = document.querySelector(tipo);
  nombre.innerHTML=nuevoname;
}
// Agregué una función para notificar sobre algún cambio que se produzca más adelante
// avisosdecambios("h2","Hola Jona");
function agregarAmigo(){
let CantidadAmigos = document.querySelector("ul");
let li=document.createElement("li");
  avisosdecambios("h2","Digite el nombre de sus amigos")
  let amigo = document.querySelector("input").value;
 if (amigo === "" || (/^\d+$/.test(amigo))){
  avisosdecambios("h2","Error! Digite el nombre de sus amigos correctamente")
 } else {
  amigos.push(amigo);
  li.textContent=amigo; 
 CantidadAmigos.appendChild(li);
 }
 limpiarCaja();
 console.log(amigos);
}
 /*He creado una función para almacenar los valores y puse una 
condición, para que solo entren los que sean tipo Texto */
function limpiarCaja(){
  let limpiar = document.getElementById('amigo');
  limpiar.value = "";
  return;
} 
 let aleatorio = Math.floor(Math.random()*amigos.length);
 let arrayAuxiliar= [];

 function sortearAmigo(){
let CantidadAmigos = document.querySelector("ul");
let li=document.createElement("li");
  console.log(amigos.length)
   aleatorio = Math.floor(Math.random()*amigos.length);
  console.log(aleatorio);
 /* if (arrayAuxiliar.length==amigos.length){
    avisosdecambios("h2"," Felicidades acabaste el sorteo!")
  } else if (arrayAuxiliar.includes(aleatorio)){
    return sortearAmigo();
    } else { */
     if(arrayAuxiliar.length < amigos.length){
    do{
      aleatorio = Math.floor(Math.random()*amigos.length);
      }while(arrayAuxiliar.includes(aleatorio));
      li.textContent=(`El amigo secreto sorteado es ${amigos[aleatorio]}`); 
      CantidadAmigos.appendChild(li);
       arrayAuxiliar.push(aleatorio);
    }else{
      avisosdecambios("h2"," Felicidades acabaste el sorteo!")
    }
    
}
/*do{
aleatorio = Math.floor(Math.random()*amigos.length);
}while(arrayAuxiliar.includes(aleatorio)){

}  */
//habilitar el otro botón y crear números aleatorios del tamaño 
 // de la matriz y desabilitar el botón añadir, para evitar erorres
