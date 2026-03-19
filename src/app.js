//Importa el framework Express para crear aplicaciones web
import express from 'express';
//Importa la funcion 'create' de express-handlebars para configurar el
//motor de plantillas Handlebars
import { create } from 'express-handlebars';
//Importa las rutas definidas en el módulo index.routes.js
import indexRoutes from './routes/index.routes.js';
//Importa el módulo 'path' para trabajar con rutas de archivos y directorios
import path from 'path';
import morgan from 'morgan';

//Crear una instancia de la aplicación Express
const app = express();
//Defino el directorio con la ruta del archivo de las vistas
app.set("views", path.join(__dirname, "views"));
//Defino directorio de layout y extensión de los archivos de las vistas
const exphbs = create({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main"
})
//Defino motor de las plantillas
app.engine('hbs',exphbs.engine);
app.set("view engine", "hbs");

//Middleware para registrar las solicitudes HTTP en la consola
app.use(morgan('start'));
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);

export default app;