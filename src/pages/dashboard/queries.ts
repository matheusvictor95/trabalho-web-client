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

export const DASHBOARD_TASKS_CHART_QUERY = gql`
    query DashboardTasksChart(
        $filter: TaskStageFilter!
        $sorting: [TaskStageSort!]
        $paging: OffsetPaging!
    ) {
        taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
            nodes {
                title
                tasksAggregate {
                    count {
                        id
                    }
                }
            }
        }
    }
`;
