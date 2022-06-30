// let numero
// let intentos = 3

//     do {
//     numero = parseFloat(prompt("Ingrese un número que sea múltiplo de 123. Sin repetir y sin googlear, tienes 3 intentos!"))
//         if (isNaN(numero) || numero %123 === 0 )  
//         alert("Correcto!")
//          else {
//             intentos = intentos - 1
//             alert(`Incorrecto, te quedan ${intentos} intentos`)
//         } 
//     }while (intentos > 0)

// Console.log ("ingresaste 3 números válidos")
// Lo quería dejar acá por que fué el primero que me salió :)

let x = 1;
let suma = 0;
let valor;
let adivinados = 0;
let intentos = 3;
    while (x <= 3) {
        valor = parseInt(prompt('Ingrese un número que sea múltiplo de 123. Sin repetir y sin googlear, tienes 3 intentos!'));
        suma = suma + valor;
            
        if ((valor % 123) == 0) {
            intentos = intentos - 1
            adivinados = adivinados + 1
            x = x + 1;
             alert(`Correcto! te quedan ${intentos} intentos`)
        } else {
            intentos = intentos - 1
            x = x + 1;
            alert(`Incorrecto, te quedan ${intentos} intentos`)
        }
        }
        alert('adivinaste ' + adivinados + ' veces :)')

