import { IoTimeOutline } from "react-icons/io5";
import { RiPuzzle2Line } from "react-icons/ri";
import Ingredients from "@/app/(routes)/przepisy/[slug]/Ingredients";
import ShareButton from "@/components/Buttons/ShareButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "@/app/(routes)/przepisy/[slug]/recipeStyle.css";
import Navigation from "@/components/Navigation";
import { FormRecipePage } from "@/types/types";

const RecipePage = ({ recipe }: { recipe: FormRecipePage }) => {
    return (
        <div className="w-full overflow-hidden relative h-full scale-90 -mt-12">
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
            <div className="max-w-7xl mx-auto anim-opacity px-4 py-12 flex items-center justify-center lg:items-start flex-col lg:flex-row lg:space-x-7 relative">
                <div>
                    <h1 className="text-4xl uppercase lg:text-4xl font-bold text-gray-800 mb-4">
                        {recipe.title}
                    </h1>

                    <p className="capitalize">
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
                        src={
                            recipe.image
                                ? recipe.image instanceof File
                                    ? URL.createObjectURL(recipe.image)
                                    : recipe.image
                                : undefined
                        }
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
                            {recipe.steps?.map((step, index) => (
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
            <div className="recipeStyle text-start max-w-7xl flex flex-col items-center justify-center mx-auto py-12">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {recipe.content}
                </ReactMarkdown>
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
        </div>
    );
};

export default RecipePage;
