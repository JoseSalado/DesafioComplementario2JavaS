
let sorrentinos = [
    {sabor: "jamon  y queso" , precio: 500},
    {sabor: "ternera y queso" , precio: 550},
    {sabor: "calabaza y queso", precio: 450},
]

function inicio(){
    alert(`Bienvenido ${nombre} a nuestra tienda. `);
}

function comprarProducto(){
    producto = prompt ("Ingrese una Opcion : \n 1: Sorrentinos de Jamon y Queso $500 \n 2: Sorrentinos de Ternera y Queso $550 \n 3: Sorrentinos de Calabaza y Queso $450")
    if(producto === "1"){
        let valorBuscado = "jamon y queso";
        resultado = sorrentinos[0].precio;
        alert(`eligio : ${valorBuscado} , precio : $ ${resultado}`);
    }
    if(producto === "2"){
        let valorBuscado = "ternera y queso";
        resultado = sorrentinos[1].precio;
        alert(`eligio : ${valorBuscado} , precio : $ ${resultado}`);
    }
    if(producto === "3"){
        let valorBuscado = "calabaza y queso";
        resultado = sorrentinos[2].precio;
        alert(`eligio : ${valorBuscado} , precio : $ ${resultado}`);
    }
    
    opcion = prompt("Que desea realizar   \n 2 : Pagar Compra \n 3 : Salir ");
    
}

function finalizarCompra(){
    if(producto==="1"){
        alert(`Compro : ${sorrentinos[0].sabor} , total a pagar : $ ${resultado + 100} , incluye gastos de envio`);
    }
    else if ( producto==="2"){
        alert(`Compro : ${sorrentinos[1].sabor} , total a pagar : $ ${resultado + 100} , incluye gastos de envio`);
    }
    else if (producto==="3"){
        alert(`Compro : ${sorrentinos[2].sabor} , total a pagar : $ ${resultado + 100} , incluye gastos de envio`);
    }
}




let producto;
let nombre = prompt("Ingrese su nombre");
inicio();
let opcion = prompt("Que desea realizar \n 1 : Comprar Sorrentinos \n 2 : Pagar Comprar \n 3 : Salir ");

while (opcion !=="3") {
    if (opcion === "1"){
        comprarProducto();
    }
    if (opcion === "2"){
        finalizarCompra();
        opcion = "3"
    }
    
 }

 alert("Gracias por su compra");

