import { NextRequest, NextResponse } from "next/server";
import { BLOG_POSTS } from "../../../utils/posts-mock";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const search = req.nextUrl.searchParams.get("search") as string;

  if (search) {
    const response = BLOG_POSTS.filter(
      (post) =>
        post.description.toLowerCase().includes(search.toLocaleLowerCase()) ||
        post.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    return NextResponse.json(response);
  }

  return NextResponse.json(BLOG_POSTS);
};
