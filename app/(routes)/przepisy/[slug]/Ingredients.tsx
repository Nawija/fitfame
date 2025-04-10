"use client";

import { useState } from "react";

type IngredientsProps = {
    ingredients: string[];
};

export default function Ingredients({ ingredients }: IngredientsProps) {
    const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);

    const toggleIngredient = (index: number) => {
        setCheckedIngredients((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="bg-gray-100 border border-gray-200 rounded-lg py-4">
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
                        className={`text-gray-700 lg:text-lg text-base font-semibold transition ${
                            checkedIngredients.includes(index)
                                ? "line-through opacity-50"
                                : ""
                        }`}
                    >
                        {ingredient}
                    </p>
                </button>
            ))}
        </div>
    );
}
