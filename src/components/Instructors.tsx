import React from "react";
import { InstructorProps } from "@/types";
import Image from "next/image";
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
      <Image
        src={instructorPhoto}
        alt={instructorName}
        width={100}
        height={100}
      />
      <p>{instructorDetails}</p>
      <p>{shortDescription}</p>
    </section>
  );
};

export default Instructors;
