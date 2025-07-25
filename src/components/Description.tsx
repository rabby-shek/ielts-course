import React from "react";
import { DescriptionProps } from "@/types";
import HtmlRenderer from "./HtmlRenderer";
const Description = ({ des = "Description" }: DescriptionProps) => {
  return <div className="text-white/80  md:text-base leading-relaxed">
      <HtmlRenderer html={des} />
    </div>
};

export default Description;
