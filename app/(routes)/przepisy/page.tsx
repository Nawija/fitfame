"use client";

import { useState } from "react";

interface Recipe {
    id: number;
    title: string;
    image: string;
    category: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
}

const recipesData: Recipe[] = [
    {
        id: 1,
        title: "Kurczak z warzywami",
        image: "/images/przepisy/krewetki.jpg",
        category: "Kurczak",
        calories: 300,
        protein: 35,
        fat: 10,
        carbs: 20,
    },
    {
        id: 2,
        title: "Bowl na masę",
        image: "/images/przepisy/pancakes.jpg",
        category: "Masa",
        calories: 700,
        protein: 40,
        fat: 30,
        carbs: 80,
    },
    {
        id: 3,
        title: "Sałatka białkowa",
        image: "/images/przepisy/pancakes.jpg",
        category: "Rzeźba",
        calories: 250,
        protein: 20,
        fat: 12,
        carbs: 15,
    },
    {
        id: 4,
        title: "Zupa pomidorowa",
        image: "/images/przepisy/krewetki.jpg",
        category: "Niskokaloryczne",
        calories: 150,
        protein: 5,
        fat: 3,
        carbs: 25,
    },
];

export default function Przepisy() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [minCalories, setMinCalories] = useState<number>(0);
    const [maxCalories, setMaxCalories] = useState<number>(3000);
    const [proteinRange, setProteinRange] = useState<number>(0);
    const [fatRange, setFatRange] = useState<number>(0);
    const [carbsRange, setCarbsRange] = useState<number>(0);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipesData);

    const handleFilterApply = () => {
        const newFilteredRecipes = recipesData.filter(
            (recipe) =>
                (selectedCategory === "all" || recipe.category === selectedCategory) &&
                recipe.calories >= minCalories &&
                recipe.calories <= maxCalories &&
                recipe.protein >= proteinRange &&
                recipe.fat >= fatRange &&
                recipe.carbs >= carbsRange
        );
        setFilteredRecipes(newFilteredRecipes);
    };

    const handleCaloriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.name === "minCalories") {
            setMinCalories(Number(value));
        } else if (e.target.name === "maxCalories") {
            setMaxCalories(Number(value));
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Section */}
                    <div className="lg:w-1/4 w-full bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                            Opcje filtrowania
                        </h2>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                Kategoria
                            </h3>
                            <select
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                value={selectedCategory}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            >
                                <option value="all">Wszystkie</option>
                                <option value="Kurczak">Kurczak</option>
                                <option value="Masa">Masa</option>
                                <option value="Rzeźba">Rzeźba</option>
                                <option value="Niskokaloryczne">Niskokaloryczne</option>
                            </select>
                        </div>

                        {/* Macronutrient Filters */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                Filtry makroskładników
                            </h3>

                            {/* Protein Filter */}
                            <div className="mb-4">
                                <label className="text-sm text-gray-700">Białko (min.)</label>
                                <input
                                    type="number"
                                    value={proteinRange}
                                    onChange={(e) => setProteinRange(Number(e.target.value))}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Minimalne białko"
                                />
                            </div>

                            {/* Fat Filter */}
                            <div className="mb-4">
                                <label className="text-sm text-gray-700">Tłuszcz (min.)</label>
                                <input
                                    type="number"
                                    value={fatRange}
                                    onChange={(e) => setFatRange(Number(e.target.value))}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Minimalny tłuszcz"
                                />
                            </div>

                            {/* Carbs Filter */}
                            <div className="mb-4">
                                <label className="text-sm text-gray-700">Węglowodany (min.)</label>
                                <input
                                    type="number"
                                    value={carbsRange}
                                    onChange={(e) => setCarbsRange(Number(e.target.value))}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Minimalne węglowodany"
                                />
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
                        <button
                            onClick={handleFilterApply}
                            className="w-full bg-yellow-500 text-sm font-semibold text-white p-2 rounded-lg transition-colors hover:bg-yellow-400"
                        >
                            Zastosuj filtry
                        </button>
                    </div>

                    {/* Recipes Grid Section */}
                    <div className="lg:w-3/4 w-full h-60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map((recipe) => (
                                <div
                                    key={recipe.id}
                                    className="bg-white group px-2 py-6 rounded-lg shadow-lg transition-all transform border border-transparent hover:border-yellow-200"
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
                                        B: {recipe.protein}g T: {recipe.fat}g W: {recipe.carbs}g
                                    </p>
                                    <button className="w-full bg-yellow-500 text-sm font-semibold text-white p-2 rounded-lg mt-4 transition-colors group-hover:bg-yellow-400">
                                        Zobacz przepis
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-lg text-center text-gray-600 col-span-3">
                                Brak takich potraw
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
