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
