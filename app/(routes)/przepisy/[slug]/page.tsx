import { getRecipeBySlug } from "@/lib/getRecipes";
import { getAllRecipes } from "@/lib/getRecipes";
import { notFound } from "next/navigation";
import { IoTimeOutline } from "react-icons/io5";
import { RiPuzzle2Line } from "react-icons/ri";
import Link from "next/link";
import Ingredients from "./Ingredients";
import Image from "next/image";
import ShareButton from "@/components/Buttons/ShareButton";
import { Recipe } from "@/types/types";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const awaitedParams = await Promise.resolve(params);
    const { slug } = awaitedParams;
    const recipe: Recipe | null = await getRecipeBySlug(slug);

    if (!recipe) return notFound();

    // Załaduj wszystkie przepisy
    const allRecipes = await getAllRecipes();

    // Filtrowanie podobnych przepisów
    const similarRecipes = allRecipes
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
                <Image
                    fill
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full object-cover mb-6 shadow h-8 lg:h-12"
                />
                <div className="absolute top-0 left-0 w-full h-8 lg:h-12 overflow-hidden bg-black/30" />
            </div>
            <div className="max-w-7xl mx-auto anim-opacity px-4 py-12 flex items-center justify-center lg:items-start flex-col lg:flex-row lg:space-x-7 relative">
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
                        className="w-full object-cover rounded-xl shadow max-h-[550px] lg:min-w-[700px]"
                    />

                    <div className="grid grid-cols-4 gap-2 text-center my-8">
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

                    <p className="text-lg pb-8 w-full px-2">
                        {recipe.description}
                    </p>

                    <Ingredients ingredients={recipe.ingredients} />
                </div>

                <div>
                    <div className="mt-6 lg:mb-6 lg:mt-0 w-full flex items-center justify-end">
                        <ShareButton title={recipe.title} />
                    </div>
                    <div className="p-8 rounded-lg border border-gray-200 bg-gray-100 mt-8 lg:mt-0 lg:min-w-[400px] w-full">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Sposób przygotowania:
                        </h3>
                        <div className="space-y-6">
                            {recipe.steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-2"
                                >
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
            </div>
            <div className="flex items-center justify-center flex-col px-6 py-24 bg-gray-100 text-gray-800">
                <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl text-center space-y-6">
                    <h3 className="text-3xl font-bold">
                        Zapisz się do newslettera
                    </h3>
                    <p className="text-gray-600 text-base">
                        Otrzymuj porady treningowe, przepisy i darmowe materiały
                        bezpośrednio na maila.
                    </p>
                    <form className="w-full space-y-4">
                        <input
                            type="email"
                            placeholder="Twój adres e-mail"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition duration-300"
                        >
                            Zapisz się
                        </button>
                    </form>
                    <p className="text-xs text-gray-400">
                        Możesz wypisać się w każdej chwili.
                    </p>
                </div>
            </div>

            {similarRecipes.length > 0 && (
                <div className="my-20 px-4 max-w-7xl mx-auto">
                    <h4 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
                        To też może Ci zasmakować
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {similarRecipes.map((similar) => (
                            <Link
                                key={similar.slug}
                                href={`/przepisy/${similar.slug}`}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-2 flex flex-col"
                            >
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={similar.image}
                                        alt={similar.title}
                                        className="object-cover w-full h-52 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-2 right-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-xl shadow-md flex items-center gap-1">
                                        <IoTimeOutline className="text-base" />
                                        <span>{similar.time}</span>
                                    </div>
                                </div>
                                <div className="text-center py-4 px-2 space-y-2">
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        {similar.title}
                                    </h4>
                                    <div className="flex justify-center w-max gap-3 text-sm text-gray-600">
                                        <span className="bg-pink-100 px-2 py-1 rounded-full ">
                                            <strong className="font-semibold text-pink-600">
                                                Kcal:
                                            </strong>{" "}
                                            {similar.calories}
                                        </span>
                                        <span className="bg-blue-50 px-2 py-1 rounded-full">
                                            <strong className="text-blue-600">
                                                B:
                                            </strong>{" "}
                                            {similar.protein}
                                        </span>
                                        <span className="bg-yellow-50 px-2 py-1 rounded-full">
                                            <strong className="text-yellow-600">
                                                T:
                                            </strong>{" "}
                                            {similar.fat}
                                        </span>
                                        <span className="bg-violet-50 px-2 py-1 rounded-full">
                                            <strong className="text-violet-600">
                                                W:
                                            </strong>{" "}
                                            {similar.carbs}
                                        </span>
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
