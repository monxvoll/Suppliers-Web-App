document.getElementById('accept-button').addEventListener('click', function() {
  var id = document.getElementById('input-code-supplier').value.trim();
  var name = document.getElementById('input-name-supplier').value.trim();
  var nameCompany = document.getElementById('input-nameC-supplier').value.trim();
  var address = document.getElementById('input-address-supplier').value.trim();
  var phoneNumber = document.getElementById('input-phone-supplier').value.trim();
  var email = document.getElementById('input-email-supplier').value.trim();
  const fileType = document.getElementById('input-file-supplier').value.trim();

  var supplier = {
    id: id,
    name : name,
    nameCompany: nameCompany,
    address : address,
    phoneNumber : phoneNumber,
    email : email,
  };

  fetch('http://localhost:8080/SupplierAPI/rest/ManagementSupplier/updateSupplier?fileType='+fileType,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(supplier)
  })

    .then(response => response.json())
    .then(response => {
      if (response === "NullId") {
        alert("Por favor digite un id");
      } else if (response === "Inex") {
        alert("No existe un proveedor para este id");
      } else if (response === "NullFile") {
        alert("Por favor digite un tipo de archivo");
      } else if (response === "invalidType") {
        alert("Digite un tipo de archivo valido (json,plain,ser,xml,csv)");
      } else if (response === "One") {
        alert("Por favor complete al menos una variable a actualizar");
      } else if (response === "Email") {
        alert("Digite un email valido");
      } else if (response === "Phone") {
        alert("Digite un telefono valido (10 digitos)");
      } else if (response === "True") {
        alert("Proveedor actualizado con exito");
      }
    })
    .catch( error => console.error('Error: ', error));
});
