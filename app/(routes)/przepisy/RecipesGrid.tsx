"use client";

import { useState } from "react";
import { Recipe } from "@/types/types";
import { RecipeCard } from "./RecipeCard";
import { Pagination } from "./Pagination";
import { RecipeSkeleton } from "@/components/SkeletonUI/RecipeSkeleton";

export const RecipesGrid = ({ recipes }: { recipes: Recipe[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 12;
    const totalPages = Math.ceil(recipes.length / recipesPerPage);

    const currentPageRecipes = recipes.slice(
        (currentPage - 1) * recipesPerPage,
        currentPage * recipesPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 -mt-12 lg:mt-0">
                {recipes.length === 0
                    ? Array.from({ length: currentPageRecipes.length }).map(
                          (_, idx) => <RecipeSkeleton key={idx} />
                      )
                    : currentPageRecipes.map((recipe, index) => (
                          <RecipeCard key={index} recipe={recipe} />
                      ))}
            </div>

            {recipes.length > 0 && totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};
