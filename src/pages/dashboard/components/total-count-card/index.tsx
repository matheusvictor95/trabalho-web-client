import React, { useEffect, useState, FC, PropsWithChildren, Suspense } from "react";
import { UserOutlined, ReadOutlined , TeamOutlined} from "@ant-design/icons";
import type { AreaConfig } from "@ant-design/plots";
import { Card, Skeleton } from "antd";
import { Text } from "../../../../components/text";
import styles from "./index.module.css";

const Area = React.lazy(() => import("@ant-design/plots/es/components/area"));

type Type = "producoes" | "professor";

export const DashboardTotalCountCard: React.FC<{
  resource: Type;
  isLoading: boolean;
  totalCount?: number;
}> = ({ resource, isLoading, totalCount }) => {
  const { primaryColor, secondaryColor, icon, title } = variants[resource];

  const config: AreaConfig = {
    className: styles.area,
    appendPadding: [1, 0, 0, 0],
    padding: 0,
    syncViewPadding: true,
    data: variants[resource].data,
    autoFit: true,
    tooltip: false,
    animation: false,
    xField: "year",
    yField: "value",
    xAxis: false,
    yAxis: {
      tickCount: 12,
      label: {
        style: {
          fill: "transparent",
        },
      },
      grid: {
        line: {
          style: {
            stroke: "transparent",
          },
        },
      },
    },
    smooth: true,
    areaStyle: () => {
      return {
        fill: `l(270) 0:#fff 0.2:${secondaryColor} 1:${primaryColor}`,
      };
    },
    line: {
      color: primaryColor,
    },
    point: {
      size: 0, // Isto remove os pontos do gráfico
      shape: 'circle',
      style: {
        fill: 'transparent',
        stroke: 'transparent',
      },
    },
  };

  return (
    <Card
      style={{ height: "96px", padding: 0 }}
      bodyStyle={{
        padding: "8px 8px 8px 12px",
      }}
      size="small"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          whiteSpace: "nowrap",
        }}
      >
        {icon}
        <Text size="md" className="secondary" style={{ marginLeft: "8px" }}>
          {title}
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text
          size="xxxl"
          strong
          style={{
            textAlign: "start",
            marginLeft: "48px",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {isLoading ? (
            <Skeleton.Button
              style={{
                marginTop: "8px",
                width: "74px",
              }}
            />
          ) : (
            totalCount
          )}
        </Text>
        <Suspense fallback={<Skeleton active />}>
          <Area {...config} />
        </Suspense>
      </div>
    </Card>
  );
};

const IconWrapper: FC<PropsWithChildren<{ color: string }>> = ({ color, children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
};

const variants: {
  [key in Type]: {
    primaryColor: string;
    secondaryColor?: string;
    icon: React.ReactNode;
    title: string;
    data: { year: string; value: number }[];
  };
} = {
  professor: {
    primaryColor: "#1677FF",
    secondaryColor: "#BAE0FF",
    icon: (
      <IconWrapper color="#E6F4FF">
        <UserOutlined
          className="md"
          style={{
            color: "#1677FF",
          }}
        />
      </IconWrapper>
    ),
    title: "Número de Professores",
    data: [
      { year: '2024', value: 1 },
      { year: '2025', value: 2 },
      { year: '2026', value: 3 },
      { year: '2027', value: 4 },
      { year: '2028', value: 5 },
      { year: '2029', value: 6 },
      { year: '2030', value: 7 },
      { year: '2031', value: 8 },
      { year: '2032', value: 9 },
    ],
  },
  producoes: {
    primaryColor: "#52C41A",
    secondaryColor: "#D9F7BE",
    icon: (
      <ReadOutlined color="#F6FFED">
        
        <TeamOutlined
          className="md"
          style={{
            color: "#52C41A",
          }}
        />
      </ReadOutlined>
    ),
    title: "Número de Produções",
    data: [
      { year: '2024', value: 1 },
      { year: '2025', value: 2 },
      { year: '2026', value: 3 },
      { year: '2027', value: 4 },
      { year: '2028', value: 5 },
      { year: '2029', value: 6 },
      { year: '2030', value: 7 },
      { year: '2031', value: 8 },
      { year: '2032', value: 9 },
    ],
  },
};

