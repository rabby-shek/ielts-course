import React from "react";
import Image from "next/image";
interface LayoutItems {
  icon: string;
  id: string;
  title: string;
  subtitle: string;
}
interface CourseLayoutProps {
  sectionTitle?: string;
  courseLayoutItems: LayoutItems[];
}
const CourseLayout = ({
  sectionTitle,
  courseLayoutItems,
}: CourseLayoutProps) => {
  const courseItems = courseLayoutItems.map((item) => {
    return (
      <div key={item.id}>
        <Image src={item.icon} alt={item.title} width={36} height={36} />
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>
      </div>
    );
  });
  return (
    <section>
      <h1>{sectionTitle}</h1>
      {courseItems}
    </section>
  );
};

export default CourseLayout;
