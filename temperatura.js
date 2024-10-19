var contador=0;
var temperatura=prompt("Ingrese la temperatura actual:");

do {
    temperatura = parseFloat(prompt("Ingrese la temperatura actual en grados Celsius:"));
    
    if (temperatura >= 18 && temperatura <= 25) {
        console.log(`Temperatura aceptable: ${temperatura}°C.`);
    } else {
        console.log(`Alerta: ${temperatura}°C está fuera del rango aceptable. Debe estar entre 18°C y 25°C.`);
    }
    
} while (temperatura < 18 || temperatura > 25);