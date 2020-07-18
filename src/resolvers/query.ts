import { IResolvers } from 'graphql-tools';

// Definir consultas
const query : IResolvers =  {

    Query: {
        estudiantes(): string {
            return 'Lista de estudiantes';
        }
    }

}

export default query;