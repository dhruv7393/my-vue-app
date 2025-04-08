import { Statistic } from "antd";

interface StatisticCreatorProps {
  title: string;
  value: string;
  of?: string;
}

const StatisticCreator = ({ title, value, of = "" }: StatisticCreatorProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Statistic title={title} value={value} suffix={of && `/ ${of}`} />
    </div>
  );
};

export default StatisticCreator;
