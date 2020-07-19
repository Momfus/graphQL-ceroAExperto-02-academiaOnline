import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash'; // permite facilitarnos la búsqueda y filtrado en arrays (se usa el guión bajo como estándar)


// Se definen tipos de soluciones a consultes (en este caso cuando se trae una referencia dentro de una consulta de un curso)
const type : IResolvers =  {

    Estudiante: {
        courses: parent => {

            const cursosLista: Array<any> = [];
            parent.courses.map( (curso: string) => {

                cursosLista.push( _.filter(database.cursos, ['id', curso])[0] ) // Nos da el resultado del primer resultado

            });

            return cursosLista;

        }
    },
    
    Course: {
        students: parent => {
            const listaEstudiantes: Array<any> = [];
            const idCurso = parent.id;
            database.estudiantes.map( (estudiante: any ) => {

                if( estudiante.courses.filter( (id: any) => id === idCurso ) > 0 )  { // Si encuentra un estudiante con el id del curso (siendo una lista mayor que cero el resultado) lo agrega

                    listaEstudiantes.push(estudiante);
                    
                }

            });

            return listaEstudiantes;
        },

        path: parent => `https://www.udemy.com${parent.path}`,

    }

}

export default type;