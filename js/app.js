document.getElementById('texto').addEventListener('input', function() {
  validarTexto(this.value);
});

function encriptarTexto() {
  const textoOriginal = document.getElementById('texto').value.toLowerCase();
  const textoValidado = validarTexto(textoOriginal);
  let textoEncriptado = textoValidado
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  
  mostrarTextoConvertido(textoEncriptado);
}

function desencriptarTexto() {
  const textoEncriptado = document.getElementById('texto').value.toLowerCase();
  const textoValidado = validarTexto(textoEncriptado);
  let textoDesencriptado = textoValidado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  
  mostrarTextoConvertido(textoDesencriptado);
}

function mostrarTextoConvertido(texto) {
  const placeholder = document.querySelector('.texto-placeholder');
  const textoConvertido = document.querySelector('.texto-convertido');
  
  if (texto) {
      placeholder.style.display = 'none';
      textoConvertido.style.display = 'block';
      textoConvertido.value = texto;
  } else {
      placeholder.style.display = 'flex';
      textoConvertido.style.display = 'none';
      textoConvertido.value = '';
  }
}

function copiarTexto() {
  const textoConvertido = document.querySelector('.texto-convertido');
  textoConvertido.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles');
}

function validarTexto(texto) {
  const textoValidado = texto
      .replace(/[ÁÉÍÓÚÜ]/gi, '') // Elimina acentos
      .replace(/[A-Z]/g, '') // Elimina mayúsculas
      .replace(/[^a-z\s]/g, ''); // Elimina caracteres no permitidos

  const mensajeAdvertencia = document.getElementById('mensaje-advertencia');
  if (texto !== textoValidado) {
    mostrarAdvertencia();
  } else {
    ocultarAdvertencia();
  }
  
  // Actualiza el textarea con el texto validado
  document.getElementById('texto').value = textoValidado;

  return textoValidado;
}

function mostrarAdvertencia() {
  const mensajeAdvertencia = document.getElementById('mensaje-advertencia');
  mensajeAdvertencia.style.display = 'block';
}

function ocultarAdvertencia() {
  const mensajeAdvertencia = document.getElementById('mensaje-advertencia');
  mensajeAdvertencia.style.display = 'none';
}

window.onload = function() {
  mostrarTextoConvertido('');
}
