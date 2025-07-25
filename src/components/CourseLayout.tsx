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
  return (
    <section className="px-4 py-8">
      {sectionTitle && (
        <h2 className="text-xl md:text-2xl font-bold mb-6">{sectionTitle}</h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courseLayoutItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#0F172A] text-white p-6 rounded-xl shadow-md flex items-start gap-4"
          >
            <div className="min-w-[36px]">
              <Image
                src={item.icon}
                alt={item.title}
                width={36}
                height={36}
                className="mt-1"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseLayout;
