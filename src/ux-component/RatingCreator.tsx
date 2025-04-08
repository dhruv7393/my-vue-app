import { Flex, Rate } from "antd";

interface RatingCreatorProps {
  names: string[];
  value: number;
  setValue: (value: number) => void;
}

const RatingCreator = ({ names, value, setValue }: RatingCreatorProps) => {
  return (
    <Flex gap="middle" vertical>
      <Rate tooltips={names} onChange={setValue} value={value} />
      {value ? <span>{names[value - 1]}</span> : null}
    </Flex>
  );
};

export default RatingCreator;
