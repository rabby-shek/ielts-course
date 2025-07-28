import React from "react";
import { InstructorProps } from "@/types";
import Image from "next/image";
import HtmlRenderer from "./HtmlRenderer";

const Instructors = ({
  sectionTitle,
  instructorName,
  instructorPhoto,
  instructorDetails,
  shortDescription,
}: InstructorProps) => {
  return (
    <section className="bg-white  py-12 px-6 md:px-10 max-w-5xl mx-auto">
      {sectionTitle && (
        <h2 className="text-xl md:text-2xl font-bold  mb-10 text-center">
          {sectionTitle}
        </h2>
      )}

      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6 md:p-8 gap-8">
        {/* Instructor Photo */}
        {instructorPhoto && (
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
            <Image
              src={instructorPhoto}
              alt={instructorName ?? "Instructor"}
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="flex-1 text-center md:text-left">
          {/* Instructor Name */}
          {instructorName && (
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              {instructorName}
            </h3>
          )}

          {/* Short Description */}
          {shortDescription && (
            <p className="text-base text-gray-600 dark:text-gray-300 mt-2">
              {shortDescription}
            </p>
          )}

          {/* Instructor Details */}
          {instructorDetails && (
            <div className="mt-4 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
              <HtmlRenderer html={instructorDetails} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
