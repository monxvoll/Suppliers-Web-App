document.getElementById('accept-button').addEventListener('click', function() {
  const id = document.getElementById('input-code-book').value;
  const fileType = document.getElementById('input-name-book').value;
  fetch("http://localhost:8080/SupplierAPI/rest/ManagementSupplier/deleteProduct?id="+id+'&fileType='+fileType, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(response => {
      if(response === "Null") {
        alert("Por favor llena los campos");
      }else if(response === "invalidType"){
        alert("Digite un tipo de archivo valido (json,plain,ser,xml,csv)");
      }else if(response === "Inex") {
        alert("No existe un proveedor para este id");
      }else if(response==="True"){
        alert("Proveedor eliminado con exito");
      }

    })
    .catch( error => console.error('Error: ', error));
});
