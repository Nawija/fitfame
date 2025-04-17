import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Recipe } from "@/types/types";

const recipesDirectory = path.join(process.cwd(), "content/przepisy");

export function getAllRecipeMetadata(): Recipe[] {
    const files = fs.readdirSync(recipesDirectory);

    return files.map((fileName) => {
        const fullPath = path.join(recipesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug: fileName.replace(/\.md$/, ""),
            ...data,
        } as Recipe;
    });
}
