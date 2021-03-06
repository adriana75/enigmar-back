import { gql } from 'apollo-server-express';

const typesProjects = gql`
    type Project {
        _id: ID!
        name: String!
        generalObjective: String!
        specificObjectives: [String]!
        budget: Float!
        startDate: Date!
        endDate: Date!
        leader_id: User!
        status: Enum_statusProject
        phase: Enum_phaseProject
        advances : [Advance]
    }
    type Query {
        Projects: [Project]
        Project(_id: String!): Project
        myProjects(leader_id: String!): [Project]
    }
    type Mutation {
        createProject(
            name: String!
            generalObjective: String!
            specificObjectives: [String]!
            budget: Float!
            startDate: Date!
            endDate: Date!
            leader_id: String
        ): Project
        projectUpdate(
            _id: String!
            name: String
            generalObjective: String
            specificObjectives: [String]
            budget: Float
        ): Project
        projectUpdateStatus(
            _id: String!,
            status: String!,
        ): Project
        projectUpdatePhase(
            _id: String!
            phase: Enum_phaseProject!
        ): Project
    }
`;

export { typesProjects };