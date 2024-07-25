import React from "react";
import { useCustom } from "@refinedev/core";
import { Col, Row } from "antd";
import  { DashboardTotalCountsQuery } from "../../graphql/types";
import {
  DashboardTotalCountCard,
} from "./components/total-count-card";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "./queries";

export const DashboardPage: React.FC = () => {
  const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
    url: "",
    method: "get",
    meta: { gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY },
  });

  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="professor"
            isLoading={isLoading}
            totalCount={data?.data["professor"].totalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="producoes"
            isLoading={isLoading}
            totalCount={data?.data["producoes"].totalCount}
          />
        </Col>
      </Row>
      
    </div>
  );
};