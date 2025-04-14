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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na-grubym-proteinowe",
        title: "Bulki do kebaba na grubym proteinowe",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
    },{
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
        slug: "bulki-do-kebaba-na",
        title: "Bulki do kebaba na grubym",
        image: "/images/przepisy/bulki-do-kebaba-na-grubym.jpg",
        category: "Niskokaloryczne",
        calories: 230,
        protein: 22,
        fat: 5,
        carbs: 22,
        time: "90 min (z wyrastaniem)",
        level: "łatwe",
        description:
            "Mięciutkie, puszyste i bogate w białko te bułki do kebaba to idealna alternatywa dla sklepowych wypieków! Świetnie sprawdzą się nie tylko do domowego kebaba, ale też jako baza do burgerów czy kanapek na wynos. Dzięki dodatkowi mąki owsianej i odżywki białkowej dostarczają solidnej dawki protein, a jednocześnie są lekkostrawne i sycące. Idealne dla osób na redukcji, masie lub po prostu dbających o zdrową dietę raz spróbujesz, i nie wrócisz już do zwykłych bułek!",
        ingredients: [
            "200g mąki pszennej typu 650",
            "100g mąki owsianej",
            "40g odżywki białkowej neutralnej WPC",
            "7g suchych drożdży (1 paczka) lub 20g świeżych",
            "200 ml letniej wody",
            "1 jajko",
            "1 łyżka oliwy z oliwek",
            "1 łyżeczka cukru",
            "5g soli",
        ],
        steps: [
            {
                title: "Drożdże aktywuj:",
                description: [
                    "Wymieszaj drożdże z 100 ml letniej wody i cukrem. ",
                    "Odstaw na 10 minut, aż zacznie się pienić.",
                ],
            },
            {
                title: "Zagnieć ciasto:",
                description: [
                    "Do dużej miski wsyp mąki, odżywkę białkową, sól, dodaj jajko, oliwę i zaczyn drożdżowy.",
                    "Wyrabiaj ciasto przez ok. 10 minut aż będzie gładkie.",
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
