import { getAllRecipes } from "@/lib/getRecipes";
import { Recipe } from "@/types/types";
import Link from "next/link";
import { RecipeCardAdmin } from "./RecipeCardAdmin";
import { RecipeSkeleton } from "@/components/SkeletonUI/RecipeSkeleton";
import { MainBtn } from "@/components/Buttons/MainBtn";

export default function page() {
    const recipes: Recipe[] = getAllRecipes();
    return (
        <div>
            <div className="flex items-center justify-center space-x-2 py-12">
                <Link href="/admin/przepisy/dodaj-przepis">
                    <MainBtn>Dodaj Przepis</MainBtn>
                </Link>
            </div>
            <div className="w-full px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 -mt-12 lg:mt-0">
                {recipes.length === 0
                    ? Array.from({ length: recipes.length }).map((_, idx) => (
                          <RecipeSkeleton key={idx} />
                      ))
                    : recipes.map((recipe, index) => (
                          <RecipeCardAdmin key={index} recipe={recipe} />
                      ))}
            </div>
        </div>
    );
}
