import gql from "graphql-tag";

export const DASHBOARD_TOTAL_COUNTS_QUERY = gql`
    query DashboardTotalCounts {
        professor {
            totalCount
        }
        producoes {
            totalCount
        }
    }
`;
