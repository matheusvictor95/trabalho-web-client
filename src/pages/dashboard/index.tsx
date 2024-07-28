
import { Col, Row } from "antd";
import React, { useEffect, useState, type FC } from "react";
import { DashboardTotalCountCard } from "./components/total-count-card";
import BarChartComponent from "./components/bar-chart";
import styles from "./index.module.css";

interface Professor {
  id: number;
  nome: string;
  producoes: number;
}

interface Producao {
  id: number;
  descricao: string;
  professorId: number;
  sigla: string;
  eventoPeriodico: string;
  qualis: string;
}

export const DashboardPage: FC = () => {
  const [data, setData] = useState<{ professores: Professor[]; producoes: Producao[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const result = await response.json();
        
        const professores = result.professores.map((prof: any) => ({
          id: prof.id,
          nome: prof.nome,
          producoes: result.producoes.filter((prod: any) => prod.professorId === prof.id).length,
        }));
        
        const producoes = result.producoes;
        
        setData({ professores, producoes });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const barChartData = data?.professores.map((prof) => ({
    professor: prof.nome,
    productions: prof.producoes,
  })) || [];

  return (
    <div className={styles.pageContainer}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="professores"
            isLoading={isLoading}
            totalCount={data?.professores.length}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="producoes"
            isLoading={isLoading}
            totalCount={data?.producoes.length}
          />
        </Col>
      </Row>
      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      ></Row>
      <Row gutter={[32, 32]}>
        <Col 
        xs={24}
         sm={24}
          xl={16} 
          style={{ height: "432px",}}>
          <BarChartComponent data={barChartData} isLoading={isLoading} />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;