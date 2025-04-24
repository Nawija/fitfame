import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const VALID_FOLDERS = ["przepisy", "produkty"];

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const folder = formData.get("folder") as string;

  if (!file || !folder) {
    return NextResponse.json(
      { error: "File and folder are required." },
      { status: 400 }
    );
  }

  if (!VALID_FOLDERS.includes(folder)) {
    return NextResponse.json(
      { error: "Invalid folder name." },
      { status: 400 }
    );
  }

  const uploadDir = path.join(process.cwd(), "public", "images", folder);
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const fileName = `${Date.now()}_${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  return NextResponse.json({ url: `/images/${folder}/${fileName}` });
};
