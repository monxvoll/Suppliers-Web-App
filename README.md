# Proyecto Web de Gestión de Proveedores y Usuarios

Este proyecto proporciona una interfaz web para interactuar con la API RESTful de gestión de proveedores y usuarios. Permite realizar operaciones CRUD sobre proveedores, productos y usuarios desde una interfaz amigable.

## Estructura del Proyecto

### Directorio `html`
Contiene los archivos HTML que forman la interfaz del proyecto.

- `index.html`: Página de inicio del proyecto.
- `dashboard.html`: Panel de control principal.
- `createproduct.html`: Formulario para crear un nuevo producto.
- `createsupplier.html`: Formulario para crear un nuevo proveedor.
- `deleteproduct.html`: Formulario para eliminar un producto.
- `deletesupplier.html`: Formulario para eliminar un proveedor.
- `updateproduct.html`: Formulario para actualizar un producto existente.
- `updatesupplier.html`: Formulario para actualizar un proveedor existente.

### Directorio `html/resource`
Contiene recursos HTML adicionales que son utilizados por el proyecto.

### Directorio `js`
Contiene los archivos JavaScript que manejan la lógica de interacción con la API y la actualización dinámica de la interfaz.

- `script_createproduct.js`: Maneja la creación de productos.
- `script_createsupplier.js`: Maneja la creación de proveedores.
- `script_dashboard.js`: Maneja la visualización del panel de control.
- `script_deleteproduct.js`: Maneja la eliminación de productos.
- `script_deletesupplier.js`: Maneja la eliminación de proveedores.
- `script_editproduct.js`: Maneja la actualización de productos.
- `script_editsupplier.js`: Maneja la actualización de proveedores.
- `scriptUser.js`: Maneja las interacciones relacionadas con los usuarios.

### Archivos CSS

- `stylesdashboard.css`: Contiene los estilos utilizados en el panel de control.
- `styles.css`: Contiene los estilos generales de la aplicación.
- `stylecreate.css`: Contiene los estilos específicos para las páginas de creación de proveedores y productos.
- `styleedit.css`: Contiene los estilos específicos para las páginas de edición de proveedores y productos.
- `styledelete.css`: Contiene los estilos específicos para las páginas de eliminación de proveedores y productos.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL del repositorio>
