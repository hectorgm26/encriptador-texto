// Función para encriptar el texto
function encriptarTexto() {
  const textoOriginal = document.getElementById('texto').value.toLowerCase();
  let textoEncriptado = textoOriginal
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  
  mostrarTextoConvertido(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptarTexto() {
  const textoEncriptado = document.getElementById('texto').value.toLowerCase();
  let textoDesencriptado = textoEncriptado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  
  mostrarTextoConvertido(textoDesencriptado);
}

// Función para mostrar el texto convertido
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

// Función para copiar el texto convertido
function copiarTexto() {
  const textoConvertido = document.querySelector('.texto-convertido');
  textoConvertido.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles');
}

// Se llama a la funcion al cargar al inicio la página
window.onload = function() {
  mostrarTextoConvertido('');
}