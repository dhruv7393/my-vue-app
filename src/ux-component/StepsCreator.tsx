import { Steps } from "antd";
import { useState } from "react";

interface itemsObject {
  title: string;
  description?: string;
}

export interface StepsCreatorProps {
  direction?: "vertical" | "horizontal";
  items: itemsObject[];
  current?: number;
  onChange?: (current: number) => void;
}

const defaultOnChange = (current: number) => {
  console.log(current);
};

const StepsCreator = ({
  direction = "vertical",
  items,
  current = -1,
  onChange = defaultOnChange,
}: StepsCreatorProps) => {
  const [currentValue, setCurrentValue] = useState(current);
  const handleUpdate = (current: number) => {
    onChange(current);
    setCurrentValue(current);
  };
  return (
    <Steps
      direction={direction}
      current={currentValue > items.length ? -1 : currentValue}
      items={items}
      onChange={handleUpdate}
    />
  );
};
export default StepsCreator;
