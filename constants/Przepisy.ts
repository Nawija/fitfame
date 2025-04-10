type Recipe = {
    id: number; // lub number, zależnie od tego, jak identyfikatory są reprezentowane
    slug: string;
    title: string;
    category: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    time: string;
    level: string;
    description: string;
    image: string;
    ingredients: string[];
    steps: string[];
};

export const recipesData: Recipe[] = [
    {
        id: 1,
        slug: "kurczak-z-ryzem-i-warzywami",
        title: "Kurczak z ryżem i warzywami",
        image: "/images/przepisy/krewetki.jpg",
        category: "Masa",
        calories: 620,
        protein: 45,
        fat: 12,
        carbs: 70,
        time: "30 min",
        level: "łatwe",
        description:
            "Syty posiłek z kurczakiem, ryżem i warzywami. Idealny na budowę masy mięśniowej.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "Brokuł",
            "Papryka",
            "Marchewka",
            "Oliwa z oliwek",
            "Sól, pieprz, curry",
            "Sos sojowy (opcjonalnie)",
        ],
        steps: [
            "Ugotuj 100 g ryżu według instrukcji na opakowaniu.",
            "Na patelni podsmaż 200 g pokrojonej piersi z kurczaka na oliwie.",
            "Dodaj ulubione warzywa (np. brokuł, paprykę, marchewkę) i smaż razem przez 5 7 minut.",
            "Dodaj przyprawy (sól, pieprz, curry) i wymieszaj z ugotowanym ryżem.",
            "Podawaj na ciepło. Można dodać odrobinę sosu sojowego dla smaku.",
        ],
    },
    {
        id: 2,
        slug: "salatka-z-tunczykiem-i-jajkiem",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/krewetki.jpg",
        category: "Rzeźba",
        calories: 420,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "15 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "Brokuł",
            "Papryka",
            "Marchewka",
            "Oliwa z oliwek",
            "Sól, pieprz, curry",
            "Sos sojowy (opcjonalnie)",
        ],
        steps: [
            "W misce połącz miks sałat, pomidorki koktajlowe i plasterki ogórka.",
            "Dodaj 1 puszkę tuńczyka w sosie własnym oraz 2 ugotowane na twardo jajka pokrojone w ćwiartki.",
            "Skrop oliwą z oliwek i dopraw solą, pieprzem oraz oregano.",
            "Wymieszaj całość delikatnie.",
            "Opcjonalnie: dodaj kilka oliwek i skrop cytryną.",
        ],
    },
    {
        id: 3,
        slug: "salatka-z-tunczykiem",
        title: "Sałatka z tuńczykiem",
        image: "/images/przepisy/krewetki.jpg",
        category: "Rzeźba",
        calories: 420,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "15 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "Brokuł",
            "Papryka",
            "Marchewka",
            "Oliwa z oliwek",
            "Sól, pieprz, curry",
            "Sos sojowy (opcjonalnie)",
        ],
        steps: [
            "W misce połącz miks sałat, pomidorki koktajlowe i plasterki ogórka.",
            "Dodaj 1 puszkę tuńczyka w sosie własnym oraz 2 ugotowane na twardo jajka pokrojone w ćwiartki.",
            "Skrop oliwą z oliwek i dopraw solą, pieprzem oraz oregano.",
            "Wymieszaj całość delikatnie.",
            "Opcjonalnie: dodaj kilka oliwek i skrop cytryną.",
        ],
    },
    {
        id: 4,
        slug: "omlet-bialkowy",
        title: "Omlet białkowy z płatkami owsianymi",
        image: "/images/przepisy/ham.jpg",
        category: "Niskokaloryczne",
        calories: 360,
        protein: 30,
        fat: 10,
        carbs: 30,
        time: "20 min",
        level: "łatwe",
        description:
            "Szybkie i pożywne śniadanie z dużą ilością białka i złożonych węglowodanów.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1x Brokuł",
            "3x Papryka",
            "4x Marchewka",
            "5g Oliwa z oliwek",
            "Sól, pieprz, curry (do smaku)",
            "Sos sojowy (opcjonalnie)",
        ],
        steps: [
            "W misce wymieszaj 4 białka jaj, 1 całe jajko i 40 g płatków owsianych.",
            "Dodaj łyżeczkę cynamonu i opcjonalnie trochę słodzika lub banana.",
            "Na patelni rozgrzej odrobinę oleju kokosowego i wlej masę.",
            "Smaż na małym ogniu pod przykryciem przez 5 7 minut.",
            "Podawaj z jogurtem naturalnym i owocami (np. borówki, truskawki).",
        ],
    },
];
