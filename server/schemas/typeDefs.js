// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password:String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: saveBookInput): User
        removeBook(bookId: String!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {

        bookId: ID
        title: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }
`;



// export the typeDefs
module.exports = typeDefs;