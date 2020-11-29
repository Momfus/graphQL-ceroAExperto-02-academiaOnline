import 'graphql-import-node'; // para importar el fichero de graphql
// import typeDefs from './schema.graphql';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers/resolversMap'

// ./graphql/typeDefs.js
import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import  {mergeTypeDefs}  from '@graphql-tools/merge';

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql')); // Para detectar cualquier directorio y fichero con esta extención

const typeDefs = mergeTypeDefs(typesArray);

const schema: GraphQLSchema = makeExecutableSchema({

    // Se agregan las definiciones de los tipso y las respuestas
    typeDefs,
    resolvers

});

export default schema;
