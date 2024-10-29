import { Post } from "@/types/post";
import { WeatherBar } from "./weather-bar";
import { PostCard } from "./post-card";

type BlogContentProps = {
  currentTemperature: number;
  posts: Post[];
};

export function BlogContent({ currentTemperature, posts }: BlogContentProps) {
  return (
    <div className="flex flex-col py-4 gap-10">
      <WeatherBar currentTemperature={currentTemperature} />
      <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-8">
        {posts?.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </div>
    </div>
  );
}
