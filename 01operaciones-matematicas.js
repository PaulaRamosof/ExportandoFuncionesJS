import { IVA, DESCUENTO } from './02constantes.js';
//Ejercicio 2 :
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export const PI = 3.1416;

export function areaCirculo(radio) {
  return PI * radio ** 2; 
}
//Ejercicio 3 : 

export function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

export function aplicarImpuestos(total) {
  return total + (total * IVA);
}

export function aplicarDescuento(total) {
  return total - (total * DESCUENTO);
}

import { ROLES } from './03usuariosConstantes.js';

export function aplicarDescuentoPorRol(total, usuario) {
  if (usuario.rol === ROLES.ADMIN) {
    return total * 0.8; // 20% de descuento
  } else if (usuario.rol === ROLES.CLIENTE) {
    return total * (1 - DESCUENTO); // Usa valor de DESCUENTO (ej. 0.1 = 10%)
  } else {
    return total; // Sin descuento
  }
}
