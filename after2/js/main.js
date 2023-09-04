//Declaramos nuestro array de productos
const productos = [
    {
        id : 1, nombre : "Gaseosa Coca Cola sabor original 2.25 l.", precio : 715, imagen : "https://carrefourar.vtexassets.com/arquivos/ids/332148-1200-auto?v=638211437412370000&width=1200&height=auto&aspect=true"
    },
    {
        id : 2, nombre : "Gaseosa Coca-Cola Zero 1.75 l.", precio : 550, imagen : "https://carrefourar.vtexassets.com/arquivos/ids/320545-1200-auto?v=638187405189770000&width=1200&height=auto&aspect=true"
    },
    {
        id : 3, nombre : "Gaseosa Pepsi black 1.5 l.", precio : 330, imagen : "https://carrefourar.vtexassets.com/arquivos/ids/191207-1200-auto?v=637511787821470000&width=1200&height=auto&aspect=true"
    },
    {
        id : 4, nombre : "Gaseosa cola classic Cunnington pet 2.25 lts.", precio : 373.68, imagen : "https://carrefourar.vtexassets.com/arquivos/ids/333914-1200-auto?v=638216542095370000&width=1200&height=auto&aspect=true"
    }
];

console.log(productos);

//Clase Carrito
class Carrito {
    constructor() {
        this.productos = [];
        this.cantidadMaximaProductos = 5;
        this.totalAPagarMaxima = 10000;
    }

    agregarProducto(producto, cantidad) {
        
        for (let i=0; i < cantidad; ++i) {
            this.productos.push(producto);
        }
    }

    cantidadProductos() {
        return(this.productos.length);
    }

    totalAPagar() {
        let total = 0;

        for (const producto of this.productos) { 
            total += producto.precio;
        }

        return total;
    }

    aplicarDescuento() {
        let descuento = this.totalAPagar();

        if ((this.cantidadProductos() > this.cantidadMaximaProductos) || (this.totalAPagar() > this.totalAPagarMaxima)) {
            //Se aplica el descuento
            descuento = descuento * 0.9;        
        }

        return descuento;
    }
}

const carrito = new Carrito();

let salida = "";
for (const producto of productos) {
    salida += producto.id + " - " + producto.nombre + " - " + producto.precio.toFixed(2) + "\n";  
}
salida += "0 - Salir\n"

let productoSeleccionado = 100;

while (productoSeleccionado != 0) {
    let producto;
    let cantidad;

    productoSeleccionado = parseInt(prompt("Selecciones el producto para agregar al carrito\n\n" + salida));
    
    if ((productoSeleccionado <= productos.length) && (productoSeleccionado > 0)) {
        //Encontrar el producto que tiene el id ingresado
        producto = productos.find((pr) => pr.id == productoSeleccionado);
        console.log("Producto seleccionado: " + producto.id + " - " + producto.nombre + "\n");

        //Cantidad
        cantidad = parseInt(prompt("¿Qué cantidad de " + producto.nombre + " va a llevar?"));

        carrito.agregarProducto(producto, cantidad);
    }    

}

salida = "Carrito: \n";

for (const producto of carrito.productos) {
    for (const key in producto) {
       salida += producto[key];
       salida += " - ";
    }  
    salida += "\n";
}

console.log(salida);

salida = "";

salida += "Cantidad de Productos en el carrito: " + carrito.cantidadProductos() + "\n";
salida += "Total a Pagar: $" + carrito.totalAPagar().toFixed(2) + "\n";
salida += "Con Descuento: $" + carrito.aplicarDescuento().toFixed(2) + "\n";

console.log(salida);
alert(salida);

