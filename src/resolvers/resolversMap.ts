import { IResolvers } from 'graphql-tools';
import query from './query';

// Definir consultas
const resolversMap : IResolvers =  {

    ...query

}

export default resolversMap;