import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

// Definir consultas
const query : IResolvers =  {

    Query: {
        estudiantes(): any { // Lista estudiantes
            return database.estudiantes;
        },
        estudiante( __: void, {id} ): any { // Por ID
            const resultado =  database.estudiantes.filter( estudiante => estudiante.id == id )[0]; // Se busca solo el primero, aca es obvio que sera uno pero de esta forma nos da el objeto dentro del array que devuelve
            
            // En caso de que no hya resultado
            if( resultado == undefined ) {

                return {
                    id: '-1',
                    name: `No se ha encontrado el estudiante con el ID ${id}`,
                    email: '',
                    courses: []
                }

            }
        },
        cursos(): any { // Lista de cursos
            return database.cursos;
        },

    }

}

export default query;