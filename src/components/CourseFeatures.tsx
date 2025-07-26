import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

interface Items {
  id: string;
  title: string;
  checklist: string[];
  file_type: string;
  file_url: string;
  video_thumbnail: string;
}

interface CourseFeaturesProps {
  sectionTitle: string;
  features: Items[];
}

const CourseFeatures = ({ sectionTitle, features }: CourseFeaturesProps) => {
  return (
    <section className="px-4 py-8">
      <h1 className="text-xl md:text-2xl font-bold mb-6">{sectionTitle}</h1>

      <div className="space-y-6">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-gray-200 p-4 rounded-lg shadow-sm"
          >
            {/* Left: Checklist with Icons */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-3">{item.title}</h2>
              <div className="space-y-2">
                {item.checklist.map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="text-green-600 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-48 flex-shrink-0 relative aspect-video">
              <Image
                src={item.file_url}
                alt={item.title}
                fill
                className="rounded-md object-cover border"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseFeatures;
