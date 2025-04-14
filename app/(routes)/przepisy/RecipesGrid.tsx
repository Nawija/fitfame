"use client";

import { SecondBtn } from "@/components/Buttons/SecondBtn";
import { motion } from "framer-motion";
import { IoTime } from "react-icons/io5";
import Link from "next/link";
import { Recipe } from "@/constants/Przepisy";

export const RecipesGrid = ({ recipes }: { recipes: Recipe[] }) => {
    return (
        <div className="lg:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <Link key={recipe.id} href={`/przepisy/${recipe.slug}`}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white group px-2 py-4 rounded-lg shadow-lg transition-all transform border border-transparent hover:border-yellow-200 text-center"
                        >
                            <div className="relative">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-48 object-cover rounded-md mb-6"
                                />
                                <div className="absolute p-2 text-sm font-semibold -bottom-1 -right-1 bg-white rounded-lg text-yellow-700 flex items-center justify-center">
                                    <IoTime className="mr-1" />
                                    <p>{recipe.time}</p>
                                </div>
                            </div>
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
                    </Link>
                ))
            ) : (
                <div className="w-full text-center text-gray-700">
                    Brak przepisów spełniających kryteria.
                </div>
            )}
        </div>
    );
};
