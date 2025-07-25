import React from "react";
import { TitleProps } from "@/types";
const Title = ({ title = "Course Title" }: TitleProps) => {
  return (
    <h1 className="text-[21px] mb-2 font-semibold md:text-4xl">{title}</h1>
  );
};

export default Title;
