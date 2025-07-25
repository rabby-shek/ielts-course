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
    <section>
      <h1>{sectionTitle}</h1>
      <div>{instructorName}</div>
      {instructorPhoto && (
        <Image
          src={instructorPhoto}
          alt={instructorName ?? "Instructor"}
          width={100}
          height={100}
        />
      )}
      {instructorDetails && <HtmlRenderer html={instructorDetails} />}

      <p>{shortDescription}</p>
    </section>
  );
};

export default Instructors;
