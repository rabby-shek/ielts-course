import React from "react";
import { DescriptionProps } from "@/types";
import HtmlRenderer from "./HtmlRenderer";
const Description = ({ des = "Description" }: DescriptionProps) => {
  return <HtmlRenderer html={des} />;
};

export default Description;
