const productosPlaystation = [
    {
        imagen: "./Img/GoW.jpg",
        nombre: "God Of War Ragnarok",
        precio: 10000
    },
    {
        imagen: "./Img/Spiderman.jpg",
        nombre: "Spider-Man Remastered",
        precio: 12500
    },
    {
        imagen: "./Img/Hogwarts.jpg",
        nombre: "Hogwarts Legacy",
        precio: 9000
    },
    {
        imagen: "./Img/TLOU.jpg",
        nombre: "The Last Of Us 2 Remastered",
        precio: 9000
    }
];
const productosXbox = [
    {
        imagen: "./Img/Halo.jpg",
        nombre: "Halo: The master chief collection",
        precio: 7000
    },
    {
        imagen: "./Img/Forza.jpg",
        nombre: "Forza Horizon 5",
        precio: 8000
    },
    {
        imagen: "./Img/Starfield.jpg",
        nombre: "Starfield",
        precio: 8000
    },
    {
        imagen: "./Img/Forza4.jpg",
        nombre: "Forza Horizon 4",
        precio: 6000
    }
];

const contenedorPlaystation = document.getElementById("juegosPlaystation");
const contenedorXbox = document.getElementById("juegosXbox");
const carrito = document.getElementById("carrito");
const textoPagar = document.getElementById("textoPagar");
const mensajeCarrito = document.getElementById("mensajeCarrito");



let totalPagar = 0;
let juegosPlaystation ="";
let juegosXbox ="";

function crearCardsPlaystation(){
    for(let indice=0;indice < productosPlaystation.length;indice++){
        juegosPlaystation +=`
                    <div class="juego">
                        <img src= ${productosPlaystation[indice].imagen} alt="125" width="150">
                        <h2>${productosPlaystation[indice].nombre}</h2>
                        <h2>$${productosPlaystation[indice].precio}</h2>
                        <input type="button" class="botonDescripcion" value="Descripción...">
                        <h4 class="textoDescripcion">Esta es la descripcion del juego</h4>
                        <input class="botonAgregarCarrito" type="button" value="Comprar">      
                    </div>
        `    
    }
    contenedorPlaystation.innerHTML = juegosPlaystation;
}

function crearCardsXbox(){
    for(let indice=0;indice < productosXbox.length;indice++){
        juegosXbox +=`
                    <div class="juego">
                        <img src= ${productosXbox[indice].imagen} alt="125" width="150">
                        <h2>${productosXbox[indice].nombre}</h2>
                        <h2>$${productosXbox[indice].precio}</h2>
                        <input type="button" class="botonDescripcion" value="Descripción...">
                        <h4 class="textoDescripcion">Esta es la descripcion del juego</h4>
                        <input class="botonAgregarCarrito" type="button" value="Comprar">      
                    </div>
        `
    }
    contenedorXbox.innerHTML = juegosXbox;
}



function cadenaCarrito () {
    const agregarCarrito = document.querySelectorAll(".botonAgregarCarrito");
    for (let indice = 0; indice < agregarCarrito.length; indice++){
        function agregarElemCarrito(){
            const elemLi = document.createElement("li");
            if (indice < productosPlaystation.length) { 
                elemLi.innerText = ` ${productosPlaystation[indice].nombre} $${productosPlaystation[indice].precio}`;
                elemLi.setAttribute("precio",productosPlaystation[indice].precio);
                carrito.appendChild(elemLi);
                totalPagar += productosPlaystation[indice].precio;
            } else {
                const xboxIndice = indice - productosPlaystation.length;
                elemLi.innerText = ` ${productosXbox[xboxIndice].nombre} $${productosXbox[xboxIndice].precio}`;
                elemLi.setAttribute("precio",productosXbox[xboxIndice].precio);
                carrito.appendChild(elemLi);
                totalPagar += productosXbox[xboxIndice].precio;
            }
            textoPagar.innerText = "A pagar: $" + totalPagar;
            mensajeCarrito.innerText = "";
        }
        agregarCarrito[indice].addEventListener("click", agregarElemCarrito);
    }
}

crearCardsPlaystation();
crearCardsXbox();

const cadenaBotonDescripcion = document.querySelectorAll(".botonDescripcion")
const cadenaTextoDescripcion = document.querySelectorAll(".textoDescripcion")

function descripcion(evento) {
    const boton = evento.target;
    const juego = boton.closest(".juego");
    const textoDescripcion = juego.querySelector(".textoDescripcion");
    if (textoDescripcion.style.display === "none") {
        textoDescripcion.style.display = "block";
    } else {
        textoDescripcion.style.display = "none";
    }
}

function borrarCarrito (){
    if (carrito.lastElementChild) {
        const ultimoProducto = carrito.lastElementChild;
        const precioUltimoProducto = ultimoProducto.getAttribute("precio");
        carrito.removeChild(ultimoProducto);
        totalPagar -= precioUltimoProducto;
        textoPagar.innerText = "A pagar: $" + totalPagar;
        mensajeCarrito.innerHTML = "";
    }
}

function pagar() {
    if (carrito.children.length === 0) {
        mensajeCarrito.innerText = "No hay ningun producto en el carrito"
    } else {
        mensajeCarrito.innerText= "Redireccionando para pagar...";
    }
}


cadenaCarrito();
cadenaBotonDescripcion.forEach((botonDescripcion) => {
    botonDescripcion.addEventListener("click", descripcion);
});
botonBorrar.addEventListener("click",borrarCarrito);
botonPagar.addEventListener("click",pagar);

