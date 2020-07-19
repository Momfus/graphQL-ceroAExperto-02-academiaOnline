// Las modificaciones y eliminar
import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash'; // permite facilitarnos la búsqueda y filtrado en arrays (se usa el guión bajo como estándar)
import { SSL_OP_CIPHER_SERVER_PREFERENCE } from 'constants';
import { cursorTo } from 'readline';

const mutation : IResolvers =  {

    Mutation: {
        cursoNuevo( __:void, { curso } ): any {

            const ItemCurso = {
                id: String(database.cursos.length + 1), // Lo que esta entre parentesis es para definirle de forma automatica con la cantidad de cursos que existe mas uno
                title: curso.title,
                description: curso.description,
                clases  : curso.clases, 
                time    : curso.time, 
                level   : curso.level,
                logo    : curso.logo,
                path    : curso.path,
                teacher : curso.techer,
                reviews : []
            }

            // Corroborar que el nuevo objeto ingresado no tenga el mismo título que otro curso
            if( database.cursos.filter( itemCurs => itemCurs.title === ItemCurso.title).length === 0) {

                database.cursos.push( ItemCurso );
                return ItemCurso;

            }

            // En caso que el curso ya existia
            return {
                id: -1,
                title: `El curso ya existe con ese título`,
                description: '',
                clases  : -1, 
                time    : 0.0, 
                level   : 'TODOS',
                logo    : '',
                path    : '',
                teacher : '',
                reviews : []
            }


        },

        modificarCurso( __:void, { curso }): any {
            const elementoExiste = _.findIndex( database.cursos, function( o ) {

                return o.id === curso.id

            });

            // En caso de exisitr, se coloca la valoración al curso sacado del JSON
            if( elementoExiste > -1 ) {
                const valoraciones = database.cursos[elementoExiste].reviews
                curso.reviews = valoraciones;
                database.cursos[elementoExiste] = curso;

                return curso;

            }

            // En caso de no existir, señalarlo devolviendo con un formato valido requerido
            return {
                id: -1,
                title: `El curso no existe en la base de datos`,
                description: '',
                clases  : -1, 
                time    : 0.0, 
                level   : 'TODOS',
                logo    : '',
                path    : '',
                teacher : '',
                reviews : []
            }
        },

        eliminarCurso( __:void, { id }): any {

            const borrarCurso = _.remove( database.cursos, function(curso) {

                return curso.id === id;

            } );

            // Ver si la lista devuelta es definida (si no hay nada en la primera posicion, no ha borrado nada)
            if(  borrarCurso[0] === undefined ) {
                // En caso que el curso ya existia
                return {
                    id: -1,
                    title: 'El curso no se puede borrar porque no se ha encontrado ningún curso con ese ID',
                    description: '',
                    clases  : -1, 
                    time    : 0.0, 
                    level   : 'TODOS',
                    logo    : '',
                    path    : '',
                    teacher : '',
                    reviews : []
                }

                
            }
            
            return borrarCurso[0];
            
        }
    }

}

export default mutation;