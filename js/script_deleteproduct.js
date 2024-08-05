document.getElementById('accept-button').addEventListener('click', function() {
  const supplierId = document.getElementById('input-code-book').value.trim();
  const productId = document.getElementById('input-codeB-book').value.trim();
  const fileType = document.getElementById('input-name-book').value.trim();


  fetch("http://localhost:8080/SupplierAPI/rest/ManagementSupplier/deleteProduct?supplierId="+supplierId+'&productId='+productId+'&fileType='+fileType, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(response => {
      if(response === "Null") {
        alert("Por favor llena los campos");
      }else if(response === "invalidType"){
        alert("Digite un tipo de archivo valido (json,txt,ser,xml,csv)");
      }else if(response === "InexS") {
        alert("No existe un proveedor para este id");
      }else if(response==="False"){
        alert("El proveedor no tiene dicho producto");
      }else if(response=="invalidId"){
        alert("Por favor digite un id de producto valido (Valor Numerico)")
      }else if(response==="True") {
        alert("Producto eliminado con exito");
      }

    })
    .catch( error => console.error('Error: ', error));
});
