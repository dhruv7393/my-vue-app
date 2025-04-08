import { Switch } from "antd";
interface SwitchCreatorProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const SwitchCreator = ({ checked, onChange }: SwitchCreatorProps) => (
  <Switch defaultChecked={checked} onChange={onChange} />
);

export default SwitchCreator;
