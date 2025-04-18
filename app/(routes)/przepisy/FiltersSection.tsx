"use client";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import dynamic from "next/dynamic"; // Importujemy dynamic
import { motion } from "framer-motion";
import { Recipe } from "@/types/types";

// Dynamiczny import komponentu RecipesGrid
const RecipesGrid = dynamic(
    () => import("./RecipesGrid").then((mod) => mod.RecipesGrid),
    {
        ssr: false, // Disable server-side rendering for this component if necessary
    }
);

const RecipeSkeleton = dynamic(
    () =>
        import("@/components/SkeletonUI/RecipeSkeleton").then(
            (mod) => mod.RecipeSkeleton
        ),
    {
        ssr: false,
    }
);

export function FiltersSection({ allRecipes }: { allRecipes: Recipe[] }) {
    const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);
    const [loading, setLoading] = useState(false); // Track loading state
    const [searchKeywords, setSearchKeywords] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [proteinRange, setProteinRange] = useState(0);
    const [fatRange, setFatRange] = useState(0);
    const [carbsRange, setCarbsRange] = useState(0);
    const [minCalories, setMinCalories] = useState(0);
    const [maxCalories, setMaxCalories] = useState(3000);
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [noRecipesMessage, setNoRecipesMessage] = useState(false);

    // Debounce function implementation
    const debounce = (fn: () => void, delay: number) => {
        let timeout: NodeJS.Timeout;
        return () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(), delay);
        };
    };

    const filterRecipes = () => {
        setLoading(true);
        setNoRecipesMessage(false);
        const filtered = allRecipes.filter((recipe) => {
            const matchesCategory =
                selectedCategory === "all" ||
                recipe.category === selectedCategory;
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

        setFilteredRecipes(filtered);
        setLoading(false);
    };

    const debouncedFilter = debounce(filterRecipes, 200);

    useEffect(() => {
        debouncedFilter();
    }, [
        searchKeywords,
        selectedCategory,
        proteinRange,
        fatRange,
        carbsRange,
        minCalories,
        maxCalories,
    ]);

    useEffect(() => {
        // Set timeout to display message if no recipes are found after 3 seconds
        if (filteredRecipes.length === 0 && !loading) {
            const timer = setTimeout(() => {
                setNoRecipesMessage(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [filteredRecipes, loading]);

    const clearAllFilters = () => {
        setSearchKeywords("");
        setSelectedCategory("all");
        setProteinRange(0);
        setFatRange(0);
        setCarbsRange(0);
        setMinCalories(0);
        setMaxCalories(3000);
    };

    const clearSearch = () => setSearchKeywords("");

    return (
        <div className="flex flex-col lg:flex-row gap-4 max-w-[1900px] mx-auto ">
            <motion.div
                initial={{ translateX: -300 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full sticky top-0 bg-white p-6 rounded-lg shadow-lg lg:w-[300px] lg:max-w-[300px] lg:min-w-[300px] lg:h-screen"
            >
                <div className="lg:hidden">
                    <button
                        onClick={() => setFiltersVisible(!filtersVisible)}
                        className="w-full text-sm font-semibold text-blue-500 p-2"
                    >
                        {filtersVisible ? "Zwiń filtry" : "Pokaż filtry"}
                    </button>
                </div>

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

                    {/* SEARCH */}
                    <div className="mb-6 flex items-center justify-center relative">
                        <input
                            type="text"
                            value={searchKeywords}
                            onChange={(e) => setSearchKeywords(e.target.value)}
                            className="w-full p-1.5 border text-sm border-gray-300 rounded-lg focus:outline-none"
                            placeholder="Wyszukaj"
                        />
                        {searchKeywords && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-2 text-gray-500 hover:text-gray-700"
                            >
                                <IoClose className="cursor-pointer" />
                            </button>
                        )}
                    </div>

                    {/* CATEGORY */}
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
                                        type="radio"
                                        id={category}
                                        name="category"
                                        checked={selectedCategory === category}
                                        onChange={() =>
                                            setSelectedCategory(category)
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

                    {/* MACROS */}
                    {[ 
                        { label: "Białko (min.)", value: proteinRange, set: setProteinRange, max: 200 },
                        { label: "Tłuszcz (min.)", value: fatRange, set: setFatRange, max: 200 },
                        { label: "Węglowodany (min.)", value: carbsRange, set: setCarbsRange, max: 500 }
                    ].map((item, i) => (
                        <div key={i} className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm text-gray-700">{item.label}</label>
                                <input
                                    type="number"
                                    value={item.value}
                                    onChange={(e) => item.set(Number(e.target.value))}
                                    className="w-12 p-1 border border-gray-300 rounded-lg text-sm"
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max={item.max}
                                value={item.value}
                                onChange={(e) => item.set(Number(e.target.value))}
                                className="w-full"
                            />
                        </div>
                    ))}

                    {/* CALORIES */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            Kalorie (zakres)
                        </h3>
                        <div className="flex gap-4 mb-4">
                            <input
                                type="number"
                                name="minCalories"
                                value={minCalories}
                                onChange={(e) => setMinCalories(Number(e.target.value))}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Minimalne kalorie"
                            />
                            <input
                                type="number"
                                name="maxCalories"
                                value={maxCalories}
                                onChange={(e) => setMaxCalories(Number(e.target.value))}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Maksymalne kalorie"
                            />
                        </div>
                    </div>

                    {/* CLEAR BUTTON */}
                    <button
                        onClick={clearAllFilters}
                        className="w-full py-2 px-4 mt-4 text-sm font-bold cursor-pointer bg-red-600 text-white rounded-lg hover:bg-red-500 focus:outline-none"
                    >
                        Wyczyść filtry
                    </button>
                </div>
            </motion.div>
            <div className="flex-1 gap-8">
                {/* Show a "No recipes found" message after 3 seconds */}
                {noRecipesMessage && (
                    <p className="text-center text-lg text-gray-500">
                        Brak potraw spełniających kryteria.
                    </p>
                )}
                {/* Show RecipeSkeleton while loading */}
                {loading ? (
                    <RecipeSkeleton />
                ) : (
                    <RecipesGrid recipes={filteredRecipes} />
                )}
            </div>
        </div>
    );
}
