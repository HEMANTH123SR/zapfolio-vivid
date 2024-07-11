import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log("user id ", id);
    if (id) {
      const userDataResponse = await fetch(
        `https://www.zapfolio.in/api/get-user-data?userId=${id}`
      );
      const userData = await userDataResponse.json();

      if (userData.success) {
        return NextResponse.json(
          { success: true, data: userData.data },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            success: false,
            message: "User not found",
          },
          { status: 404 }
        );
      }
    }
    throw new Error("No id found");
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: `Server Error :: ${err.message}`,
      },
      { status: 500 }
    );
  }
};
