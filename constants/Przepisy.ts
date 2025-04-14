export type Recipe = {
    id?: number;
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
    steps: {
        title: string;
        description: string[];
    }[];
};

export const recipesData = [
    {
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "pancakes",
        title: "Sałatka pancakes na słodko z malinami z jajkiem",
        image: "/images/przepisy/pancakes.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemf",
        title: "Sałatka z tuńczykiem",
        image: "/images/przepisy/ciastko.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemff",
        title: "Proteinowe bułki",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "pancakes",
        title: "Sałatka pancakes na słodko z malinami z jajkiem",
        image: "/images/przepisy/pancakes.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemf",
        title: "Sałatka z tuńczykiem",
        image: "/images/przepisy/ciastko.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-k",
        title: "Proteinowe buł",
        image: "/images/przepisy/ham.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiem",
        title: "Sałatka z t i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "pancakes",
        title: "Sałatka pancakes na słodko z malinami z jajkiem",
        image: "/images/przepisy/pancakes.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemf",
        title: "Sałatka z tuńczykiem",
        image: "/images/przepisy/ciastko.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemff",
        title: "Proteinowe bułki",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },

    {
        slug: "pancakes",
        title: "Sałatka pancakes na słodko z malinami z jajkiem",
        image: "/images/przepisy/pancakes.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemf",
        title: "Sałatka z tuńczykiem",
        image: "/images/przepisy/ciastko.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemff",
        title: "Proteinowe bułki",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
 
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },

    {
        slug: "salatka-z-tunczykiemff",
        title: "Proteinowe bułki",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "pancakes",
        title: "Sałatka pancakes na słodko z malinami z jajkiem",
        image: "/images/przepisy/pancakes.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemf",
        title: "Sałatka z tuńczykiem",
        image: "/images/przepisy/ciastko.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemff",
        title: "Proteinowe bułki",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "pancakes",
        title: "Sałatka pancakes na słodko z malinami z jajkiem",
        image: "/images/przepisy/pancakes.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemf",
        title: "Sałatka z tuńczykiem",
        image: "/images/przepisy/ciastko.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemff",
        title: "Proteinowe bułki",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "pancakes",
        title: "Sałatka pancakes na słodko z malinami z jajkiem",
        image: "/images/przepisy/pancakes.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },

    {
        slug: "salatka-z-tunczykiemff",
        title: "Proteinowe bułki",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "pancakes",
        title: "Sałatka pancakes na słodko z malinami z jajkiem",
        image: "/images/przepisy/pancakes.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemf",
        title: "Sałatka z tuńczykiem",
        image: "/images/przepisy/ciastko.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiemff",
        title: "Proteinowe bułki",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "pancakes",
        title: "Sałatka pancakes na słodko z malinami z jajkiem",
        image: "/images/przepisy/pancakes.jpg",
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
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
    {
        slug: "salatka-z-tunczykiem-i-jajkiemxx",
        title: "Sałatka z tuńczykiem i jajkiem",
        image: "/images/przepisy/ham.jpg",
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
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },

    {
        slug: "salatka-z-tunczykiemff",
        title: "Proteinowe bułki",
        image: "/images/conor.jpg",
        category: "Rzeźba",
        calories: 120,
        protein: 35,
        fat: 22,
        carbs: 10,
        time: "90 min",
        level: "łatwe",
        description:
            "Lekka sałatka wysokobiałkowa, idealna na redukcję lub jako lunch do pracy.",
        ingredients: [
            "100 g ryżu",
            "200 g piersi z kurczaka",
            "1 Brokuł",
            "1 Papryka",
            "1 Marchewka",
            "5ml Oliwa z oliwek",
            "Sól, pieprz, curry",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstanić.",
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy. Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
                ],
            },
            {
                title: "Pozostaw do wyrośnięcia:",
                description: [
                    "Przykryj miskę ściereczką i odstaw na 1 godzinę w ciepłe miejsce.",
                ],
            },
            {
                title: "Uformuj bułki:",
                description: [
                    "Podziel ciasto na 4 części, uformuj bułki i ułóż na blasze wyłożonej papierem.",
                ],
            },
            {
                title: "Piecz:",
                description: [
                    "Piecz w 200°C przez 18 22 minuty, aż będą rumiane i wypieczone.",
                ],
            },
        ],
    },
];
