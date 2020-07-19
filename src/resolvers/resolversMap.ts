import { IResolvers } from 'graphql-tools';
import query from './query';
import type from './type';
import mutation from './mutation';

// Definir consultas
const resolversMap : IResolvers =  {

    ...query,
    ...type,
    ...mutation

}

export default resolversMap;