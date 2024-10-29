import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  const response = Math.floor(Math.random() * 40);

  return NextResponse.json(response);
};
