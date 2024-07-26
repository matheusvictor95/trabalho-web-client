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
    xField: "index",
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
    data: { index: string; value: number }[];
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
    title: "Número de professores",
    data: [
      { index: "1", value: 3500 },
      { index: "2", value: 2750 },
      { index: "3", value: 5000 },
      { index: "4", value: 4250 },
      { index: "5", value: 5000 },
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
    title: "número de Produções",
    data: [
      {
        index: "1",
        value: 10000,
      },
      {
        index: "2",
        value: 19500,
      },
      {
        index: "3",
        value: 13000,
      },
      {
        index: "4",
        value: 17000,
      },
      {
        index: "5",
        value: 13000,
      },
      {
        index: "6",
        value: 20000,
      },
    ],
  },
};

