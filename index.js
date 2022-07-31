const productos = [
    {sku: 1, categoria: "placas de video", nombreProdu: "Nvidia Asus Dual GeForce GTX 1650 OC Edition 4GB", precio: 80200, descripcion: "placa de video", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_770553-MLA44835817388_022021-F.webp" },
    {sku: 2, categoria: "Mothers", nombreProdu: "Asrock A68", precio: 5800, descripcion: "Mother para pc", stock: 7, imagen:"https://http2.mlstatic.com/D_NQ_NP_759323-MLA42590871149_072020-O.webp" },
    {sku: 3, categoria: "Mothers", nombreProdu: "Asus k56nb", precio: 1520, descripcion: "Mother para pc", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_914646-MLA49335236971_032022-O.webp" },
]

const catalogoProdu = new CatalogoProdu(productos)


function inicio() {
    let opcion = ""
    while (opcion !== "S") {

        opcion = prompt(`Seleccione una opcion: 
                        A. Ingresar Producto
                        B. Listar Producto
                        C. Modificar producto
                        D. Buscar un prodcuto por ID
                        E. Vender un producto
                        S. SALIR`).toUpperCase();
        switch (opcion) {
            case "A":
                cargarDatosProductos();
                break;
            case "B":
                listarProducto();
                break;
            case "C":
                modificar();
                break;
            case "D":
                buscar ();
                break;
            case "E":
                vender ();
                break;
            case "S":
                alert("Saludos");
                break;
            default:
                alert("Opcion Inválida")
                break;
        }
    }
}

inicio()


let precioCompra = 0

function vender (){
    venta = prompt(`Ingrese el ID del producto: `)
    catalogoProdu.comprarProducto(venta)
    }




/*
function cobrar (monto) {
    alert (`El total a abonar es de ${monto}`)
    let recibo = Number(prompt(`Ingrese el dinero que desea abonar`))
    if (recibo>monto || recibo==monto){
        alert(`Su vuelto es $ ${recibo-monto}`)
    }
    else if (recibo<monto){
        alert(`El dinero recibido es inferior al valor de la compra, restan $ ${monto-recibo}`)
        while (recibo<monto){
            let pedir = Number(prompt(`Ingrese el dinero restante`))
            recibo = recibo + pedir
            alert(`Restan $ ${monto-recibo}`)
        }
        alert(`Su vuelto es $ ${recibo-monto}`)
    }
}
*/

function cargarDatosProductos()
{
    id = prompt("Ingrese el ID: ");
    cate = prompt("Ingrese la categoria: ");
    nombre = prompt("Ingrese el producto: ");
    valor =  prompt("Ingrese Precio: ");
    descri = prompt("Ingrese la Descripción: ");
    cantidad = prompt("Ingrese la cantidad en stock: ");
    imag = prompt("Ingrese la imagen: ");
    let nuevo = new Producto (id, cate, nombre, valor, descri, cantidad, imag)
    catalogoProdu.agregarProd(nuevo)//tiene que ser en el array y no en el constructor
}



function modificar () {
    idmodificar = prompt ("Ingrese el id del prodcuto: ")
    cate = prompt("Ingrese la categoria: ");
    nombre = prompt("Ingrese el producto: ");
    valor =  prompt("Ingrese Precio: ");
    descri = prompt("Ingrese la Descripción: ");
    cantidad = prompt("Ingrese la cantidad en stock: ");
    imag = prompt("Ingrese la imagen: ");
    catalogoProdu.modificarProdu(idmodificar, cate, nombre, valor, descri, cantidad, imag)
    }




function listarProducto() {

    const nodoPrincipal = document.getElementById("contenedor")
    nodoPrincipal.innerHTML="";
    catalogoProdu.productos.forEach((producto)=>{

        const divProducto = document.createElement("div")
        divProducto.className=" col-lg-3 col-md-4 col-sm-6 "
        divProducto.innerHTML=`
                    <div class="marcoProducto">
                        <div class="imagenProducto">
                            <img src=${producto.imagen}>
                        </div>
                        <div class="textoProducto">
                            <p>${producto.nombreProdu}</p>
                            <p>$${producto.precio}</p>
                            <hr>
                            <div class="botonComprar" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <button class="button">COMPRAR</button>
                            </div>
                        </div>
                 </div> `
        
        
        nodoPrincipal.appendChild(divProducto);

        //document.body.appendChild()a
    })
}






function buscar () {
    let busca = prompt ("Ingrese el Id del prodcuto a buscar: ")
    catalogoProdu.buscarProdu(busca)
    }


let total = 0
let posicion = 0 
let estas
let sel = 0 





