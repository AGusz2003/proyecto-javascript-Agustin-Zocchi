
// declaracion de funciones variable
let precioFIFA23 =69.99
let precioNBA2k23 =69.99
let precioSpidermanMilesMorales =49.99
let precioGodofWarRagnarök =69.99
let precioDragonBallTheBreakers =19.99
let precioNFLProEra =29.99
let saludoAlUsuario


function seleccionarJuego(){
  let producto =  parseInt (prompt("ingresa el numero del juego que buscas: 1-FIFA23 / 2-NBA2k23 / 3-SPIDERMAN MILES MORALES / 4-God of War Ragnarök / 5-DRAGON BALL: THE BREAKERS / 6-NFL PRO ERA"))
    console.log(producto);

       switch(producto) {
         case 1: 
         carrito.push(productos[0])
         alert ("Usted eligió comprar el FIFA 23 con un valor de US$" + precioFIFA23)
       pagar(precioFIFA23)
       break;
       case 2 :
        carrito.push(productos[1])
         alert ("Usted eligió comprar el NBA 2k23 con un valor de US$" + precioNBA2k23)
       pagar(precioNBA2k23)
       break;
       case 3:
        carrito.push(productos[2])
         alert ("Usted eligió comprar el SPIDERMAN MILES MORALES con un valor de US$" + precioSpidermanMilesMorales )
       pagar(precioSpidermanMilesMorales)
       break;
       case 4:
        carrito.push(productos[3])
       alert ("Usted eligió comprar el God of War Ragnarök con un valor de US$" + precioGodofWarRagnarök)
         pagar(precioGodofWarRagnarök)
         break;
       case 5:
        carrito.push(productos[4])
         alert ("Usted eligió comprar el DRAGON BALL: THE BREAKERS con un valor de US$"+ precioDragonBallTheBreakers)
        pagar(precioDragonBallTheBreakers)
         break;
       case 6:
        carrito.push(productos[5])
        alert ("Usted eligió comprar el NFL PRO ERA con un valor de US$" + precioNFLProEra)
         pagar(precioNFLProEra)
       break;
       default:
         alert ("ingese un numero valido")
       break;
        }
    }

 function pagar(precio){
  
  let unidades= parseInt(prompt("Cuantas unidades desea comprar (Maximo 5 por usuario)"))
  let precioTotal = precio * unidades
    alert ("seleccionaste " +  unidades + "unidades del juego. El valor final es  $" + precioTotal)
  let cuotas=parseInt(prompt("seleccione en cuantas cuotas quiere pagar (maximo 6 cuotas)"))
     if(cuotas<=6){
  let precioFinal= precioTotal/cuotas
    alert ("el precio a pagar es US$"+ precioFinal + " por mes")
  }
  else{
    alert ("Las cuotas seleccionadas no son validas")
  }
}


let nombreIngresado 
do{
   nombreIngresado = prompt ("registra tu nombre para inciar la compra")
   }
  while(nombreIngresado == "")
  saludoAlUsuario = alert("hola " + nombreIngresado);

  // objetos
const productos = [
  { id: 1, nombre: "FIFA23", precio: 69.99 },
  { id: 2, nombre: "NBA2k23", precio: 69.99},
  { id: 3, nombre: "SpidermanMilesMorales", precio: 49.99},
  { id: 4, nombre: "GodofWarRagnarök", precio: 69.99},
  { id: 5, nombre: "DragonBallTheBreakers", precio: 19.99},
  { id: 6, nombre: "NFLProEra", precio: 29.99},
 ];
  let carrito = [];

  let deseaContinuar = prompt("Esta interesado en comprar uno de nuestros productos? ingrese su respuesta si - no");

  while(deseaContinuar != "si" && deseaContinuar != "no"){
    alert("por favor responda con si o no")
    deseaContinuar = prompt("Esta interesado en comprar uno de nuestros productos? ingrese su respuesta si - no")
  };
// metodo de filtrado del los arrays
  if(deseaContinuar == "si"){
    alert(" los juegos disponibles por el momento son")
    let productosDisponibles = productos.map(
      (producto) => producto.nombre + " " + producto.precio + "$");
      alert(productosDisponibles.join(" - "))
  } else if (deseaContinuar =="no"){
    alert("disfrute el sitio, adios")
  }
  
  seleccionarJuego()
  deseaContinuar = prompt("desea comprar otro juego")
  do{
    seleccionarJuego()
    deseaContinuar = prompt("desea comprar otro juego")
  }
  while(deseaContinuar === "si")
  
  console.log(carrito)
  

      
    

     
