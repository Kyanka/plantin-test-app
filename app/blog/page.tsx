import { BlogContent } from "@/components/blog/blog-content";
import { nextApiFetch } from "@/utils/services";

export default async function Blog() {
  const currentTemperature = await nextApiFetch("/weather");

  return <BlogContent currentTemperature={currentTemperature} />;
}
