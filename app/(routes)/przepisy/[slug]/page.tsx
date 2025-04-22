import { getRecipeBySlug } from "@/lib/getRecipes";
import { getAllRecipes } from "@/lib/getRecipes";
import { notFound } from "next/navigation";
import { IoExtensionPuzzleSharp, IoTimeOutline } from "react-icons/io5";
import { RiPuzzle2Line, RiTimeFill } from "react-icons/ri";
import Link from "next/link";
import Ingredients from "./Ingredients";
import Image from "next/image";
import ShareButton from "@/components/Buttons/ShareButton";
import { Recipe } from "@/types/types";
import Navigation from "@/components/Navigation";
import Newsletter from "@/components/Newsletter";
import { FaBurn, FaMoneyBillWave, FaStar } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const awaitedParams = await Promise.resolve(params);
    const { slug } = awaitedParams;
    const recipe: Recipe | null = await getRecipeBySlug(slug);

    if (!recipe) return notFound();

    const allRecipes = await getAllRecipes();

    const similarRecipes = allRecipes
        .filter((r) => {
            if (r.slug === recipe.slug) return false;

            const recipeTitleWords = recipe.title
                .split(" ")
                .slice(0, 2)
                .map((word) => word.toLowerCase());
            const recipeTitleLower = r.title.toLowerCase();
            return recipeTitleWords.some((word) =>
                recipeTitleLower.includes(word)
            );
        })
        .slice(0, 4);

    return (
        <div className="w-full overflow-hidden relative h-full">
            <div className="my-3 px-4 max-w-6xl mx-auto">
                <Navigation
                    links={[
                        { name: "Przepisy", href: "/przepisy" },
                        {
                            name: recipe.title,
                            href: `/przepisy/${recipe.slug}`,
                        },
                    ]}
                />
            </div>
            <div className="max-w-6xl mx-auto anim-opacity px-2 py-2 flex items-center justify-center lg:items-start flex-col lg:space-x-7 relative">
                <div className="w-full h-full">
                    <div className="w-full overflow-hidden h-62 lg:min-h-[500px] relative">
                        <Image
                            fill
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full object-cover rounded-xl shadow"
                        />
                    </div>
                    <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 py-4">
                        {recipe.title}
                    </h1>

                    <div className="flex items-center justify-between space-x-1 font-medium">
                        <div className="flex items-center justify-start space-x-1">
                            <FaStar className="text-yellow-500" />{" "}
                            <span>4.7</span>{" "}
                            <span className="text-yellow-600">|</span>
                            <p className="text-yellow-600">
                                {recipe.steps.length} Kroki
                            </p>
                        </div>
                        <ShareButton title={recipe.title} />
                    </div>

                    <p className="text-sm w-full px-2">{recipe.description}</p>

                    {/* <p className="capitalize">
                        <strong className="font-medium">Kategoria:</strong>{" "}
                        {recipe.category}
                    </p> */}

                    <div className="flex items-center justify-start space-x-1 py-4">
                        <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg border border-gray-100">
                            <div className="py-2 px-3 bg-yellow-100 rounded-lg">
                                <RiTimeFill className="text-2xl text-yellow-500" />
                            </div>
                            <p className="text-xs font-semibold mt-1">
                                {recipe.time}
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg border border-gray-100">
                            <div className="py-2 px-3 bg-yellow-100 rounded-lg">
                                <GiKnifeFork className="text-2xl text-yellow-500" />
                            </div>
                            <p className="text-xs font-semibold mt-1">
                                4 porcje
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg border border-gray-100">
                            <div className="py-2 px-3 bg-yellow-100 rounded-lg">
                                <FaMoneyBillWave className="text-2xl text-yellow-500" />
                            </div>
                            <p className="text-xs font-semibold mt-1">Tani</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg border border-gray-100">
                            <div className="py-2 px-3 bg-yellow-100 rounded-lg">
                                <IoExtensionPuzzleSharp className="text-2xl text-yellow-500" />
                            </div>
                            <p className="text-xs font-semibold mt-1">
                                {recipe.level}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg border border-gray-100">
                            <div className="py-2 px-3 bg-yellow-100 rounded-lg">
                                <FaBurn className="text-2xl text-yellow-500" />
                            </div>
                            <p className="text-xs font-semibold mt-1">
                                {recipe.calories} kcal
                            </p>
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-4 gap-2 text-center my-8">
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
                    </div> */}
                </div>
            </div>

            <section className="max-w-6xl mx-auto mb-6 flex items-start justify-center flex-col lg:flex-row space-y-8">
                <div className=" w-full lg:w-1/2 px-2 space-y-6">
                    {/* <div className="mt-6 lg:mb-6 lg:mt-0 w-full flex items-center justify-end ">
                        <ShareButton title={recipe.title} />
                    </div> */}
                    <Ingredients ingredients={recipe.ingredients} />
                    <div className="p-8 rounded-lg border border-gray-100 bg-white mt-8 lg:mt-0 w-full">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Wartości odżywcze:
                        </h3>

                        <div className="text-sm text-gray-700 border border-gray-200 rounded-lg overflow-hidden">
                            <div className="flex justify-between bg-gray-50 px-4 py-2 font-medium">
                                <span>Kategoria</span>
                                <span className="text-gray-900">
                                    Niskokaloryczne
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-2 border-t border-gray-200">
                                <span>Wartość energetyczna</span>
                                <span>
                                    <strong>{recipe.calories}</strong> kcal
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-2 border-t border-gray-200">
                                <span>Białko</span>
                                <span>
                                    <strong>{recipe.protein}</strong> g
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-2 border-t border-gray-200">
                                <span>Tłuszcze</span>
                                <span>
                                    <strong>{recipe.fat}</strong> g
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-2 border-t border-gray-200">
                                <span>Węglowodany</span>
                                <span>
                                    <strong>{recipe.carbs}</strong> g
                                </span>
                            </div>
                            <div className="flex justify-between px-4 py-2 border-t border-gray-200">
                                <span>Błonnik</span>
                                <span>
                                    <strong>{recipe.fiber}</strong> g
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-start bg-white flex flex-col items-center justify-center mx-3 px-2 rounded-lg border border-gray-100 py-12 space-y-20">
                    {recipe.steps?.map((s, i) => (
                        <div
                            key={i}
                            id={s.title}
                            className="space-y-4 mx-4 flex items-center justify-center flex-col"
                        >
                            <div className="space-y-4 ">
                                <div className="relative w-max">
                                    <span className="absolute -top-4 font-bold text-xs -left-1 bg-yellow-500 py-0 px-2 text-white rounded-full">
                                        Krok {i + 1}
                                    </span>
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {s?.title}
                                    </h2>
                                </div>

                                <ul className="list-disc pl-6 text-base max-w-11/12 font-medium text-gray-700 space-y-1">
                                    {s?.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {s?.image && (
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="w-full max-w-2xl rounded-lg shadow-md"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <Newsletter />

            {similarRecipes.length > 0 && (
                <div className="my-20 px-4 max-w-7xl mx-auto">
                    <h4 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
                        To też może Ci zasmakować
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {similarRecipes.map((similar) => (
                            <Link
                                key={similar.slug}
                                href={`/przepisy/${similar.slug}`}
                                className="group bg-stone-50 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition duration-300 p-2 flex flex-col"
                            >
                                <div className="relative overflow-hidden rounded-lg">
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
