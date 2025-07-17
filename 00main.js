// Ejercicio 1: Constantes y cálculos básicos
import { PI, IVA, DIAS_SEMANA, DESCUENTO } from './02constantes.js';

console.log('--- EJERCICIO 1: CONSTANTES ---');
const radio = 5;
const area = PI * radio ** 2;
console.log('Área del círculo (r=5):', area);

const precioProducto = 100;
const precioConIva = precioProducto * (1 + IVA);
console.log('Precio con IVA (100):', precioConIva);

console.log('Tercer día de la semana:', DIAS_SEMANA[2]);


// Ejercicio 2: Funciones matemáticas básicas
import {
  sumar,
  restar,
  multiplicar,
  areaCirculo
} from './01operaciones-matematicas.js';

console.log('\n--- EJERCICIO 2: FUNCIONES MATEMÁTICAS ---');
console.log('Suma (3 + 4):', sumar(3, 4));
console.log('Resta (10 - 6):', restar(10, 6));
console.log('Multiplicación (2 * 5):', multiplicar(2, 5));
console.log('Área con función (r=5):', areaCirculo(5));


// Ejercicio 3: Calculadora de impuestos y descuento
import {
  calcularTotal,
  aplicarImpuestos,
  aplicarDescuento
} from './01operaciones-matematicas.js';

console.log('\n--- EJERCICIO 3: IMPUESTOS Y DESCUENTO ---');
const precio = 100;
const cantidad = 3;
const subtotal = calcularTotal(cantidad, precio);
const totalImpuestos = aplicarImpuestos(subtotal);
const totalFinal = aplicarDescuento(totalImpuestos);

console.log('Subtotal (3 x 100):', subtotal);
console.log('Con impuestos (19%):', totalImpuestos);
console.log('Con descuento (10%):', totalFinal);


// Ejercicio 4: Gestión de usuarios
import { ROLES } from './03usuariosConstantes.js';
import { crearUsuario, esAdmin } from './04usuarios.js';

console.log('\n--- EJERCICIO 4: USUARIOS ---');
const usuario1 = crearUsuario('Pedro', ROLES.ADMIN);
const usuario2 = crearUsuario('Carlos', ROLES.CLIENTE);

console.log(' Usuario 1:', usuario1);
console.log(' Usuario 2:', usuario2);

console.log(`¿${usuario1.nombre} es admin?`, esAdmin(usuario1));
console.log(`¿${usuario2.nombre} es admin?`, esAdmin(usuario2));


// Ejercicio 5: Sistema de descuentos por rol
import { aplicarDescuentoPorRol } from './01operaciones-matematicas.js';

console.log('\n--- EJERCICIO 5: DESCUENTO POR ROL ---');
const admin = crearUsuario('Pedro', ROLES.ADMIN);
const cliente = crearUsuario('Carlos', ROLES.CLIENTE);

// ADMIN: 4 productos a 25
const subtotalAdmin = calcularTotal(4, 25);
const impuestosAdmin = aplicarImpuestos(subtotalAdmin);
const totalAdmin = aplicarDescuentoPorRol(impuestosAdmin, admin);

// CLIENTE: 3 productos a 50
const subtotalCliente = calcularTotal(3, 50);
const impuestosCliente = aplicarImpuestos(subtotalCliente);
const totalCliente = aplicarDescuentoPorRol(impuestosCliente, cliente);

console.log('\n--- ADMIN PEDRO ---');
console.log('Subtotal:', subtotalAdmin);
console.log('Con impuestos:', impuestosAdmin);
console.log('Total con descuento:', totalAdmin);

console.log('\n--- CLIENTE CARLOS ---');
console.log('Subtotal:', subtotalCliente);
console.log('Con impuestos:', impuestosCliente);
console.log('Total con descuento:', totalCliente);