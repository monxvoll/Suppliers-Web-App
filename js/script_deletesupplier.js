document.getElementById('accept-button').addEventListener('click', function() {
  const id = document.getElementById('input-code-book').value.trim();
  const fileType = document.getElementById('input-name-book').value.trim();


  fetch(`http://localhost:8080/SupplierAPI/rest/ManagementSupplier/deleteSupplier?id=${encodeURIComponent(id)}&fileType=${encodeURIComponent(fileType)}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(response => {
      if (response === "Null") {
        alert("Por favor llena los campos");
      } else if (response === "invalidType") {
        alert("Digite un tipo de archivo válido (json, txt, ser, xml, csv)");
      } else if (response === "Inex") {
        alert("No existe un proveedor para este id");
      } else if (response === "True") {
        alert("Proveedor eliminado con éxito");
      } else {
        alert("Respuesta inesperada del servidor");
      }
    })
    .catch(error => console.error('Error: ', error));
});
