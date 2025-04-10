"use client";

import { useState } from "react";
import { recipesData } from "@/constants/Przepisy";
import { notFound } from "next/navigation";
import { IoTimeOutline } from "react-icons/io5";
import { RiPuzzle2Line } from "react-icons/ri";
import Link from "next/link";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const recipe = recipesData.find((r) => r.slug === slug);
    const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);

    if (!recipe) return notFound();

    const toggleIngredient = (index: number) => {
        setCheckedIngredients((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const similarRecipes = recipesData
        .filter(
            (r) =>
                r.slug !== recipe.slug &&
                r.title
                    .toLowerCase()
                    .includes(recipe.title.split(" ")[0].toLowerCase())
        )
        .slice(0, 4);

    return (
        <div className="w-full overflow-hidden relative h-full">
            <div className="absolute-z-10 top-0 left-0 w-full h-10 lg:h-28 overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full object-cover mb-6 shadow"
                />
                <div className="absolute top-0 left-0 w-full h-10 lg:h-28 overflow-hidden bg-black/30" />
            </div>
            <div className="max-w-6xl mx-auto px-4 py-10 flex items-center justify-center lg:items-start flex-col lg:flex-row lg:space-x-7 relative">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {recipe.title}
                    </h1>

                    <p>
                        <strong className="font-medium">Kategoria:</strong>{" "}
                        {recipe.category}
                    </p>
                    <div className="flex items-center justify-start space-x-4 py-4">
                        <div className="flex items-center justify-center text-yellow-600">
                            <IoTimeOutline className="mr-1 text-2xl" />
                            <p className="text-xl font-medium">{recipe.time}</p>
                        </div>

                        <div className="flex items-center justify-center text-green-600">
                            <RiPuzzle2Line className="mr-1 text-2xl" />
                            <p className="text-xl font-medium capitalize">
                                {recipe.level}
                            </p>
                        </div>
                    </div>

                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full object-cover rounded-xl mb-6 shadow"
                    />

                    <div className="mb-4 text-gray-700">
                        <p className="text-lg mb-2">{recipe.description}</p>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center mb-8">
                        <div className="bg-pink-200 rounded-xl py-4 shadow">
                            <p className="text-xs md:text-sm text-gray-700 font-semibold">
                                Kalorie
                            </p>
                            <p className="text-base lg:text-xl font-bold">
                                {recipe.calories} kcal
                            </p>
                        </div>
                        <div className="bg-blue-200 rounded-xl py-4 shadow">
                            <p className="text-xs md:text-sm text-gray-700 font-semibold">
                                Białko
                            </p>
                            <p className="text-base lg:text-xl font-bold">
                                {recipe.protein} g
                            </p>
                        </div>
                        <div className="bg-yellow-200 rounded-xl py-4 shadow">
                            <p className="text-xs md:text-sm text-gray-700 font-semibold">
                                Tłuszcz
                            </p>
                            <p className="text-base lg:text-xl font-bold">
                                {recipe.fat} g
                            </p>
                        </div>
                        <div className="bg-violet-200 rounded-xl py-4 shadow">
                            <p className="text-xs md:text-sm text-gray-700 font-semibold">
                                Węglowodany
                            </p>
                            <p className="text-base lg:text-xl font-bold">
                                {recipe.carbs} g
                            </p>
                        </div>
                    </div>

                    <h2 className="text-xl font-medium text-gray-700 my-6">
                        Składniki (kliknij, aby wykreślić):
                    </h2>
                    <div className=" bg-gray-100 border border-gray-200 rounded-lg py-4">
                        {recipe.ingredients?.map((ingredient, index) => (
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
                </div>

                <div className="sticky top-0">
                    <div className="mb-8"></div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Sposób przygotowania:
                    </h3>
                    <div className="space-y-6">
                        {recipe.steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="min-w-10 min-h-10 w-10 h-10 flex items-center justify-center rounded-full bg-amber-400 text-white font-bold text-lg shadow">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 text-lg">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="flex
         items-center justify-center flex-col p-48  bg-gray-100 text-xl font-semibold text-gray-700 space-y-3"
            >
                <h3>
                    Wyślij przepis na e-mail Nasze najlepsze przepisy, prosto na
                </h3>
                <p>Twoja skrzynkę e-mail.</p>
                <input type="text" className=""></input>
            </div>
            {similarRecipes.length > 0 && (
                <div className="my-16 px-4 max-w-6xl mx-auto">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6">
                        To też może Ci zasmakować
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {similarRecipes.map((similar) => (
                            <Link
                                key={similar.slug}
                                href={`/przepisy/${similar.slug}`}
                                className="bg-white rounded-lg shadow hover:shadow-md transition p-2 flex flex-col gap-4"
                            >
                                <div className="relative">
                                    <img
                                        src={similar.image}
                                        alt={similar.title}
                                        className="rounded-lg object-cover h-40 w-full"
                                    />
                                    <div className="flex items-center justify-center absolute -bottom-2 -right-2 p-2 bg-white rounded-xl">
                                        <IoTimeOutline className="mr-1 text-base" />
                                        <p className="text-sm font-medium">
                                            {recipe.time}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center py-3">
                                    <h4 className="text-lg font-semibold text-gray-700">
                                        {similar.title}
                                    </h4>
                                    <div className="flex items-center justify-center space-x-3">
                                        <p className="text-sm text-gray-500">
                                            <strong className="font-semibold">
                                                Kcal:
                                            </strong>{" "}
                                            {similar.calories}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <strong className="font-semibold">
                                                B:
                                            </strong>{" "}
                                            {similar.protein}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <strong className="font-semibold">
                                                T:
                                            </strong>{" "}
                                            {similar.fat}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <strong className="font-semibold">
                                                W:
                                            </strong>{" "}
                                            {similar.carbs}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
