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
            if( resultado === undefined ) {

                return {
                    id: '-1',
                    name: `No se ha encontrado el estudiante con el ID ${id}`,
                    email: '',
                    courses: []
                }

            }

            return resultado;

        },
        cursos(): any { // Lista de cursos
            return database.cursos;
        },
        curso( __: void, {curso} ): any { // Por ID
            const resultado =  database.cursos.filter( curso_ => curso_.id == curso )[0]; // Se busca solo el primero, aca es obvio que sera uno pero de esta forma nos da el objeto dentro del array que devuelve
            
            // En caso de que no hya resultado
            if( resultado === undefined ) {

                return {
                    id: '-1',
                    title: `No se ha encontrado el curso con el ID ${curso}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: "TODOS",
                    path: '',
                    teacher: '',
                    reviews: []
                }

            }

            return resultado;

        },



    }

}

export default query;