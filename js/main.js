
// declaracion de funciones variable
let juegoseleccionado;

let precioFIFA23 =69.99
let precioNBA2k23 =69.99
let precioSpidermanMilesMorales  =49.99
let precioGodofWarRagnarök =69.99
let precioDragonBallTheBreakers =19.99
let precioNFLProEra =29.99
let nombreIngresado 

// declaracion de funciones
function seleccionarJuego(){
  juegoseleccionado= parseInt(prompt ("ingresa el numero del juego que buscas 1- FIFA 23     2-NBA 2k23      3-SPIDERMAN MILES MORALES       4-God of War Ragnarök       5-DRAGON BALL: THE BREAKERS      6-NFL PRO ERA"));
 }
function pagar(precio){
    let cuotas=parseInt(prompt("seleccione en cuantas cuotas quiere pagar (maximo 12 cuotas)"))
      if(cuotas<=12){
    let precioFinal= precio/cuotas
    alert ("el precio a pagar es US$"+ precioFinal + " por mes")
  }
else{
    alert ("Las cuotas seleccionadas no son validas")
  }
}
// ciclo
do{
nombreIngresado = prompt ("registra tu nombre para inciar la compra")
 }while(nombreIngresado =="")



// llamado de funcion
seleccionarJuego()
switch(juegoseleccionado){
  case 1: 
  alert ("El juego seleccionado es FIFA 23 con un valor de US$" + precioFIFA23)
pagar(precioFIFA23)
break;
case 2:
  alert ("El juego seleccionado es NBA 2k23 con un valor de US$" + precioNBA2k23)
pagar(precioNBA2k23)
break;
case 3:
  alert ("El juego seleccionado es SPIDERMAN MILES MORALES con un valor de US$" +precioSpidermanMilesMorales )
pagar(precioSpidermanMilesMorales)
break;
case 4:
alert ("El juego seleccionado es God of War Ragnarök con un valor de US$" + recioGodofWarRagnarök)
  pagar(precioGodofWarRagnarök)
  break;
case 5:
  alert ("El juego seleccionado es DRAGON BALL: THE BREAKERS con un valor de US$"+ recioDragonBallTheBreakers)
  pagar(precioDragonBallTheBreakers)
  break;
case 6:
  alert ("El juego seleccionado es NFL PRO ERA con un valor de US$" + precioNFLProEra)
  pagar(precioNFLProEra)
break;
default:
  alert ("ingese un numero valido")
break;
}
