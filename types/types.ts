export type MenuBurgerProps = {
    handleShowMenu: () => void;
    showMenu: boolean;
};
export type ClassNameProps = {
    className: string;
};

export type SearchProps = {
    id: string;
    img: string;
    title: string;
    price: number;
    prevPrice: number;
};

export type Recipe = {
    title: string;
    slug: string;
    category: string;
    image: string;
    time: string;
    level: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    description: string;
    ingredients: string[];
    steps: { title: string; description: string[] }[];
    content: string;
};

export interface FilterContentProps {
    searchKeywords: string;
    setSearchKeywords: React.Dispatch<React.SetStateAction<string>>;
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    proteinRange: number;
    setProteinRange: React.Dispatch<React.SetStateAction<number>>;
    fatRange: number;
    setFatRange: React.Dispatch<React.SetStateAction<number>>;
    carbsRange: number;
    setCarbsRange: React.Dispatch<React.SetStateAction<number>>;
    minCalories: number;
    setMinCalories: React.Dispatch<React.SetStateAction<number>>;
    maxCalories: number;
    setMaxCalories: React.Dispatch<React.SetStateAction<number>>;
    clearSearch: () => void;
    clearAllFilters: () => void;
}

interface Step {
    title: string;
    description: string[];
}

export interface FormState {
    image: File | string | null;
    title: string;
    slug: string;
    category: "all" | "Kurczak" | "Masa" | "Rzeźba" | "Niskokaloryczne";
    level: "Łatwy" | "Średni" | "Trudny";
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    time: string;
    description: string;
    content: string;
    ingredients: string[];
    steps: Step[];
}
export interface FormRecipePage {
    image: File | null;
    title: string;
    slug: string;
    category: "all" | "Kurczak" | "Masa" | "Rzeźba" | "Niskokaloryczne";
    level: "Łatwy" | "Średni" | "Trudny";
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    time: string;
    description: string;
    content: string;
    ingredients: string[];
    steps: Step[];
}
