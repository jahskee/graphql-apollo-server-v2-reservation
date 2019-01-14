const { gql } = require('apollo-server-express');

const authorSchema = gql`
  type Author {
    name: String
    age: Int
  }

  type Query {
    authors: [Author]
  }
`

module.exports = authorSchema;