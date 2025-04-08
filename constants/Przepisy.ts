interface Recipe {
    id: number;
    title: string;
    image: string;
    category: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
}

export const recipesData: Recipe[] = [
    {
        id: 1,
        title: "Kurczak z warzywami",
        image: "/images/przepisy/krewetki.jpg",
        category: "Kurczak Masa",
        calories: 750,
        protein: 35,
        fat: 10,
        carbs: 20,
    },
    {
        id: 2,
        title: "Bowl na masę",
        image: "/images/przepisy/pancakes.jpg",
        category: "Masa",
        calories: 900,
        protein: 40,
        fat: 30,
        carbs: 80,
    },
    {
        id: 3,
        title: "Sałatka białkowa",
        image: "/images/przepisy/pancakes.jpg",
        category: "Rzeźba",
        calories: 300,
        protein: 20,
        fat: 12,
        carbs: 15,
    },
    {
        id: 4,
        title: "Zupa pomidorowa",
        image: "/images/przepisy/krewetki.jpg",
        category: "Niskokaloryczne",
        calories: 400,
        protein: 5,
        fat: 3,
        carbs: 25,
    },
    {
        id: 5,
        title: "Ciasteczka białkowe",
        image: "/images/przepisy/ciastko.jpg",
        category: "Niskokaloryczne",
        calories: 150,
        protein: 35,
        fat: 3,
        carbs: 33,
    },
    {
        id: 6,
        title: "Fit burgery",
        image: "/images/przepisy/ham.jpg",
        category: "Masa",
        calories: 1150,
        protein: 65,
        fat: 25,
        carbs: 75,
    },
];
