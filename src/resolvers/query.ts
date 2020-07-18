import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

// Definir consultas
const query : IResolvers =  {

    Query: {
        estudiantes(): any { // Lista
            return database.estudiantes;
        },
        estudiante( __: void, {id} ): any { // Por ID
            return database.estudiantes.filter( estudiante => estudiante.id == id )[0]; // Se busca solo el primero, aca es obvio que sera uno pero de esta forma nos da el objeto dentro del array que devuelve
        }
    }

}

export default query;