const { ApolloServer, gql } = require('apollo-server-azure-functions');
  
const PROJECT_DATA = [
  {
    name: 'Portfolio',
    description: 'A portfolio of my personal projects.',
    coverImageUrl: 'https://place-puppy.com/200x200',
    projectUrl: 'https://github.com/tutkowskim/portfolio',
  },
  {
    name: 'Kopps Flavor Forecast API',
    description: 'An api to query the custard flavor forecast at the Kopps resturants around Milwaukee.',
    coverImageUrl: 'https://place-puppy.com/200x200',
    projectUrl: 'https://github.com/tutkowskim/kopps-flavor-forcast-api',
  },
];

const typeDefs = gql`
  type Project {
    name: String!
    description: String!
    coverImageUrl: String!
    projectUrl: String!
  }

  type Query {
    projects: [Project!]!
  }
`;

const resolvers = {
  Query: {
    projects: () => PROJECT_DATA,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
