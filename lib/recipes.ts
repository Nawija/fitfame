// lib/recipes.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";


const recipesDir = path.join(process.cwd(), "content/przepisy");

export async function getRecipeBySlug(slug: string) {
    const filePath = path.join(recipesDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
        ...data,
        slug: slug,
        steps: data.steps || [],
        ingredients: data.ingredients || [],
    };
}
