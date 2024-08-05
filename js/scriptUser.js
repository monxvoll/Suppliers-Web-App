function validateUser(){
  var name = document.getElementById("textUser").value.trim();
  var password = document.getElementById("textPassword").value.trim();

  fetch('http://localhost:8080/SupplierAPI/rest/ManagementUser/getUserByName?name=' +name + '&password='+password)

    .then(response => response.json())
    .then(response => {
      if(response === "True"){
        window.location.href="dashboard.html";
      }else if(response ==="Null"){
        alert("Por favor rellene los campos.");
      }else if(response === "False"){
        alert("El usuario no se encuentra registrado.")
      }


    })
    .catch( error => console.error('Error: ', error));
}
function registerUser(){
  var userName = document.getElementById("textUser").value.trim();
  var userPassword = document.getElementById("textPassword").value.trim();

  var user = {
    userName: userName,
    userPassword: userPassword
  };

  fetch('http://localhost:8080/SupplierAPI/rest/ManagementUser/addUser',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })

    .then(response => response.json())
    .then(response => {
      if(response == "Null") {
        alert("Por favor llena los campos");
      }else if(response === "True"){
        alert("Usuario Añadido con exito");
      }else{
        alert("El usuario ya se encuentra registrado");
      }

    })
    .catch( error => console.error('Error: ', error));
}



function deleteUser(){
  var name = document.getElementById("textUser").value.trim();
  var password = document.getElementById("textPassword").value.trim();

  fetch('http://localhost:8080/SupplierAPI/rest/ManagementUser/deleteUser?name=' +name + '&password=' + password,{
    method: 'DELETE'
  })

    .then(response => response.json())
    .then(response => {
      if(response === "Null") {
        alert("Por favor llena los campos");
      }else if(response === "Inex") {
        alert("Este usuario no existe");
      }else if(response==="False"){
        alert("Contraseña Incorrecta");
      }else{
        alert("Usuario eliminado con exito");
      }

    })
    .catch( error => console.error('Error: ', error));
}
