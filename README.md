# CRUD NODE JS CARRITO
El proyecto se realizará con Node JS, Mysql, Express
->	Creamos la carpeta para el proyecto -> mkdir carrito
->	Instalamos aquello que sea necesario para el funcionamiento correcto.
*	npm install npm@latest
*	npm install node@latest
*	npm init –y para inicializar el package JSON de la aplicación
*	npm i cors express dotenv promise-mysql
*	npm nodemon morgan –save-dev

```
{
  "name": "carrito",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon",
    "dev": "nodemon ./src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "promise-mysql": "^5.2.0"
  },
  "devDependencies": {
    "morgan": "^1.10.0",
    "nodemon": "^3.1.4"
  }
}
```