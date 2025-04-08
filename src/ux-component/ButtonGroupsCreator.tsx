import { Radio, RadioChangeEvent } from "antd";

interface valuesProp {
  value: string;
  text: string;
}

interface ButtonGroupsCreatorProps {
  currentValue: string;
  values: valuesProp[];
  onChange: (e: RadioChangeEvent) => void;
}

const ButtonGroupsCreator = ({
  currentValue,
  values,
  onChange,
}: ButtonGroupsCreatorProps) => {
  return (
    <>
      <Radio.Group value={currentValue} onChange={onChange}>
        {values.map((val) => (
          <Radio.Button value={val.value} key={val.value}>
            {val.text}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
};

export default ButtonGroupsCreator;
