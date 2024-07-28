import React from "react";
import { Bar } from "@ant-design/plots";
import { Skeleton } from "antd";

interface BarChartComponentProps {
  data: { professor: string; productions: number }[];
  isLoading: boolean;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data, isLoading }) => {
  const config = {
    data,
    xField: 'producões',
    yField: 'professor',
    seriesField: 'professor',
    color: ({ professor }: { professor: string }) => {
      const colors: { [key: string]: string } = {
        'matheus': '#1677FF',
        'joão': '#52C41A',
        'rogério': '#FAAD14',
      };
      return colors[professor] || '#9254DE';
    },
    legend: false,
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      productions: { alias: 'Produções' },
      professor: { alias: 'Professor' },
    },
  };

  return isLoading ? (
    <Skeleton active />
  ) : (
    <div style={{ width: '80%', height: '300px' }}>
      <Bar {...config} />
    </div>
  );
};

export default BarChartComponent;