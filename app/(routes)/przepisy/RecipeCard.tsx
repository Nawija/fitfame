import Image from "next/image";
import { RecipeMeta } from "@/types/Recipe";

export default function RecipeCard({ recipe }: { recipe: RecipeMeta }) {
    return (
        <div className="border rounded-xl p-4 shadow-md">
            <Image
                src={recipe.image}
                alt={recipe.title}
                width={400}
                height={250}
                className="rounded-lg w-full h-auto object-cover"
            />
            <h2 className="text-lg font-bold mt-2">{recipe.title}</h2>
            <p className="text-sm text-gray-600">
                {recipe.time} • {recipe.calories} kcal
            </p>
        </div>
    );
}
