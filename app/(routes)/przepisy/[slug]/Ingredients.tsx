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
        <div className="bg-gray-100 border border-gray-200 rounded-lg py-4">
            <div className="flex flex-col items-start justify-center px-6 mb-2">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => handlePortionChange(-1)}
                        className="p-2 bg-yellow-400 rounded-full shadow hover:bg-yellow-300 cursor-pointer text-white"
                    >
                        <FaMinus />
                    </button>
                    <span className="text-gray-700 font-semibold text-lg">
                        {portions} {getPortionLabel(portions)}
                    </span>
                    <button
                        onClick={() => handlePortionChange(1)}
                        className="p-2 bg-yellow-400 rounded-full shadow hover:bg-yellow-300 cursor-pointer text-white"
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>
            <h2 className="text-xl font-medium text-green-700 pt-3 px-6 pb-1">
                Składniki (kliknij składnik, aby wykreślić):
            </h2>
            {ingredients.map((ingredient, index) => (
                <button
                    key={index}
                    onClick={() => toggleIngredient(index)}
                    className="w-full text-left flex items-center gap-2 cursor-pointer p-1.5 px-6"
                >
                    <div className="w-6 h-6 flex items-center mr-4 justify-center rounded-full bg-white text-gray-400 font-bold text-sm shadow">
                        {index + 1}
                    </div>
                    <p
                        className={` lg:text-lg text-base font-semibold transition ${
                            checkedIngredients.includes(index)
                                ? "line-through decoration-red-600 text-gray-500 opacity-85"
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
