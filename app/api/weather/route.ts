import { NextResponse } from "next/server";

// export const GET = async (req: NextRequest): Promise<NextResponse> => {
//   const searchParams = req.nextUrl.searchParams.get("cartId") as string;
//   const response = searchParams;

//   return NextResponse.json(response);
// };

export const GET = async (): Promise<NextResponse> => {
  const response = Math.floor(Math.random() * 40);

  return NextResponse.json(response);
};
