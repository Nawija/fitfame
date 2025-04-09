import { recipesData } from "@/constants/Przepisy";
import { notFound } from "next/navigation";
import { IoTimeOutline } from "react-icons/io5";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const recipe = recipesData.find((r) => r.slug === slug);
    if (!recipe) return notFound();

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {recipe.title}
            </h1>
            <div className="flex items-center justify-between mb-6">
                <p>
                    <strong className="font-medium">Kategoria:</strong>{" "}
                    {recipe.category}
                </p>
                <div className="flex items-center justify-center">
                    <IoTimeOutline className="mr-1 text-2xl" />
                    <p className="text-xl font-medium">{recipe.time}</p>
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

            <div className="grid grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-yellow-100 rounded-xl py-4 shadow">
                    <p className="text-sm text-gray-600">Kalorie</p>
                    <p className="text-base lg:text-xl font-bold">
                        {recipe.calories} kcal
                    </p>
                </div>
                <div className="bg-blue-100 rounded-xl py-4 shadow">
                    <p className="text-sm text-gray-600">Białko</p>
                    <p className="text-base lg:text-xl font-bold">
                        {recipe.protein} g
                    </p>
                </div>
                <div className="bg-pink-100 rounded-xl py-4 shadow">
                    <p className="text-sm text-gray-600">
                        Tłuszcz / Węglowodany
                    </p>
                    <p className="text-base lg:text-xl font-bold">
                        {recipe.fat} g / {recipe.carbs} g
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sposób przygotowania
            </h2>
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
    );
}
