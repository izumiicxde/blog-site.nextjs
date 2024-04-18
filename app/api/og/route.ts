import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { cx } from "class-variance-authority";
import { fill, stroke, width } from "tailwindcss/defaultTheme";

export const runtime = "edge";

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());



// export async function GET(req: NextRequest) {
//   try {
//     const fontBold = await interBold;

//     const { searchParams } = req.nextUrl;
//     const title = searchParams.get("title");

//     if (!title) {
//       return new Response("No title provided", { status: 500 });
//     }

//     const heading =
//       title.length > 140 ? `${title.substring(0, 140)}...` : title;

//     return new ImageResponse(
//          <div></div>,
//         {}
//     )
//   } catch (error) {
//     return new Response("Failed to generate image", { status: 500 });
//   }
// }
