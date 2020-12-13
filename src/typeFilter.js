(function mostrarTipo(fileInput) {
  const archivos = fileInput.files;

  for (let i = 0; i < archivos.length; i++) {
    const nombre = archivos[i].name;
    const tipo = archivos[i].type;
    alert('Nombre del archivo: ' + nombre + ' , Tipo: ' + tipo);
  }
})()
