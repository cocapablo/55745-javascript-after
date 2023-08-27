// Simulador de prestamos
//Constantes
const TNA = 137.50;
const TEA = 267.92;
const CFTEA = 375.60;
const descuentoEstudiante = 10;
const montoSolicitadoMax = 5000000;
let interesPaquete;
let interesCuota;

//Entradas
//Preguntar si sos estudiante de Coderhouse
let sosEstudiante = ingresarEstudiante();

//Preguntar por tu tipo de paquete
let tipoPaquete = ingresarTipoPaquete();
interesPaquete = calcularInteresPaquete(tipoPaquete);

// Preguntar por el monto del Préstamo
let montoSolicitado = ingresarMontoSolicitado();

//Preguntar por la cantidad de cuotas
let cuotas = ingresarCuotas();
interesCuota = calcularInteresCuota(cuotas);

//Calculo de intereses
let valorCuota = calcularValorCuota();



//Salida
let salida = informarCalculoPrestamo();
console.log("Salida: " + salida);

alert(salida);





 