import { Post } from "@/types/post";
import { C } from "@/utils";
import Image from "next/image";

export function PostCard({
  image,
  title,
  description,
  createdAt,
  readTime,
}: Post) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="relative rounded-xl w-full hover:scale-105 transition-all aspect-[337/240]">
        <Image
          fill
          alt={title}
          src={image}
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-graylish text-base">
          {C.TIME_CREATED_AND_READ(createdAt, readTime)}
        </span>
        <span className="font-bold text-2xl">{title}</span>
        <span className="text-graylish-500 truncate h-[72px]">
          {description}
        </span>
      </div>
    </div>
  );
}
