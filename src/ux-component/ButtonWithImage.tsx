// ButtonWithImage
import * as React from "react";
import { Button } from "antd";

interface ButtonWithImageProps {
  key: string;
  onClick: () => void;
  disabled?: boolean;
  type: "primary" | "text" | "default";
  ImageDisplayed: React.ReactNode;
}

const ButtonWithImage = ({
  key,
  onClick,
  disabled = false,
  type,
  ImageDisplayed,
}: ButtonWithImageProps) => {
  return (
    <>
      <Button
        key={key}
        onClick={() => onClick()}
        disabled={disabled}
        type={type}
        shape="circle"
        style={{ marginLeft: "5px", marginRight: "5px" }}
      >
        {ImageDisplayed}
      </Button>
    </>
  );
};

export default ButtonWithImage;
