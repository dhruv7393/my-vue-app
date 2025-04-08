import { ReactNode } from "react";
import { Tabs } from "antd";

interface itemsObject {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

export interface TabCreatorProps {
  items: itemsObject[];
  onChange: (key: string) => void;
  centered?: boolean;
}

const TabCreator = ({ items, onChange, centered = false }: TabCreatorProps) => (
  <Tabs
    defaultActiveKey={items[0].key}
    items={items}
    onChange={onChange}
    centered={centered}
  />
);

export default TabCreator;
