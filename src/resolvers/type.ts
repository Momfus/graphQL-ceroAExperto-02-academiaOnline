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
    }

}

export default type;