import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Step {
    title: string;
    description: string;
}

export async function POST(req: NextRequest) {
    const body = await req.json();

    const {
        title,
        level,
        calories,
        protein,
        fat,
        carbs,
        category,
        time,
        image,
        description,
        ingredients,
        steps,
    } = body;

    if (!title || !description || !ingredients || !steps) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const slug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");

    // Konstruujemy frontmatter jako obiekt JS
    const frontmatter = {
        title,
        level,
        slug,
        category,
        calories,
        protein,
        fat,
        carbs,
        time,
        image,
        description,
        ingredients,
        steps: steps.map((step: Step) => ({
            title: step.title,
            description: step.description,
        })),
    };

    // Generujemy cały Markdown (frontmatter + content)
    const fileContent = matter.stringify(description, frontmatter);

    // Ścieżka zapisu
    const filePath = path.join(
        process.cwd(),
        "content",
        "przepisy",
        `${slug}.md`
    );

    fs.writeFileSync(filePath, fileContent, "utf8");

    return NextResponse.json({ message: "Recipe saved successfully" });
}
