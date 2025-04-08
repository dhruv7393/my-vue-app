import { Select } from "antd";

interface valuesObj {
  label: string;
  value: string;
}

export interface SelectCreatorProps {
  optionValues: valuesObj[];
  slectedValues: string[];
  onChange: (value: string[]) => void;
}

const SelectCreator = ({
  slectedValues,
  optionValues,
  onChange,
}: SelectCreatorProps) => {
  return (
    <>
      <Select
        mode="multiple"
        allowClear={false}
        style={{ width: "100%" }}
        placeholder="Please select days"
        defaultValue={slectedValues}
        onChange={(value) => {
          onChange(value);
        }}
        options={optionValues}
      />
    </>
  );
};

export default SelectCreator;
