import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const {
        title,
        calories,
        protein,
        fat,
        carbs,
        category,
        time,
        image,
        content,
    } = body;

    if (!title || !content) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const slug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");

    const frontmatter = `---
title: "${title}"
slug: "${slug}"
category: "${category}"
calories: ${calories}
protein: ${protein}
fat: ${fat}
carbs: ${carbs}
time: "${time}"
image: "${image}"
---`;

    const markdown = `${frontmatter}\n\n${content}`;

    const filePath = path.join(
        process.cwd(),
        "content",
        "przepisy",
        `${slug}.md`
    );

    fs.writeFileSync(filePath, markdown);

    return NextResponse.json({ message: "Recipe saved successfully" });
}
