"use client";

import { useState } from "react";
import { recipesData } from "@/constants/Przepisy";
import { FiltersSection } from "./FiltersSection";
import { RecipesGrid } from "./RecipesGrid";

export default function PrzepisyPage() {
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto anim-opacity flex flex-col lg:flex-row gap-8">
                <FiltersSection onFilterChange={setFilteredRecipes} />
                <RecipesGrid recipes={filteredRecipes} />
            </div>
        </div>
    );
}
