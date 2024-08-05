document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.nav-link');
    const addButtonTwo = document.getElementById('add-buttonTwo');
    addButtonTwo.style.display = 'none';
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
  const addButton = document.getElementById('add-button');
  addButton.style.display = 'block';
  const addButtonTwo = document.getElementById('add-buttonTwo');
  addButtonTwo.style.display = 'none';
});

document.getElementById('button-product').addEventListener('click', function(event) {
  const addButton = document.getElementById('add-button');
  addButton.style.display = 'none';
  const addButtonTwo = document.getElementById('add-buttonTwo');
  addButtonTwo.style.display = 'block';
});

document.getElementById('add-button').addEventListener('click', function(event) {
  window.location.href = 'createsupplier.html';
});
document.getElementById('add-buttonTwo').addEventListener('click', function(event) {
  window.location.href = 'createproduct.html';
});

const selectOptions = document.getElementById('select-options');
selectOptions.addEventListener('change', function(event) {
});

selectOptions.addEventListener('click', function(event) {
  fetch("http://localhost:8080/SupplierAPI/rest/ManagementSupplier/getSuppliers?fileType=" + selectOptions.value.trim())
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


        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button-supplier';
        deleteButton.id = 'delete-button';

        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'resource/icons/pngwing.png';
        deleteIcon.alt = 'Delete Icon';
        deleteButton.appendChild(deleteIcon);


        const editButton = document.createElement('button');
        editButton.className = 'edit-button-supplier';
        editButton.id = 'edit-button';

        const editIcon = document.createElement('img');
        editIcon.src = 'resource/icons/pencil.png';
        editIcon.alt = 'Edit Icon';
        editButton.appendChild(editIcon);

        cardBody.appendChild(deleteButton);
        cardBody.appendChild(editButton);
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
      window.location.href = 'deletesupplier.html';
    }
  }
});
document.getElementById('content').addEventListener('click', function(event) {
  if (event.target.closest('.edit-button-supplier')) {
    const card = event.target.closest('.card');
    if (card) {
      window.location.href = 'updatesupplier.html';
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
productOption.addEventListener('click', function(event) {

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
        button.href = '#';

        const icon = document.createElement('img');
        icon.src = 'resource/icons/pngwing.png';
        icon.alt = 'Delete Icon';


        const anotherButton = document.createElement('button');
        anotherButton.className = 'edit-button-product';
        anotherButton.id = 'another-button';
        anotherButton.href = '#';

        const anotherIcon = document.createElement('img');
        anotherIcon.src = 'resource/icons/pencil.png';
        anotherIcon.alt = 'Another Icon';

        anotherButton.appendChild(anotherIcon);
        cardBody.appendChild(anotherButton);
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
      window.location.href = 'deleteproduct.html';
    }
  }
});
document.getElementById('content').addEventListener('click', function(event) {
  if (event.target.closest('.edit-button-product')) {
    const card = event.target.closest('.card');
    if (card) {
      window.location.href = 'updateproduct.html';
    }
  }
});
