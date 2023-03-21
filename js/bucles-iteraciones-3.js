// for(let i = 0; i < 10; i++) {
//     console.log('Hola!');
// }


// Si hay algo que hacer con cantidad de veces usa for 
// let palabraClave = 'firulais';
// for(let i = 0; i < 3; i++) {
//     let ingreso = prompt('Ingresa la palabra clave');

//     if (ingreso == palabraClave) {
//         alert('Adivinaste!');
//         break; //para que no se siga ejecutando si adivinas
//     }
// }

// Si hay algo que hacer con una condicion, por ejemplo seguir agregadno cosas a un carrito usa while
// let ingreso = prompt('Ingresa un producto - ingrese esc para terminar');
// while (ingreso != "esc") {
//     alert("Su producto es: " + ingreso);
//     ingreso = prompt("Ingresa un producto - ingrese esc para terminar");
// }  

// let passGuardado = 'manteca';
// let passUser = prompt("Ingresa tu contraseña");
// let continuar = true;

// while (continuar) {
//     if ( passGuardado === passUser ) {
//         alert('Bienvenido!');
//         continuar = false;
//         break
//     }
//     alert("Contraseña incorrecta");
//     passUser = prompt("Ingresa tu contraseña");
// }

// alert('Gracias por usar nuestra aplicación');

// let condition = false;

// do {
//     alert("Me ejecuto aunque sea una vez");
// } while(condition) {
// }

let continuar = true;
let condition = false;
let passGuardado = 'manteca';
let passUser = prompt("Ingresa tu contraseña");

do {
    let passUser = prompt("Ingrese tu contraseña");
    if (passGuardado == passUser) {
        alert("Bienveido/a");
        continuar = true;
        break;
    }
}while (condition)