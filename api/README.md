# Emme-3D: Backend
Para arrancar el servidor en local hay que usar el siguiente comando:
```bash
npm run start
```

Estructura del backend:
- ***index.js:*** Archivo principal en el que arranca la aplicación.
- ***middleware:*** Contiene las funciones que llamarán las routes para interactuar con la base de datos.
- ***models:*** Contiene los modelos que definen las tablas de la base de datos.
- ***routes:*** Contiene las rutas por las que el front realizará consultas a la abse de datos.

## Productos
- **GET** ```/products/``` -> Devuelve la lista de todos los productos.
- **GET** ```/products/:id``` -> Devuelve el producto solicitado por **:id**.
- **GET** ```/products/?name=``` -> Devuelve el producto solicitado por query name.
- **POST** ```/products/``` -> Recibe por **body** el objeto a crear.
- **PUT** ```/products/:id``` -> Modifica el producto solicitado por **:id** con los datos mandados por **body**.
- **DELETE** ```/products/:id``` -> Borra (lógico) el producto solicitado por **:id**.

## Categorías
- **GET** ```/categories/``` -> Devuelve la lista de todas las categoría.
- **POST** ```/categories/``` -> Recibe por **body** la categoría a crear.
- **PUT** ```/categories/:id``` -> Modifica la categoría solicitado por **:id** con el nombre mandado por **body**.
- **DELETE** ```/categories/:id``` -> Borra (lógico) la categoría solicitado por **:id**.