import path from "path";
import fs from "fs";
import { parseRecipe } from "./parseRecipe";
import { Recipe } from "@/types/types";

export function getAllRecipes(): Recipe[] {
    const dir = path.join(process.cwd(), "content", "przepisy");
    const files = fs.readdirSync(dir);

    const recipes = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => parseRecipe(path.join(dir, file)));

    return recipes; // No need to cast to Recipe, as it's already an array of Recipe
}
