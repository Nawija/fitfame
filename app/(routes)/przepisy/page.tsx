"use client";

import { useState } from "react";
import { recipesData } from "@/constants/Przepisy";
import { FiltersSection } from "./FiltersSection";
import { RecipesGrid } from "./RecipesGrid";

export default function PrzepisyPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(["all"]);
    const [minCalories, setMinCalories] = useState<number>(0);
    const [maxCalories, setMaxCalories] = useState<number>(3000);
    const [proteinRange, setProteinRange] = useState<number>(0);
    const [fatRange, setFatRange] = useState<number>(0);
    const [carbsRange, setCarbsRange] = useState<number>(0);
    const [searchKeywords, setSearchKeywords] = useState<string>("");
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
    const [filtersVisible, setFiltersVisible] = useState<boolean>(false);

    const handleCategoryChange = (category: string) => {
        if (category === "all") {
            setSelectedCategories(["all"]);
        } else {
            setSelectedCategories((prevCategories) => {
                if (prevCategories.includes(category)) {
                    return prevCategories.filter((cat) => cat !== category);
                } else {
                    if (prevCategories.includes("all")) {
                        return [category];
                    }
                    return [...prevCategories, category];
                }
            });
        }
    };

    const handleCaloriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (e.target.name === "minCalories") setMinCalories(value);
        if (e.target.name === "maxCalories") setMaxCalories(value);
    };

    const handleFilterApply = () => {
        const newFiltered = recipesData.filter((recipe) => {
            const matchesCategory =
                selectedCategories.includes("all") ||
                selectedCategories.includes(recipe.category);
            const matchesKeyword =
                !searchKeywords ||
                recipe.title.toLowerCase().includes(searchKeywords.toLowerCase());
            return (
                matchesCategory &&
                recipe.calories >= minCalories &&
                recipe.calories <= maxCalories &&
                recipe.protein >= proteinRange &&
                recipe.fat >= fatRange &&
                recipe.carbs >= carbsRange &&
                matchesKeyword
            );
        });
        setFilteredRecipes(newFiltered);
        setFiltersVisible(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto anim-opacity flex flex-col lg:flex-row gap-8">
                <FiltersSection
                    filtersVisible={filtersVisible}
                    setFiltersVisible={setFiltersVisible}
                    searchKeywords={searchKeywords}
                    setSearchKeywords={setSearchKeywords}
                    selectedCategories={selectedCategories}
                    handleCategoryChange={handleCategoryChange}
                    proteinRange={proteinRange}
                    setProteinRange={setProteinRange}
                    fatRange={fatRange}
                    setFatRange={setFatRange}
                    carbsRange={carbsRange}
                    setCarbsRange={setCarbsRange}
                    minCalories={minCalories}
                    maxCalories={maxCalories}
                    handleCaloriesChange={handleCaloriesChange}
                    handleFilterApply={handleFilterApply}
                />
                <RecipesGrid recipes={filteredRecipes} />
            </div>
        </div>
    );
}
