    import fs from "fs";
    import matter from "gray-matter";

    export function parseRecipe(filePath: string) {
        const file = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(file);

        return {
            ...data,
            content,
        } as {
            title: string;
            slug: string;
            image: string;
            category: string;
            calories: number;
            protein: number;
            fat: number;
            carbs: number;
            time: string;
            content: string;
        };
    }
