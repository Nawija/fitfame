import { recipesData } from "@/constants/Przepisy";
import { notFound } from "next/navigation";
import { IoTimeOutline } from "react-icons/io5";
import { RiPuzzle2Line } from "react-icons/ri";
import Link from "next/link";
import Ingredients from "./Ingredients";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const recipe = recipesData.find((r) => r.slug === slug);

    if (!recipe) return notFound();

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
            <div className="relative -z-10 top-0 left-0 w-full h-8 lg:h-12 overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full object-cover mb-6 shadow h-8 lg:h-12"
                />
                <div className="absolute top-0 left-0 w-full h-8 lg:h-12 overflow-hidden bg-black/30" />
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12 flex items-center justify-center lg:items-start flex-col lg:flex-row lg:space-x-7 relative">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
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
                        className="w-full object-cover rounded-xl shadow max-h-[600px]"
                    />

                    <p className="text-lg py-6 w-full px-2">
                        {recipe.description}
                    </p>

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

                    <Ingredients ingredients={recipe.ingredients} />
                </div>

                <div className="p-8 rounded-lg border border-gray-200 bg-gray-100 mt-8 lg:mt-0 min-w-[400px]">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Sposób przygotowania:
                    </h3>
                    <div className="space-y-6">
                        {recipe.steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <div className="min-w-7 min-h-7 w-7 h-7 flex items-center justify-center rounded-full bg-amber-400 text-white font-bold text-base shadow">
                                    {index + 1}
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-800 mb-1">
                                        {step.title}
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-base">
                                        {step.description.map((line, i) => (
                                            <li key={i}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="flex
         items-center justify-center flex-col lg:p-48 p-24  bg-gray-100 text-xl font-semibold text-gray-700 space-y-3"
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
