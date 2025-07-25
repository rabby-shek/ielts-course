import { GetServerSideProps } from "next";
import { fetchCourseData } from "@/utils/fetchCourseData";


export default async function Home() {
   const data = await fetchCourseData("en");
   console.log(data);
  return (
   <div>
    Home Page
   </div>
  );
}
