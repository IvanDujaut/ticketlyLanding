function mostrarOpciones() {
    console.log(
        `
        1- Hacer transaccion
        2- Mostrar transacciones
        3- Cerrar programa
        `
    );
}

function hacerTransaccion(transacciones, saldo) {
    let destino = prompt("Ingrese la direccion de destino: ");
    let monto = prompt("Ingrese el monto a transferir");
    console.log(destino, monto);
    let nuevaTransaccion = {
        origen: null,
        destino: destino,
        monto: monto
    }
    transacciones.push(nuevaTransaccion);
    return monto; 
}

function mostrarTransacciones(transacciones) {
    console.log('------------------------------');
    for(let i = 0; i<transacciones.length; i++) {
        console.log(transacciones[i]);
    }
    console.log('------------------------------');
}

function main() {
    let opcion = null;
    let transacciones = [];
    let saldo = 1000;
    while(opcion != 3) {
        mostrarOpciones();
        console.log("Saldo actual", saldo)
        opcion = prompt("Seleccionar una opcion: ");
        if(opcion == 1) {
            let montoTransferido = hacerTransaccion(transacciones, saldo);
            if(montoTransferido <= saldo) {
                saldo -= montoTransferido;
            }
            else {
                alert("El monto a transferir es mayor al saldo actual");
            }
            
        }
        if(opcion == 2) {
            mostrarTransacciones(transacciones);
        }
    }
}

main()