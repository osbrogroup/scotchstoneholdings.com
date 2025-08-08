import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  // handle video upload here
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}