import { Checkbox } from "antd";
import { useState } from "react";

interface CheckboxCreatorProps {
  items: string[];
  checked: string[];
  onChange: (items: string[]) => void;
}

const CheckboxCreator = ({
  items,
  checked,
  onChange,
}: CheckboxCreatorProps) => {
  const [currentChecked, setCurrentChecked] = useState<string[]>(checked);
  const sortArray = (allItems: string[], checkedItems: string[]) => {
    const notInArr2 = allItems.filter((item) => !checkedItems.includes(item));
    const inArr2 = allItems.filter((item) => checkedItems.includes(item));

    return notInArr2.concat(inArr2);
  };

  const handleChange = (item: string) => {
    const updatedCheckedValues = currentChecked.includes(item)
      ? [...currentChecked.filter((ci) => ci !== item)]
      : [...currentChecked, item];
    setCurrentChecked(updatedCheckedValues);
    onChange(updatedCheckedValues);
  };
  return (
    <>
      {sortArray(items, currentChecked).map((item) => {
        const isSelected = currentChecked.includes(item);
        return (
          <p key={item}>
            <Checkbox
              checked={isSelected}
              onClick={() => handleChange(item)}
              style={{ textDecoration: isSelected ? "line-through" : "none" }}
            >
              {item}
            </Checkbox>
          </p>
        );
      })}
    </>
  );
};

export default CheckboxCreator;
