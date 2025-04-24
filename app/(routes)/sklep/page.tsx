import { Recipe } from "@/types/types";

import { RecipeSkeleton } from "@/components/SkeletonUI/RecipeSkeleton";
import dynamic from "next/dynamic";
import { getAllProducts } from "@/lib/getProducts";

export const RecipesGrid = ({ recipes }: { recipes: Recipe[] }) => {
    return (
        <div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                {getAllProducts.map((produkt, index) => (
                    <RecipeCard key={index} produkt={recipe} />
                ))}
            </div>
        </div>
    );
};
