document.getElementById('accept-button').addEventListener('click', function() {

  var productId = document.getElementById('input-product-id').value.trim();
  var productName = document.getElementById('input-product-name').value.trim();
  var productPrice = document.getElementById('input-product-price').value.trim();
  var productDescription = document.getElementById('input-product-description').value.trim();
  var supplierId = document.getElementById('input-supplier-id').value.trim();
  const fileType = document.getElementById('input-file-type').value.trim();

  if (isNaN(parseInt(productId))) {
    alert("Por favor ingrese un id de producto válido (Valor numérico)");
    return;
  }

  var price = null;
  if (productPrice !== "") {
    price = parseFloat(productPrice);
    if (isNaN(price) || price <= 0) {
      alert("Por favor ingrese un precio de producto válido (Valor numérico positivo)");
      return;
    }
  }

  var product = {
    productId: parseInt(productId),
    productName: productName,
    price: price,
    description: productDescription
  };

  fetch('http://localhost:8080/SupplierAPI/rest/ManagementSupplier/addProductToSupplier?supplierId=' + supplierId + '&fileType=' + fileType, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
    .then(response => response.json())
    .then(response => {
      if (response === "NullId") {
        alert("Por favor ingrese un id de producto válido (Valor numérico)");
      } else if (response === "Null") {
        alert("Por favor complete el id del proveedor");
      } else if (response === "NullFile") {
        alert("Por favor complete el tipo de archivo");
      } else if (response === "InvalidFile") {
        alert("Digite un tipo de archivo válido (json, txt, ser, xml, csv)");
      } else if (response === "InexSupplier") {
        alert("No existe un proveedor con este ID");
      } else if (response === "InvalidProduct") {
        alert("Este id de producto ya existe");
      } else if (response === "NoPrice") {
        alert("Por favor ingrese un precio de producto válido (Valor numérico)");
      } else if (response === "NoFields") {
        alert("Por favor complete todos los campos");
      } else if (response === "True") {
        alert("Producto añadido con éxito");
      }
    })
    .catch(error => console.error('Error: ', error));
});
