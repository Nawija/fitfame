"use client";

import { MainBtn } from "@/components/Buttons/MainBtn";
import { SecondBtn } from "@/components/Buttons/SecondBtn";
import { recipesData } from "@/constants/Przepisy";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function Przepisy() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([
        "all",
    ]);
    const [minCalories, setMinCalories] = useState<number>(0);
    const [maxCalories, setMaxCalories] = useState<number>(3000);
    const [proteinRange, setProteinRange] = useState<number>(0);
    const [fatRange, setFatRange] = useState<number>(0);
    const [carbsRange, setCarbsRange] = useState<number>(0);
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
    const [filtersVisible, setFiltersVisible] = useState<boolean>(false);
    const [searchKeywords, setSearchKeywords] = useState<string>("");

    const handleCategoryChange = (category: string) => {
        if (category === "all") {
            setSelectedCategories([category]);
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

    const handleFilterApply = () => {
        const newFilteredRecipes = recipesData.filter((recipe) => {
            const matchesCategory =
                selectedCategories.includes("all") ||
                selectedCategories.includes(recipe.category);

            // Sprawdzanie, czy tytuł zawiera słowa kluczowe
            const matchesKeyword =
                !searchKeywords ||
                recipe.title
                    .toLowerCase()
                    .includes(searchKeywords.toLowerCase());

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

        setFilteredRecipes(newFilteredRecipes);
        setFiltersVisible(false);
    };

    const handleCaloriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.name === "minCalories") {
            setMinCalories(Number(value));
        } else if (e.target.name === "maxCalories") {
            setMaxCalories(Number(value));
        }
    };

    // Handler for pressing the Enter key
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleFilterApply();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto anim-opacity">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Section */}
                    <div className="lg:w-1/4 w-full bg-white p-6 rounded-lg shadow-lg">
                        {/* Mobile Filter Toggle Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() =>
                                    setFiltersVisible(!filtersVisible)
                                }
                                className="w-full text-sm font-semibold text-blue-500 p-2"
                            >
                                {filtersVisible
                                    ? "Zwiń filtry"
                                    : "Pokaż filtry"}
                            </button>
                        </div>

                        {/* Filters Content */}
                        <div
                            className={`lg:block transition-all ease-in-out duration-300 ${
                                filtersVisible
                                    ? "block h-[700px]"
                                    : "h-0 lg:h-max overflow-y-hidden"
                            } lg:space-y-6`}
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                Opcje filtrowania
                            </h2>

                            {/* Keyword Search */}
                            <div className="mb-6 flex items-center justify-center">
                                <input
                                    type="text"
                                    value={searchKeywords}
                                    onChange={(e) =>
                                        setSearchKeywords(e.target.value)
                                    }
                                    onKeyDown={handleKeyPress} 
                                    className="w-full p-1.5 border text-sm border-gray-300 rounded-lg focus:outline-none"
                                    placeholder="Wyszukaj"
                                />
                                <button
                                    className="p-2 border rounded-lg ml-1 bg-blue-400 text-white"
                                    onClick={handleFilterApply}
                                >
                                    <FaSearch />
                                </button>
                            </div>

                            {/* Category Filter - Checkboxes */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    Kategoria
                                </h3>
                                <div className="space-y-2">
                                    {[
                                        "all",
                                        "Kurczak",
                                        "Masa",
                                        "Rzeźba",
                                        "Niskokaloryczne",
                                    ].map((category) => (
                                        <div
                                            key={category}
                                            className="flex items-center"
                                        >
                                            <input
                                                type="checkbox"
                                                id={category}
                                                checked={selectedCategories.includes(
                                                    category
                                                )}
                                                onChange={() =>
                                                    handleCategoryChange(
                                                        category
                                                    )
                                                }
                                                className="mr-2"
                                            />
                                            <label
                                                htmlFor={category}
                                                className="text-sm text-gray-700"
                                            >
                                                {category === "all"
                                                    ? "Wszystkie"
                                                    : category}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Macronutrient Filters */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    Filtry makroskładników
                                </h3>

                                {/* Protein Filter */}
                                <div className="mb-4">
                                    <label className="text-sm text-gray-700">
                                        Białko (min.)
                                    </label>
                                    <div className="flex gap-4 mb-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="200"
                                            value={proteinRange}
                                            onChange={(e) =>
                                                setProteinRange(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full"
                                        />
                                        <input
                                            value={proteinRange}
                                            onChange={(e) =>
                                                setProteinRange(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-10 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            placeholder="Minimalne białko"
                                        />
                                    </div>
                                </div>

                                {/* Fat Filter */}
                                <div className="mb-4">
                                    <label className="text-sm text-gray-700">
                                        Tłuszcz (min.)
                                    </label>
                                    <div className="flex gap-4 mb-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="200"
                                            value={fatRange}
                                            onChange={(e) =>
                                                setFatRange(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full"
                                        />
                                        <input
                                            value={fatRange}
                                            onChange={(e) =>
                                                setFatRange(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-10 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            placeholder="Minimalny tłuszcz"
                                        />
                                    </div>
                                </div>

                                {/* Carbs Filter */}
                                <div className="mb-4">
                                    <label className="text-sm text-gray-700">
                                        Węglowodany (min.)
                                    </label>
                                    <div className="flex gap-4 mb-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="500"
                                            value={carbsRange}
                                            onChange={(e) =>
                                                setCarbsRange(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full"
                                        />
                                        <input
                                            value={carbsRange}
                                            onChange={(e) =>
                                                setCarbsRange(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-10 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            placeholder="Minimalne węglowodany"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Calories Filter */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    Kalorie (zakres)
                                </h3>
                                <div className="flex gap-4 mb-4">
                                    <input
                                        type="number"
                                        name="minCalories"
                                        value={minCalories}
                                        onChange={handleCaloriesChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        placeholder="Minimalne kalorie"
                                    />
                                    <input
                                        type="number"
                                        name="maxCalories"
                                        value={maxCalories}
                                        onChange={handleCaloriesChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        placeholder="Maksymalne kalorie"
                                    />
                                </div>
                            </div>

                            {/* Apply Filters Button */}
                            <MainBtn onClick={handleFilterApply}>
                                Zastosuj filtry
                            </MainBtn>
                        </div>
                    </div>

                    {/* Recipes Grid Section */}
                    <div className="lg:w-3/4 w-full h-60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map((recipe) => (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={recipe.id}
                                    className="bg-white group px-2 py-4 rounded-lg shadow-lg transition-all transform border border-transparent hover:border-yellow-200 text-center"
                                >
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="w-full h-48 object-cover rounded-md mb-6"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {recipe.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {recipe.category}
                                    </p>
                                    <p className="text-lg font-semibold mt-2">
                                        {recipe.calories} kcal
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        B: {recipe.protein}g T: {recipe.fat}g W:{" "}
                                        {recipe.carbs}g
                                    </p>
                                    <SecondBtn className="mt-4">
                                        Zobacz przepis
                                    </SecondBtn>
                                </motion.div>
                            ))
                        ) : (
                            <div className="w-full text-center text-gray-700">
                                Brak przepisów spełniających kryteria.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
