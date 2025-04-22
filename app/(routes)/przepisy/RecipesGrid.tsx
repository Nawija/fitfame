"use client";

import { useState } from "react";
import { Recipe } from "@/types/types";
const RecipeCard = dynamic(
    () => import("./RecipeCard").then((mod) => mod.RecipeCard),
    {
        loading: () => <RecipeSkeleton />,
        ssr: true,
    }
);

import { Pagination } from "./Pagination";
import { RecipeSkeleton } from "@/components/SkeletonUI/RecipeSkeleton";
import dynamic from "next/dynamic";

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
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 -mt-12 lg:mt-0">
                {currentPageRecipes.map((recipe, index) => (
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
