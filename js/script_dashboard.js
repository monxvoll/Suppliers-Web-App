document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.getElementById('button-supplier').addEventListener('click', function(event) {
  const select = document.getElementById('button-select');
  select.style.display = 'none';
  const content = document.getElementById('content');
  content.innerHTML = '';

});

document.getElementById('button-product').addEventListener('click', function(event) {
  const content = document.getElementById('content');
  content.innerHTML = '';
});


const selectOptions = document.getElementById('select-options');
selectOptions.addEventListener('change', function(event) {
});

selectOptions.addEventListener('change', function(event) {
  fetch("http://localhost:8080/SupplierAPI/rest/ManagementSupplier/getSuppliers?fileType=" + selectOptions.value)
    .then(response => response.json())
    .then(data => {
      const content = document.getElementById('content');
      content.innerHTML = '';
      data.forEach(supplier => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const name = document.createElement('h2');
        name.className = 'card-title';
        name.textContent = supplier.name;

        const id = document.createElement('p');
        id.className = 'card-text';
        id.textContent = `ID: ${supplier.id}`;

        const nameCompany = document.createElement('p');
        nameCompany.className = 'card-text';
        nameCompany.textContent = `Empresa: ${supplier.nameCompany}`;

        const address = document.createElement('p');
        address.className = 'card-text';
        address.textContent = `Dirección: ${supplier.address}`;

        const phoneNumber = document.createElement('p');
        phoneNumber.className = 'card-text';
        phoneNumber.textContent = `Teléfono: ${supplier.phoneNumber}`;

        const email = document.createElement('p');
        email.className = 'card-text';
        email.textContent = `Email: ${supplier.email}`;

        const button = document.createElement('button');
        button.className = 'delete-button-supplier';
        button.id = 'delete-button';
        button.href = '#';  // Puedes cambiar el href si es necesario

        const icon = document.createElement('img');
        icon.src = 'resource/icons/pngwing.png';
        icon.alt = 'Delete Icon';
        button.appendChild(icon);

        cardBody.appendChild(button);
        cardBody.appendChild(name);
        cardBody.appendChild(id);
        cardBody.appendChild(nameCompany);
        cardBody.appendChild(address);
        cardBody.appendChild(phoneNumber);
        cardBody.appendChild(email);
        card.appendChild(cardBody);
        content.appendChild(card);
      });
    })
    .catch(error => console.error('Error', error));
});


document.getElementById('content').addEventListener('click', function(event) {
  if (event.target.closest('.delete-button-supplier')) {
    const card = event.target.closest('.card');
    if (card) {
      window.location.href = 'deletesupplier.html'; // Cambia esta ruta a la que desees
    }
  }
});

document.getElementById('button-product').addEventListener('click', function(event) {
  fetch("http://localhost:8080/SupplierAPI/rest/ManagementSupplier/getSuppliers?fileType=" + selectOptions.value)
    .then(response => response.json())
    .then(data => {
      const select = document.getElementById('button-select');
      select.innerHTML = '';
      data.forEach(supplier => {
        const option = document.createElement('option');
        option.value = supplier.id;
        option.textContent = supplier.name;
        select.appendChild(option);
      });
      select.style.display = 'block';
    })
    .catch(error => console.error('Error', error));
});







const productOption = document.getElementById('button-select');
productOption.addEventListener('change', function(event) {
  console.log(selectOptions.value )
  console.log(productOption.value)
  fetch("http://localhost:8080/SupplierAPI/rest/ManagementSupplier/getProductById?fileType=" + selectOptions.value + '&id=' + productOption.value)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const content = document.getElementById('content');
      content.innerHTML = '';


      data.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const productName = document.createElement('h2');
        productName.className = 'card-title';
        productName.textContent = product.productName;

        const id = document.createElement('p');
        id.className = 'card-text';
        id.textContent = `ID: ${product.productId}`;

        const price = document.createElement('p');
        price.className = 'card-text';
        price.textContent = `Precio: $${product.price.toFixed(2)}`;

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = `Descripción: ${product.description}`;

        const button = document.createElement('button');
        button.className = 'delete-button-product';
        button.id = 'delete-button';
        button.href = '#';  // Puedes cambiar el href si es necesario

        const icon = document.createElement('img');
        icon.src = 'resource/icons/pngwing.png';
        icon.alt = 'Delete Icon';

        cardBody.appendChild(button);
        button.appendChild(icon);
        cardBody.appendChild(productName);
        cardBody.appendChild(id);
        cardBody.appendChild(price);
        cardBody.appendChild(description);
        card.appendChild(cardBody);
        content.appendChild(card);
      });
    })
    .catch(error => console.error('Error', error));
});
document.getElementById('content').addEventListener('click', function(event) {
  if (event.target.closest('.delete-button-product')) {
    const card = event.target.closest('.card');
    if (card) {
      window.location.href = 'deleteproduct.html'; // Cambia esta ruta a la que desees
    }
  }
});
