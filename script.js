let numero
let intentos = 3

    do {
    numero = parseFloat(prompt("Ingrese un número que sea múltiplo de 123. Sin repetir y sin googlear, tienes 3 intentos!"))
        if (isNaN(numero) || numero %123 === 0 )  
        alert("Correcto!")
         else {
            intentos = intentos - 1
            alert(`Incorrecto, te quedan ${intentos} intentos`)
        } 
    }while (numero %123 !== 0 || intentos > 0)

Console.log ("ingresaste 3 números válidos")