import 'graphql-import-node'; // para importar el fichero de graphql
import typeDefs from './schema.graphql';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers/resolversMap'

const schema: GraphQLSchema = makeExecutableSchema({

    // Se agregan las definiciones de los tipso y las respuestas
    typeDefs,
    resolvers

});

export default schema;
