export async function fetchCourseData(lang: string = "bn") {
  const response = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    }
  );
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json;
}
