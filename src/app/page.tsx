import { fetchCourseData } from "@/utils/fetchCourseData";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Instructors from "@/components/Instructors";
export default async function Home() {
  const data = await fetchCourseData();
  const { title, description, sections } = data.data;

  const findInstructor = sections.find(item => item.type === "instructors");
  const {name: instructorSectionTitle	, values} = findInstructor;
  const {name: instructorName, image: instructorPhoto, description: instructorDetails, short_description	} = values[0];
 
  

  return (
    <main className="flex flex-col-reverse lg:flex-row w-full">
      {/* Left Side */}
      <div className="w-full lg:w-3/5 p-4 bg-gray-100">
        <div className="space-y-4">
          <Title title={title} />
          <Description des={description} />
          <Instructors sectionTitle={instructorSectionTitle} instructorName={instructorName} instructorPhoto={instructorPhoto} instructorDetails={instructorDetails} shortDescription={short_description} />
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
