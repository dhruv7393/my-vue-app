import { ReactNode } from "react";
import { Carousel } from "antd";

interface CarouselCreatorProps {
  onChange: (currentSlide: number) => void;
  elements: ReactNode[];
}

const CarouselCreator = ({ elements, onChange }: CarouselCreatorProps) => {
  return (
    <Carousel
      afterChange={onChange}
      style={{
        paddingTop: "10px",
        paddingBottom: "30px",
      }}
    >
      {elements.length &&
        elements.map((ele, index) => <div key={index}>{ele}</div>)}
    </Carousel>
  );
};

export default CarouselCreator;
