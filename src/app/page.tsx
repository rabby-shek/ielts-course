import { fetchCourseData } from "@/utils/fetchCourseData";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Instructors from "@/components/Instructors";
import CourseLayout from "@/components/CourseLayout";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import AboutCourse from "@/components/AboutCourse";
export default async function Home() {
  const data = await fetchCourseData();
  const { title, description, sections } = data.data;

  const findInstructor = sections.find((item) => item.type === "instructors");
  const { name: instructorSectionTitle, values } = findInstructor;
  const {
    name: instructorName,
    image: instructorPhoto,
    description: instructorDetails,
    short_description,
  } = values[0];
  const courseOrganization = sections.find((item) => item.type === "features");
  const { name: courseOrganizationTitle, values: courseLayoutItems } =
    courseOrganization;
  const whatLearn = sections.find((item) => item.type === "pointers");
  const { name: whatLearnTitle, values: whatLearnItems } = whatLearn;
  const aboutCourse = sections.find((item) => item.type === "about");
  const { name: aboutCourseTitle, values: aboutCourseItems } = aboutCourse;

  return (
    <main className="flex flex-col-reverse lg:flex-row w-full ">
      {/* Left Side */}
      <div className="w-full lg:w-3/5 bg-gray-100">
        <div>
          <section className=" bg-black p-6 md:p-10">
            <Title title={title} />
            <Description des={description} />
          </section>

          <Instructors
            sectionTitle={instructorSectionTitle}
            instructorName={instructorName}
            instructorPhoto={instructorPhoto}
            instructorDetails={instructorDetails}
            shortDescription={short_description}
          />
          <CourseLayout
            sectionTitle={courseOrganizationTitle}
            courseLayoutItems={courseLayoutItems}
          />
          <WhatYouWillLearn
            sectionTitle={whatLearnTitle}
            learnItems={whatLearnItems}
          />
          <AboutCourse sectionTitle={aboutCourseTitle} aboutItems={aboutCourseItems} />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-2/5 p-4 bg-white">
        {/* Top Right Section */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-bold">Right Top Section</h2>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded shadow">
              Right top content {i + 1}
            </div>
          ))}
        </div>

        {/* Bottom Right Sticky Section */}
        <div className="sticky top-0">
          <div className="bg-black text-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Right Bottom Sticky</h2>
            <p>This section sticks when reaching top while scrolling.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
