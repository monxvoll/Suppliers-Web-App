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

  fetch('http://localhost:8080/SupplierAPI/rest/ManagementSupplier/addSupplier?fileType='+fileType,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(supplier)
  })

    .then(response => response.json())
    .then(response => {
      if (response === "Null") {
        alert("Por favor complete todos lo campos");
      } else if (response === "InvalidEmail") {
        alert("Por favor digite un email valido");
      } else if (response === "InvalidPhone") {
        alert("Digite un telefono valido (10 digitos)");
      } else if (response === "InvalidFile") {
        alert("Digite un tipo de archivo valido (json,plain,ser,xml,csv)");
      } else if (response === "Existence") {
        alert("Este id de proveedor ya existe");
      } else if (response === "True") {
        alert("Proveedor añadido con exito");
      }
    })
    .catch( error => console.error('Error: ', error));
});
