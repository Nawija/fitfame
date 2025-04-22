"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type IngredientsProps = {
    ingredients: string[];
};

export default function Ingredients({ ingredients }: IngredientsProps) {
    const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
    const [portions, setPortions] = useState<number>(1);

    const toggleIngredient = (index: number) => {
        setCheckedIngredients((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const handlePortionChange = (delta: number) => {
        setPortions((prev) => Math.max(1, prev + delta));
    };

    const scaleIngredient = (ingredient: string) => {
        // Szuka liczby z jednostką np. "200g", "150 ml", "3 szt."
        return ingredient.replace(
            /(\d+)(\s?[a-zA-Ząćęłńóśźż]+)/g,
            (_, num, unit) => `${parseInt(num) * portions}${unit}`
        );
    };

    const getPortionLabel = (count: number) => {
        if (count === 1) return "Porcja";
        if (count > 1 && count < 5) return "Porcje";
        return "Porcji";
    };

    return (
        <div className="bg-white border border-gray-100 rounded-lg py-4 sticky top-0">
            <div className="flex flex-col items-start justify-center px-6 mb-2">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => handlePortionChange(-1)}
                        className="p-1.5 bg-yellow-500 rounded-full shadow hover:bg-yellow-400 cursor-pointer text-white"
                    >
                        <FaMinus className="text-xs" />
                    </button>
                    <span className="text-gray-700 font-semibold text-sm ">
                        {portions} {getPortionLabel(portions)}
                    </span>
                    <button
                        onClick={() => handlePortionChange(1)}
                        className="p-1.5 bg-yellow-500 rounded-full shadow hover:bg-yellow-400 cursor-pointer text-white"
                    >
                        <FaPlus className="text-xs" />
                    </button>
                </div>
            </div>
            <h2 className="text-lg font-medium text-gray-800 pt-2 px-6">
                Lista zakupów:
            </h2>
            <p className="px-6 pb-2 font-semibold text-sm text-red-700">(kliknij składnik, aby wykreślić)</p>
            {ingredients?.map((ingredient, index) => (
                <button
                    key={index}
                    onClick={() => toggleIngredient(index)}
                    className="w-full text-left flex items-center gap-1 cursor-pointer p-1.5 px-6"
                >
                    <div className="w-4 h-4 flex p-1 items-center mr-3 justify-center rounded-full bg-violet-100 text-gray-500 font-bold text-xs border border-gray-200">
                        {index + 1}
                    </div>
                    <p
                        className={`text-base font-semibold transition ${
                            checkedIngredients.includes(index)
                                ? "line-through decoration-red-600 text-red-900/80 opacity-85"
                                : "text-gray-800"
                        }`}
                    >
                        {scaleIngredient(ingredient)}
                    </p>
                </button>
            ))}
        </div>
    );
}
