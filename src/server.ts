// console.log('Hola a la academia online!');

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import schema from './schema/index';

import expressPlayground from 'graphql-playground-middleware-express';

const app = express();

app.use('*', cors()); 
app.use( compression() );

// Definir el servidor ApolloServer
const servidor = new ApolloServer({

    schema,
    introspection: true

})


// Definir el middleware
servidor.applyMiddleware({app});

// Ruta principal (para realizar el playground de express)
app.get('/', expressPlayground ({

    endpoint: '/graphql'

}));

// Inicializar servidor http
const httpServer = createServer(app);

const PORT = 5200;
httpServer.listen(
    {
    port: PORT
    },
    () => {
        console.log(`Servidor academia online listo http://localhost:${PORT}/graphql`);
    },
);