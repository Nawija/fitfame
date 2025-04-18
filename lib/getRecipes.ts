import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Recipe } from "@/types/types";

const recipesDir = path.join(process.cwd(), "content/przepisy");

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
    const filePath = path.join(recipesDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
        title: data.title,
        slug,
        image: data.image,
        category: data.category,
        calories: data.calories,
        protein: data.protein,
        fat: data.fat,
        carbs: data.carbs,
        time: data.time,
        level: data.level,
        description: data.description,
        steps: data.steps || [],
        ingredients: data.ingredients || [],
        content,
    } as Recipe;
}

export function getAllRecipes(): Recipe[] {
    const dir = path.join(process.cwd(), "content", "przepisy");
    const files = fs.readdirSync(dir);

    const recipes = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => parseRecipe(path.join(dir, file)));

    return recipes;
}

export function parseRecipe(filePath: string): Recipe {
    const file = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(file);
    const slug = path.basename(filePath, ".md");

    return {
        title: data.title,
        slug,
        image: data.image,
        category: data.category,
        calories: data.calories,
        protein: data.protein,
        fat: data.fat,
        carbs: data.carbs,
        time: data.time,
        level: data.level,
        description: data.description,
        ingredients: data.ingredients || [],
        steps: data.steps || [],
        content,
    };
}
