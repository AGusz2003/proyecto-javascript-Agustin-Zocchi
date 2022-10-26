


const shopContent = document.getElementById("shopContent")
const vercarrrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")

const productos =[
  {
      id: 1,
      nombre: "FIFA 23",
      precio: 69.99,
      img: "./img/fifa-23-cover-star-kylian-mbappe.jpg",
    },
    {
      id: 2,
      nombre: "NBA 2k23",
      precio: 69.99,
      img: "./img/nba2k23.jfif",
    },
    {
      id: 3,
      nombre: "SPIDERMAN MILES MORALE",
      precio: 49.99,
      img: "./img/spiderman.jpg",
    },
    {
      id: 4,
      nombre: "God of War Ragnarök",
      precio: 69.99,
      img: "./img/God of War Ragnarök.webp",
    },
    {
      id: 5,
      nombre: "DRAGON BALL: THE BREAKERS",
      precio: 19.99,
      img: "./img/dragon ball.jfif",
    },
    {
      id: 6,
      nombre: "NFL PRO ERA",
      precio: 29.99,
      img: "./img/NFL PRO ERA.jfif",
    },
]



let carrito = [];

productos.forEach((product)=> {
  let content = document.createElement("div");
  content.className = "tarjeta"
  content.innerHTML = `
  <img src="${product.img}"
  <h3 class="juego">${product.nombre}</h3>
  <p class="precio">${product.precio}$</p>
  `;

  shopContent.append(content);
  let comprar = document.createElement("button")
  comprar.innerText = "comprar"
  comprar.className = "comprar"

  content.append(comprar)

  comprar.addEventListener("click",() => {
    carrito.push({
      id: product.id,
      img: product.img,
      nombre:product.nombre,
      precio:product.precio,
      });
      console.log(carrito)
  })
})

vercarrrito.addEventListener("click", () => {

  const modalHeader = document.createElement("div")
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <h3 class="modal-header-title">Carrito.</h3>
  `
  modalContainer.append(modalHeader)

  const modalbutton = document.createElement("h1")
  modalbutton.innerText = "❌"
  modalbutton.className = "modal-header-button"

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none"
  })

  modalHeader.append(modalbutton)

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
  carritoContent.className = "modal-contenido"
  carritoContent.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p>${product.precio}$</p>

  `
modalContainer.append(carritoContent)

// sacar precio final de los productos
const total = carrito.reduce((acc, productos ) => acc + productos.precio,0)
 
const compratotal = document.createElement("div")
compratotal.className = "contenido-total"
compratotal.innerHTML = `total a pagar: ${total} $`
modalContainer.append(compratotal)

  })
})