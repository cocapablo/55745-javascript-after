//Funciones

function ingresarEstudiante() {
    //Preguntar si sos estudiante de Coderhouse
    let sosEstudiante = prompt("¿Sos estudiante de Coderhouse?\n1 - Si\n2 - No");

    while ((sosEstudiante != "1") && (sosEstudiante != "2")) {
        alert("Opción ingresada inválida (debe ingresar 1 o 2)");
        sosEstudiante = prompt("¿Sos estudiante de Coderhouse?\n1 - Si\n2 - No");
    }
    console.log("Sos Estudiante: " + sosEstudiante);

    return sosEstudiante;
}

function ingresarTipoPaquete() {
    //Preguntar por tu tipo de paquete
    let tipoPaquete = prompt("Ingrese el tipo de paquete Identite/Gold/Otro").toUpperCase();

    if ((tipoPaquete !="IDENTITE") && (tipoPaquete != "GOLD")) {
        tipoPaquete = "OTRO";
    }

    return tipoPaquete;
}

function calcularInteresPaquete(tipoPaquete) {
    let interesPaquete = 0;

    if (tipoPaquete == "IDENTITE") {
        interesPaquete = 30;
    } else if (tipoPaquete == "GOLD") {
        interesPaquete = 40;
    } else {
        interesPaquete = 50;
    } 
    
    console.log("Interes paquete: " + interesPaquete);

    return interesPaquete;
}

function ingresarMontoSolicitado() {
    let montoSolicitado = parseFloat(prompt("Ingrese el monto del Préstamo a solicitar - Max $" + montoSolicitadoMax));

    while (montoSolicitado > montoSolicitadoMax) {
        alert("Superaste el monto máximo permitido de $" + montoSolicitadoMax);
        montoSolicitado = parseFloat(prompt("Ingrese el monto del Préstamo a solicitar - Max $" + montoSolicitadoMax));    
    }
        
    console.log("Monto solicitado: " + montoSolicitado);

    return montoSolicitado;
}

function ingresarCuotas() {
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas 12/24/36/48"));

    while ((cuotas != 12) && (cuotas != 24) && (cuotas != 36) && (cuotas != 48)) {
        alert("Solo es posible solicitar 12/24/36/48 cuotas");
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas 12/24/36/48"));
    }
    console.log("Cuotas: " + cuotas);

    return cuotas;
}

function calcularInteresCuota(cuotas) {
    let interesCuota;

    if (cuotas == 12) {
        interesCuota = 80;
    } else if (cuotas == 24) {
        interesCuota = 160;
    } else if (cuotas == 36) {
        interesCuota = 240;
    } else {
        interesCuota = 320;
    }
    console.log("Interes Cuota: " + interesCuota);

    return interesCuota;
}

function calcularValorCuota() {
    //Calculo de intereses
    let cuotaPura = montoSolicitado / cuotas;
    console.log("Cuota pura: " + cuotaPura);

    let interesPaqueteCuota = interesPaquete / cuotas;
    let interesCuotaCuota = interesCuota / cuotas;
    let tnaCuota = TNA / cuotas;
    let teaCuota = TEA / cuotas;
    let cfteaCuota = CFTEA / cuotas;

    let cuotaPuraInteresPaqueteCuota = (cuotaPura * interesPaqueteCuota) / 100;
    console.log("cuotaPuraInteresPaqueteCuota " + cuotaPuraInteresPaqueteCuota);

    let cuotaPuraInteresCuotaCuota = (cuotaPura * interesCuotaCuota) / 100;
    console.log("cuotaPuraInteresCuotaCuota " + cuotaPuraInteresCuotaCuota);

    let cuotaPuraTnaCuota = (cuotaPura * tnaCuota) / 100;
    console.log("cuotaPuraTnaCuota " + cuotaPuraTnaCuota);

    let cuotaPuraTeaCuota = (cuotaPura * teaCuota) / 100;
    console.log("cuotaPuraTeaCuota " + cuotaPuraTeaCuota);

    let cuotaPuraCfteaCuota = (cuotaPura * cfteaCuota) / 100;
    console.log("cuotaPuraCfteaCuota " + cuotaPuraCfteaCuota);

    //Cuota final
    let valorCuota = cuotaPura + cuotaPuraInteresPaqueteCuota + cuotaPuraInteresCuotaCuota + cuotaPuraTnaCuota + cuotaPuraTeaCuota + cuotaPuraCfteaCuota;
    console.log("Valor de cuota: " + valorCuota);

    return valorCuota;
}

function informarCalculoPrestamo() {
    let salida = "SIMULADOR DE PRÉSTAMOS\n\n";

    //Descuento estudiante
    if (sosEstudiante == 1) {
        valorCuota = valorCuota - ((valorCuota * descuentoEstudiante) / 100);
        console.log("Valor de Cuota con Descuento aplicado: " + valorCuota);
    }

    salida += "Sos estudiante: ";

    if (sosEstudiante == 1) {
        salida += "SI";
    }
    else {
        salida += "NO";
    }
    salida += "\n";

    salida += "Tipo de Paquete: " + tipoPaquete + "\n";
    salida += "Monto del Préstamo: $" + montoSolicitado + "\n";
    salida += "Cuotas: " + cuotas + "\n\n";
    salida += "Total a Pagar:\n";
    salida += cuotas + " cuotas de: $" + valorCuota.toFixed(2);

    return salida; 
}


