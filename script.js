function irAlPortal(e) {
  e.preventDefault();
  document.getElementById('pantalla-login').classList.remove('activa');
  document.getElementById('pantalla-portal').classList.add('activa');

  // Disparar animaciones justo al cargar
  setTimeout(() => {
    document.getElementById('texto-bienvenida').classList.add('mostrar');
    document.getElementById('tarjeta-1').classList.add('mostrar');
    document.getElementById('tarjeta-2').classList.add('mostrar');
  }, 50);

  return false;
}

function mostrarPassword() {
  const campo = document.getElementById('campo-password');
  campo.type = campo.type === 'password' ? 'text' : 'password';
}

function toggleMenu() {
  const menu = document.getElementById('menu-usuario');
  const pildora = document.querySelector('.pildora-usuario');
  if (menu) menu.classList.toggle('abierto');
  if (pildora) pildora.classList.toggle('activa');
}

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(e) {
  const menu = document.getElementById('menu-usuario');
  const pildora = document.querySelector('.pildora-usuario');
  if (menu && pildora && !menu.contains(e.target) && !pildora.contains(e.target)) {
    menu.classList.remove('abierto');
    pildora.classList.remove('activa');
  }
});

function volverAlLogin() {
  const pildora = document.querySelector('.pildora-usuario');
  document.getElementById('texto-bienvenida').classList.remove('mostrar');
  document.getElementById('tarjeta-1').classList.remove('mostrar');
  document.getElementById('tarjeta-2').classList.remove('mostrar');
  document.getElementById('menu-usuario').classList.remove('abierto');
  if (pildora) pildora.classList.remove('activa');

  document.getElementById('pantalla-portal').classList.remove('activa');
  document.getElementById('pantalla-login').classList.add('activa');
}