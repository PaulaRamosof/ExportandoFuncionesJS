//todo - Ejercicio 4 :
export function crearUsuario(nombre, rol) {
  const rolesValidos = ['admin', 'cliente'];

  if (!rolesValidos.includes(rol)) {
    throw new Error('Rol inválido: debe ser "admin" o "cliente"');
  }

  const fechaActual = new Date();
  const formatoLocal = fechaActual.toLocaleDateString('es-CO');

  return {
    nombre,
    rol,
    fechaRegistro: formatoLocal,
  };
}

export function esAdmin(usuario) {
  return usuario.rol === 'admin';
}






