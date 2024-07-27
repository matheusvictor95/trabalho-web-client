
import { useCustom } from "@refinedev/core";
import { Col, Row } from "antd";
import  { DashboardTotalCountsQuery } from "../../graphql/types";
import {
  DashboardTotalCountCard, 
} from "./components/total-count-card";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "./queries";
import React, { useEffect, useState, type FC, type PropsWithChildren, Suspense } from "react";


export const DashboardPage: React.FC = () => {
  const [data, setData] = useState<{ professores: number; producoes: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const result = await response.json();
        const professoresCount = result.professores.length;
        const producoesCount = result.producoes.length;
        setData({ professores: professoresCount, producoes: producoesCount });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="professor"
            isLoading={isLoading}
            totalCount={data?.professores}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="producoes"
            isLoading={isLoading}
            totalCount={data?.producoes}
          />
        </Col>
      </Row>
      
    </div>
  );
};

export default DashboardPage;