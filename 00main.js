
import { PI, IVA, DIAS_SEMANA } from './constantes.js';

// Área de un círculo con radio 5
const radio = 5;
const areaCirculo = PI * Math.pow(radio, 2);
console.log(`Área del círculo: ${areaCirculo}`);

// Precio con IVA de un producto de $100
const precioBase = 100;
const precioConIVA = precioBase + (precioBase * IVA);
console.log(`Precio con IVA: ${precioConIVA}`);

// Mostrar el tercer día de la semana
console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);