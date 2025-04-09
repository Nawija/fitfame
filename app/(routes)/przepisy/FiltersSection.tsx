"use client";

import { MainBtn } from "@/components/Buttons/MainBtn";
import { FaSearch } from "react-icons/fa";

type Props = {
    filtersVisible: boolean;
    setFiltersVisible: (v: boolean) => void;
    searchKeywords: string;
    setSearchKeywords: (v: string) => void;
    selectedCategories: string[];
    handleCategoryChange: (category: string) => void;
    proteinRange: number;
    setProteinRange: (v: number) => void;
    fatRange: number;
    setFatRange: (v: number) => void;
    carbsRange: number;
    setCarbsRange: (v: number) => void;
    minCalories: number;
    maxCalories: number;
    handleCaloriesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFilterApply: () => void;
};

export function FiltersSection({
    filtersVisible,
    setFiltersVisible,
    searchKeywords,
    setSearchKeywords,
    selectedCategories,
    handleCategoryChange,
    proteinRange,
    setProteinRange,
    fatRange,
    setFatRange,
    carbsRange,
    setCarbsRange,
    minCalories,
    maxCalories,
    handleCaloriesChange,
    handleFilterApply,
}: Props) {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleFilterApply();
    };

    return (
        <div className="lg:w-1/4 w-full bg-white p-6 rounded-lg shadow-lg">
            <div className="lg:hidden">
                <button
                    onClick={() => setFiltersVisible(!filtersVisible)}
                    className="w-full text-sm font-semibold text-blue-500 p-2"
                >
                    {filtersVisible ? "Zwiń filtry" : "Pokaż filtry"}
                </button>
            </div>

            <div
                className={`lg:block transition-all ease-in-out duration-300 ${
                    filtersVisible
                        ? "block h-[700px]"
                        : "h-0 lg:h-max overflow-y-hidden"
                } lg:space-y-6`}
            >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Opcje filtrowania
                </h2>

                <div className="mb-6 flex items-center justify-center">
                    <input
                        type="text"
                        value={searchKeywords}
                        onChange={(e) => setSearchKeywords(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="w-full p-1.5 border text-sm border-gray-300 rounded-lg focus:outline-none"
                        placeholder="Wyszukaj"
                    />
                    <button
                        className="p-2 border rounded-lg ml-1 bg-blue-400 text-white"
                        onClick={handleFilterApply}
                    >
                        <FaSearch />
                    </button>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Kategoria
                    </h3>
                    <div className="space-y-2">
                        {[
                            "all",
                            "Kurczak",
                            "Masa",
                            "Rzeźba",
                            "Niskokaloryczne",
                        ].map((category) => (
                            <div key={category} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={category}
                                    checked={selectedCategories.includes(
                                        category
                                    )}
                                    onChange={() =>
                                        handleCategoryChange(category)
                                    }
                                    className="mr-2"
                                />
                                <label
                                    htmlFor={category}
                                    className="text-sm text-gray-700"
                                >
                                    {category === "all"
                                        ? "Wszystkie"
                                        : category}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {[
                    {
                        label: "Białko (min.)",
                        value: proteinRange,
                        onChange: (v: number) => setProteinRange(v),
                        max: 200,
                    },
                    {
                        label: "Tłuszcz (min.)",
                        value: fatRange,
                        onChange: (v: number) => setFatRange(v),
                        max: 200,
                    },
                    {
                        label: "Węglowodany (min.)",
                        value: carbsRange,
                        onChange: (v: number) => setCarbsRange(v),
                        max: 500,
                    },
                ].map((item, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm text-gray-700">
                                {item.label}
                            </label>
                            <input
                                type="number"
                                value={item.value}
                                onChange={(e) =>
                                    item.onChange(Number(e.target.value))
                                }
                                className="w-10 p-1 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <input
                            type="range"
                            min="0"
                            max={item.max}
                            value={item.value}
                            onChange={(e) =>
                                item.onChange(Number(e.target.value))
                            }
                            className="w-full"
                        />
                    </div>
                ))}

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Kalorie (zakres)
                    </h3>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="number"
                            name="minCalories"
                            value={minCalories}
                            onChange={handleCaloriesChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Minimalne kalorie"
                        />
                        <input
                            type="number"
                            name="maxCalories"
                            value={maxCalories}
                            onChange={handleCaloriesChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Maksymalne kalorie"
                        />
                    </div>
                </div>

                <MainBtn onClick={handleFilterApply}>Zastosuj filtry</MainBtn>
            </div>
        </div>
    );
}
