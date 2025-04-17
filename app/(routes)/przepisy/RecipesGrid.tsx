"use client";

import { SecondBtn } from "@/components/Buttons/SecondBtn";
import { motion } from "framer-motion";
import { IoTime } from "react-icons/io5";
import Link from "next/link";
import { Recipe } from "@/types/types";
import { useState } from "react";
import Image from "next/image";

export const RecipesGrid = ({ recipes }: { recipes: Recipe[] }) => {
    // Paginacja
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 15;

    // Obliczanie całkowitej liczby stron
    const totalPages = Math.ceil(recipes.length / recipesPerPage);

    // Obliczanie przepisów dla bieżącej strony
    const currentPageRecipes = recipes.slice(
        (currentPage - 1) * recipesPerPage,
        currentPage * recipesPerPage
    );

    // Funkcja do generowania numerów stron z rozszerzoną paginacją
    const generatePageNumbers = () => {
        const range = 2;
        const pageNumbers = [];

        // Jeśli jest więcej niż 5 stron, wyświetl tylko 2 strony przed i po aktualnej
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage > range) pageNumbers.push(1);
            if (currentPage > range + 1) pageNumbers.push("...");

            const start = Math.max(1, currentPage - range);
            const end = Math.min(totalPages, currentPage + range);

            for (let i = start; i <= end; i++) {
                pageNumbers.push(i);
            }

            if (currentPage < totalPages - range - 1) pageNumbers.push("...");
            if (currentPage < totalPages - range) pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {currentPageRecipes.length > 0 ? (
                    currentPageRecipes.map((recipe, index) => (
                        <Link
                            key={index}
                            href={`/przepisy/${recipe.slug}`}
                            className="flex items-stretch group w-full"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-white group p-2 rounded-lg shadow-lg transition-all transform text-center flex flex-col items-center justify-between w-full"
                            >
                                <div className="w-full">
                                    <div className="relative w-full">
                                        <div className="relative w-full h-48 object-cover rounded-md mb-6 overflow-hidden">
                                            <Image
                                                src={recipe.image}
                                                alt={recipe.title}
                                                fill
                                                className="w-full h-full object-cover group-hover:scale-110 duration-300 transition-transform"
                                            />
                                        </div>
                                        <div className="absolute p-2 text-sm font-semibold -bottom-1 -right-1 bg-white rounded-lg text-yellow-700 flex items-center justify-center">
                                            <IoTime className="mr-1" />
                                            <p>{recipe.time}</p>
                                        </div>
                                    </div>
                                    <h3 className="text-xl px-3 font-semibold text-gray-800 mb-2">
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
                                </div>
                                <SecondBtn className="mt-4 mb-4">
                                    Zobacz przepis
                                </SecondBtn>
                            </motion.div>
                        </Link>
                    ))
                ) : (
                    <div className="w-full text-center text-gray-700">
                        Brak przepisów spełniających kryteria.
                    </div>
                )}
            </div>

            {/* Paginacja */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-12 mb-8 space-x-2">
                    {generatePageNumbers().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (page !== "...")
                                    setCurrentPage(page as number);
                            }}
                            className={`px-4 py-2 text-sm font-semibold rounded-md cursor-pointer ${
                                page === currentPage
                                    ? "bg-[#c99b37ee] text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-stone-300"
                            }`}
                            disabled={page === "..."}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
