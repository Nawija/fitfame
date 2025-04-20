"use client";

import { useEffect, useReducer, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { IoClose } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Filters, Recipe } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";

const RecipesGrid = dynamic(
    () => import("./RecipesGrid").then((mod) => mod.RecipesGrid),
    { ssr: true }
);

const initialFilters: Filters = {
    search: "",
    category: "all",
    protein: 0,
    fat: 0,
    carbs: 0,
    calories: [0, 3000],
};

type Action =
    | { type: "set"; field: keyof Filters; value: any }
    | { type: "clearSearch" }
    | { type: "reset" };

function filtersReducer(state: Filters, action: Action): Filters {
    switch (action.type) {
        case "set":
            return { ...state, [action.field]: action.value };
        case "clearSearch":
            return { ...state, search: "" };
        case "reset":
            return initialFilters;
        default:
            return state;
    }
}

// Debounce hook
function useDebounce<T>(value: T, delay = 200): T {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debounced;
}

export function FiltersSection({ allRecipes }: { allRecipes: Recipe[] }) {
    const [filters, dispatch] = useReducer(filtersReducer, initialFilters);
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedFilters = useDebounce(filters);

    useEffect(() => {
        setLoading(true);
    }, [filters]);
    useEffect(() => {
        setLoading(false);
    }, [debouncedFilters]);

    const filteredRecipes = useMemo(() => {
        const [minCal, maxCal] = debouncedFilters.calories;
        return allRecipes.filter((r) => {
            return (
                (debouncedFilters.category === "all" ||
                    r.category === debouncedFilters.category) &&
                (debouncedFilters.search === "" ||
                    r.title
                        .toLowerCase()
                        .includes(debouncedFilters.search.toLowerCase())) &&
                r.protein >= debouncedFilters.protein &&
                r.fat >= debouncedFilters.fat &&
                r.carbs >= debouncedFilters.carbs &&
                r.calories >= minCal &&
                r.calories <= maxCal
            );
        });
    }, [allRecipes, debouncedFilters]);

    return (
        <div className="relative bg-gray-50">
            <button
                onClick={() => setFiltersVisible(true)}
                className="sticky top-3 mt-2 left-1 z-40 p-3 bg-blue-500 text-white rounded-full shadow-lg lg:hidden flex items-center justify-center text-xs font-bold"
            >
                <IoMdArrowRoundForward className="text-xs mr-1" /> Filtruj
                <span className="h-3 w-3 bg-blue-600 absolute top-0 right-0 rounded-full animate-ping" />
                <span className="h-3 w-3 bg-blue-600 absolute top-0 right-0 rounded-full" />
            </button>

            <AnimatePresence>
                {filtersVisible && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setFiltersVisible(false)}
                            className="fixed inset-0 z-40 bg-black lg:hidden backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="fixed inset-y-0 left-0 z-50 bg-white shadow-lg overflow-y-auto p-6 w-80 max-w-full lg:hidden"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Filtry
                                </h2>
                                <button
                                    onClick={() => setFiltersVisible(false)}
                                >
                                    <IoClose size={28} />
                                </button>
                            </div>
                            <FilterContent
                                filters={filters}
                                dispatch={dispatch}
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div className="flex flex-col lg:flex-row max-w-[1900px] mx-auto">
                <aside className="hidden lg:block sticky top-0 h-screen overflow-y-scroll w-[300px] bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        Opcje filtrowania
                    </h2>
                    <FilterContent filters={filters} dispatch={dispatch} />
                </aside>

                <main className="flex-1 p-6 bg-gray-50 rounded-lg">
                    {!loading && filteredRecipes.length === 0 && (
                        <div className="text-center text-lg text-gray-600 font-semibold">
                            <p>Brak potraw spełniających kryteria</p>
                        </div>
                    )}
                    <RecipesGrid recipes={filteredRecipes} />
                </main>
            </div>
        </div>
    );
}

export function FilterContent({
    filters,
    dispatch,
}: {
    filters: Filters;
    dispatch: React.Dispatch<Action>;
}) {
    const categories = ["all", "Kurczak", "Masa", "Rzeźba", "Niskokaloryczne"];
    const macroFields = [
        { label: "Białko (min.)", field: "protein", max: 200 },
        { label: "Tłuszcz (min.)", field: "fat", max: 200 },
        { label: "Węglowodany (min.)", field: "carbs", max: 500 },
    ] as const;

    return (
        <div className="space-y-6">
            <div className="mb-6 relative">
                <input
                    type="text"
                    value={filters.search}
                    onChange={(e) =>
                        dispatch({
                            type: "set",
                            field: "search",
                            value: e.target.value,
                        })
                    }
                    placeholder="Wyszukaj"
                    className="w-full p-2 border text-sm border-gray-300 rounded-lg focus:outline-none"
                />
                {filters.search && (
                    <button
                        onClick={() => dispatch({ type: "clearSearch" })}
                        className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                    >
                        <IoClose />
                    </button>
                )}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Kategoria
                </h3>
                <div className="space-y-2">
                    {categories.map((cat) => (
                        <label
                            key={cat}
                            className="flex items-center text-sm text-gray-700"
                        >
                            <input
                                type="radio"
                                className="mr-2"
                                checked={filters.category === cat}
                                onChange={() =>
                                    dispatch({
                                        type: "set",
                                        field: "category",
                                        value: cat,
                                    })
                                }
                            />
                            {cat === "all" ? "Wszystkie" : cat}
                        </label>
                    ))}
                </div>
            </div>

            {macroFields.map(({ label, field, max }) => (
                <div key={field}>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">{label}</span>
                        <input
                            type="number"
                            className="w-12 p-1 border border-gray-300 rounded-lg text-sm"
                            value={filters[field]}
                            onChange={(e) =>
                                dispatch({
                                    type: "set",
                                    field,
                                    value: Number(e.target.value),
                                })
                            }
                        />
                    </div>
                    <input
                        type="range"
                        min={0}
                        max={max}
                        value={filters[field]}
                        onChange={(e) =>
                            dispatch({
                                type: "set",
                                field,
                                value: Number(e.target.value),
                            })
                        }
                        className="w-full"
                    />
                </div>
            ))}

            <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Kalorie (zakres)
                </h3>
                <div className="flex gap-4 mb-4">
                    {[0, 1].map((idx) => (
                        <input
                            key={idx}
                            type="number"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder={idx === 0 ? "Minimalne" : "Maksymalne"}
                            value={filters.calories[idx]}
                            onChange={(e) => {
                                const val = Number(e.target.value);
                                const newCalories: [number, number] = [
                                    ...filters.calories,
                                ] as [number, number];
                                newCalories[idx] = val;
                                dispatch({
                                    type: "set",
                                    field: "calories",
                                    value: newCalories,
                                });
                            }}
                        />
                    ))}
                </div>
            </div>

            <button
                onClick={() => dispatch({ type: "reset" })}
                className="w-full py-2 px-4 text-sm font-bold bg-red-600 text-white rounded-lg hover:bg-red-500"
            >
                Wyczyść filtry
            </button>
        </div>
    );
}
