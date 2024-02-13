require('dotenv').config();

const express = require('express')
const cors = require('cors');

const router = require('../routes/user.routes');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Paths
        this.path_users = '/api/users'

        //Middlewares: función que siempre se ejecuta al levantar el server
        this.middlewares();

        //Creamos las rutas
        this.routes()
    }

    middlewares() {

        //Directorio public
        this.app.use(express.static('public'));

        //CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json())

    }

    //Definimos las rutas
    routes() {

        this.app.use(this.path_users, require('../routes/user.routes'))    //Invocamos este router para este path

    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Server correiendo en el puerto ', this.port)
        });
    }

}

module.exports = Server