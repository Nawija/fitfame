import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
        category,
        price,
        image,
        description,
        content,
        additionalImages = [],
        sizesAndPrices = [],
    } = body;

    if (!title) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const slug = removePolishChars(title)
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");

    // Konstruujemy frontmatter jako obiekt JS
    const frontmatter = {
        title,
        slug,
        category,
        price,
        image,
        additionalImages,
        description,
        sizesAndPrices,
    };

    // Generujemy cały Markdown (frontmatter + content)
    const fileContent = matter.stringify(content, frontmatter);

    // Ścieżka zapisu
    const filePath = path.join(
        process.cwd(),
        "content",
        "produkty",
        `${slug}.md`
    );

    try {
        fs.writeFileSync(filePath, fileContent, "utf8");
        return NextResponse.json({ message: "Produkt zapisany" });
    } catch (error) {
        console.error("File write error:", error);
        return NextResponse.json(
            { error: "Błąd zapisu pliku" },
            { status: 500 }
        );
    }
}
