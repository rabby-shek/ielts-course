import Image from "next/image";
import React from "react";

interface CourseIncludeItems {
  id: string;
  color: string;
  icon: string;
  list_page_visibility: boolean;
  text: string;
}

interface CourseIncludesProps {
  courseIncludes: CourseIncludeItems[];
}

const CourseIncludes = ({ courseIncludes }: CourseIncludesProps) => {
  return (
    <div className="space-y-3">
      {courseIncludes.map((item) =>
        item.list_page_visibility ? (
          <div
            key={item.id}
            className="flex items-center gap-2"
            style={{ color: item.color }}
          >
            <Image src={item.icon} width={20} height={20} alt="icon" />
            <span>{item.text}</span>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CourseIncludes;
