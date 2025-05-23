import { IoTimeOutline } from "react-icons/io5";
import { RiPuzzle2Line } from "react-icons/ri";
import Ingredients from "@/app/(routes)/przepisy/[slug]/Ingredients";
import ShareButton from "@/components/Buttons/ShareButton";
import "@/app/(routes)/przepisy/[slug]/recipeStyle.css";
import Navigation from "@/components/Navigation";
import { FormRecipePage } from "@/types/types";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";

const RecipePage = ({ recipe }: { recipe: FormRecipePage }) => {
    return (
        <div className="w-full overflow-hidden relative h-full">
            <div className="relative -z-10 top-0 left-0 w-full h-8 lg:h-12 overflow-hidden">
                <img
                    src={
                        recipe.image
                            ? recipe.image instanceof File
                                ? URL.createObjectURL(recipe.image)
                                : recipe.image
                            : undefined
                    }
                    alt={recipe.title}
                    className="w-full object-cover mb-6 shadow h-8 lg:h-12"
                />
                <div className="absolute top-0 left-0 w-full h-8 lg:h-12 overflow-hidden bg-black/30" />
            </div>
            <div className="my-4 px-4 max-w-7xl mx-auto">
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
            <div className=" mx-auto anim-opacity px-4 py-12 flex items-center justify-center lg:items-start flex-col lg:flex-row lg:space-x-7 relative">
                <div>
                    <h1 className="text-4xl uppercase lg:text-4xl font-bold text-gray-800 mb-4">
                        {recipe.title}
                    </h1>

                    <p className="capitalize">
                        <strong className="font-medium">Kategoria:</strong>{" "}
                        {recipe.category}
                    </p>
                    <div className="flex items-center justify-start space-x-4 py-4">
                        <div className="flex items-center justify-center text-yellow-600 w-max">
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
                        src={
                            recipe.image
                                ? recipe.image instanceof File
                                    ? URL.createObjectURL(recipe.image)
                                    : recipe.image
                                : undefined
                        }
                        alt={recipe.title}
                        className="w-full object-cover rounded-xl shadow max-h-[550px] lg:min-w-[850px]"
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
                </div>

                <div className="space-y-6">
                    <div className="mt-6 lg:mb-6 lg:mt-0 w-full flex items-center justify-end ">
                        <ShareButton title={recipe.title} />
                    </div>
                    <Ingredients ingredients={recipe.ingredients} />
                    <div className="p-8 rounded-lg border border-gray-200 bg-gray-100 mt-8 lg:mt-0 lg:min-w-[400px] w-full">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Sposób przygotowania:
                        </h3>
                        <div className="space-y-2">
                            {recipe.steps.map((step, index) => (
                                <Link
                                    href={`#${step.title}`}
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <div className="min-w-6 min-h-6 w-6 h-6 flex items-center justify-center rounded-full bg-amber-400 text-white font-bold text-base shadow">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800">
                                            {step.title}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-start bg-gray-50 flex flex-col items-center justify-center mx-auto border border-gray-200 py-12 px-4 space-y-8">
                {recipe.steps?.map((s, i) => (
                    <div
                        key={i}
                        id={s.title}
                        className="mx-auto space-y-4 flex items-start justify-center flex-col"
                    >
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {s?.title}
                            </h2>

                            <ol className="list-decimal pl-6 text-lg text-gray-700 space-y-1">
                                {s?.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ol>
                        </div>
                        {s?.image && (
                            <img
                                src={
                                    s.image
                                        ? s.image instanceof File
                                            ? URL.createObjectURL(s.image)
                                            : s.image
                                        : undefined
                                }
                                alt={s.title}
                                className="w-full max-w-2xl rounded-lg shadow-md"
                            />
                        )}
                    </div>
                ))}
            </div>

            <Newsletter />
        </div>
    );
};

export default RecipePage;
