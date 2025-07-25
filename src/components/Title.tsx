import React from "react";
import { TitleProps } from "@/types";
const Title = ({ title = "Course Title" }: TitleProps) => {
  return (
    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3">{title}</h1>
  );
};

export default Title;
