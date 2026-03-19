//Importar la aplicación configurada desde el archivo app.js
//En ese archivo ya se creó y configuró Express
import app from "./app.js";

//Importar la conexión a la base de datos
//Esto ejecuta el archivo y establece la conexión
import "./database.js";

//Inicia el servidor y lo pone a escuchar en el puerto 3000
//Esto significa que podrás acceder al servidor visitando http://localhost:3000 en tu navegador
app.listen(3000);

//Imprime un mensaje en la consola para indicar
//que el servidor está funcionando correctamente
console.log("Servidor escuchando en el puerto", 3000);