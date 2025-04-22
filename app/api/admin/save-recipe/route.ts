import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Step {
    title: string;
    description: string;
    image: string;
}

function removePolishChars(str: string): string {
    return str
        .replace(/ą/g, "a")
        .replace(/ć/g, "c")
        .replace(/ę/g, "e")
        .replace(/ł/g, "l")
        .replace(/ń/g, "n")
        .replace(/ó/g, "o")
        .replace(/ś/g, "s")
        .replace(/ź/g, "z")
        .replace(/ż/g, "z")
        .replace(/Ą/g, "A")
        .replace(/Ć/g, "C")
        .replace(/Ę/g, "E")
        .replace(/Ł/g, "L")
        .replace(/Ń/g, "N")
        .replace(/Ó/g, "O")
        .replace(/Ś/g, "S")
        .replace(/Ź/g, "Z")
        .replace(/Ż/g, "Z");
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
        fiber,
        category,
        time,
        image,
        description,
        content,
        ingredients,
        steps,
    } = body;

    if (!title || !description || !ingredients || !steps) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const slug = removePolishChars(title)
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
        fiber,
        time,
        image,
        description,
        ingredients,
        steps: steps.map((step: Step) => ({
            title: step.title,
            description: step.description,
            image: step.image,
        })),
    };

    // Generujemy cały Markdown (frontmatter + content)
    const fileContent = matter.stringify(content, frontmatter);

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
