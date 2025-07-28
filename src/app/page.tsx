import { fetchCourseData } from "@/utils/fetchCourseData";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Instructors from "@/components/Instructors";
import CourseLayout from "@/components/CourseLayout";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import AboutCourse from "@/components/AboutCourse";
import GroupJoinEngagement from "@/components/GroupJoinEngagement";
import CourseIncludes from "@/components/CourseIncludes";
import MediaPreview from "@/components/MediaPreview";
import CourseFeatures from "@/components/CourseFeatures";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import { SectionType } from "@/types";
export default async function Home() {
  const { data } = await fetchCourseData();
  const { title, description, sections, checklist, media } = data;

  const findSection = (type: string) =>
    sections.find((item: SectionType) => item.type === type);

  const instructorSection = findSection("instructors");
  const instructorSectionTitle = instructorSection?.name || "";
  const instructor = instructorSection?.values?.[0] || {};
  const {
    name: instructorName,
    image: instructorPhoto,
    description: instructorDetails,
    short_description,
  } = instructor;

  const courseLayoutSection = findSection("features");
  const courseOrganizationTitle = courseLayoutSection?.name || "";
  const courseLayoutItems = courseLayoutSection?.values || [];

  const whatLearnSection = findSection("pointers");
  const whatLearnTitle = whatLearnSection?.name || "";
  const whatLearnItems = whatLearnSection?.values || [];

  const aboutCourseSection = findSection("about");
  const aboutCourseTitle = aboutCourseSection?.name || "";
  const aboutCourseItems = aboutCourseSection?.values || [];
  const courseFeaturesSection = findSection("feature_explanations");
  const courseFeaturesTitle = courseFeaturesSection?.name || "";
  const courseFeaturesItems = courseFeaturesSection?.values || [];
  const FAQSection = findSection("faq");
  const FAQTitle = FAQSection?.name || "";
  const FAQItems = FAQSection?.values || [];

  const groupEngagementItems =
    findSection("group_join_engagement")?.values || [];

  return (
    <main className="flex flex-col-reverse lg:flex-row w-full">
      {/* Left Side */}
      <div className="w-full lg:w-3/5 bg-gray-100">
        <section className="bg-black p-6 md:p-10">
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

        <GroupJoinEngagement groupEngagementItems={groupEngagementItems} />

        <WhatYouWillLearn
          sectionTitle={whatLearnTitle}
          learnItems={whatLearnItems}
        />

        <AboutCourse
          sectionTitle={aboutCourseTitle}
          aboutItems={aboutCourseItems}
        />
        <CourseFeatures
          sectionTitle={courseFeaturesTitle}
          features={courseFeaturesItems}
        />
        <FrequentlyAskedQuestions sectionTitle={FAQTitle} faqItems={FAQItems} />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-2/5 p-4 bg-white">
        <div className="space-y-4 mb-8">
          <MediaPreview mediaPreview={media} />
        </div>

        <div className="sticky top-5">
          <div className="p-4 rounded shadow">
            <h2 className="text-lg font-semibold pb-4">এই কোর্সে যা থাকছে</h2>
            <CourseIncludes courseIncludes={checklist} />
          </div>
        </div>
      </div>
    </main>
  );
}
