import { ReactNode } from "react";

import { Collapse } from "antd";

export interface CollapseCreatorPropsObj {
  key: string;
  label: string;
  children: ReactNode;
  className: string;
  extra?: ReactNode;
}

export interface CollapseCreatorProps {
  items: CollapseCreatorPropsObj[];
}

const CollapseCreator = ({ items }: CollapseCreatorProps) => {
  return <Collapse items={items} />;
};

export default CollapseCreator;
