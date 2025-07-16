// //todo - Ejercicio 1:
import { PI,IVA,DIAS_SEMANA } from './02constantes.js';

// Área de un círculo con radio 5
const radio = 5;
const areaCirculo = PI * radio**2;
console.log(`Área del círculo: ${areaCirculo}`);

// Precio con IVA de un producto de $100
const precioBase = 100;
const precioConIVA = precioBase + (precioBase * IVA);
console.log(`Precio con IVA: ${precioConIVA}`);

// Mostrar el tercer día de la semana
console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);

//todo - Ejercicio 2:
import { sumar, restar, multiplicar, areaCirculo as calcularArea } from './01operaciones-matematicas.js';

console.log(`Suma: ${sumar(5, 3)}`);                // 8
console.log(`Resta: ${restar(10, 4)}`);             // 6
console.log(`Multiplicación: ${multiplicar(6, 7)}`); // 42
console.log(`Área del círculo (radio 4): ${calcularArea(4)}`); // ≈ 50.2656

//todo - Ejercicio 3 :
// Paso 1: calcular total sin impuestos ni descuentos

//todo - Ejercicio 3:
import { calcularTotal, aplicarImpuestos, aplicarDescuento } from './01operaciones-matematicas.js';
import { DESCUENTO } from './02constantes.js'; // Ya tengo IVA importado en Ejercicio 1, así que solo traemos lo que falta

// Datos base
const precioUnitario = 120;
const cantidad = 3;

// Paso 1: calcular el total sin impuestos ni descuentos
const totalSinImpuestos = calcularTotal(precioUnitario, cantidad);
console.log(`Total sin impuestos: $${totalSinImpuestos}`);

// Paso 2: aplicar impuestos
const totalConIVA = aplicarImpuestos(totalSinImpuestos);
console.log(`Total con IVA: $${totalConIVA}`);

// Paso 3: aplicar descuento
const totalFinal = aplicarDescuento(totalConIVA);
console.log(`noTotal con descuento (${DESCUENTO * 100}%): $${totalFinal}`);