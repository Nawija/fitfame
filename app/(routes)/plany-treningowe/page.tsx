"use client";
import { useState } from "react";

export default function PlanyTreningowe() {
    const [filter, setFilter] = useState<string>("all");

    const plans = [
        // Masa mięśniowa
        {
            id: 1,
            title: "Plan 1: Masa mięśniowa - 2x w tyg.",
            category: "Masa mięśniowa",
            image: "https://img.freepik.com/darmowe-zdjecie/mlody-sprawnosc-fizyczna-mezczyzna-w-studiu_7502-5008.jpg?ga=GA1.1.1764834424.1735931185&semt=ais_hybrid&w=740",
            description:
                "Plan dla osób chcących zbudować masę mięśniową. Ćwiczenia 2 razy w tygodniu.",
            duration: "8 tygodni",
            level: "Początkujący",
        },
        {
            id: 2,
            title: "Plan 2: Masa mięśniowa - 3x w tyg.",
            category: "Masa mięśniowa",
            image: "https://img.freepik.com/darmowe-zdjecie/mlody-sprawnosc-fizyczna-mezczyzna-w-studiu_7502-5008.jpg?ga=GA1.1.1764834424.1735931185&semt=ais_hybrid&w=740",
            description:
                "Plan dla średniozaawansowanych, z większą częstotliwością treningów.",
            duration: "8 tygodni",
            level: "Średniozaawansowany",
        },
        {
            id: 3,
            title: "Plan 3: Masa mięśniowa - 4x w tyg.",
            category: "Masa mięśniowa",
            image: "https://img.freepik.com/darmowe-zdjecie/mlody-sprawnosc-fizyczna-mezczyzna-w-studiu_7502-5008.jpg?ga=GA1.1.1764834424.1735931185&semt=ais_hybrid&w=740",
            description:
                "Zaawansowany plan budowy masy mięśniowej z intensywniejszymi treningami.",
            duration: "10 tygodni",
            level: "Zaawansowany",
        },
        // Siła
        {
            id: 4,
            title: "Plan 4: Siła - 3x w tyg.",
            category: "Siła",
            image: "https://img.freepik.com/darmowe-zdjecie/niski-kat-widzenia-nierozpoznawalnego-muskularnego-mezczyzny-przygotowujacego-sie-do-podnoszenia-sztangi-w-klubie-fitness_637285-2497.jpg?ga=GA1.1.1764834424.1735931185&semt=ais_hybrid&w=740",
            description:
                "Plan na zwiększenie siły z ćwiczeniami 3 razy w tygodniu.",
            duration: "10 tygodni",
            level: "Początkujący",
        },
        {
            id: 5,
            title: "Plan 5: Siła - 4x w tyg.",
            category: "Siła",
            image: "https://img.freepik.com/darmowe-zdjecie/niski-kat-widzenia-nierozpoznawalnego-muskularnego-mezczyzny-przygotowujacego-sie-do-podnoszenia-sztangi-w-klubie-fitness_637285-2497.jpg?ga=GA1.1.1764834424.1735931185&semt=ais_hybrid&w=740",
            description:
                "Plan dla średniozaawansowanych. Większa intensywność treningów siłowych.",
            duration: "12 tygodni",
            level: "Średniozaawansowany",
        },
        {
            id: 6,
            title: "Plan 6: Siła - 5x w tyg.",
            category: "Siła",
            image: "https://img.freepik.com/darmowe-zdjecie/niski-kat-widzenia-nierozpoznawalnego-muskularnego-mezczyzny-przygotowujacego-sie-do-podnoszenia-sztangi-w-klubie-fitness_637285-2497.jpg?ga=GA1.1.1764834424.1735931185&semt=ais_hybrid&w=740",
            description:
                "Plan zaawansowany, zwiększający siłę z treningami 5 razy w tygodniu.",
            duration: "14 tygodni",
            level: "Zaawansowany",
        },
        // Redukcja
        {
            id: 7,
            title: "Plan 7: Redukcja - 3x w tyg.",
            category: "Redukcja",
            image: "https://img.freepik.com/darmowe-zdjecie/mlody-czlowiek-cwiczacy-na-silowni-w-kulturystyce_23-2149552295.jpg?ga=GA1.1.1764834424.1735931185&semt=ais_hybrid&w=740",
            description:
                "Plan na redukcję tłuszczu z ćwiczeniami 3 razy w tygodniu.",
            duration: "12 tygodni",
            level: "Początkujący",
        },
        {
            id: 8,
            title: "Plan 8: Redukcja - 4x w tyg.",
            category: "Redukcja",
            image: "https://img.freepik.com/darmowe-zdjecie/mlody-czlowiek-cwiczacy-na-silowni-w-kulturystyce_23-2149552295.jpg?ga=GA1.1.1764834424.1735931185&semt=ais_hybrid&w=740",
            description:
                "Plan dla średniozaawansowanych na efektywną redukcję.",
            duration: "12 tygodni",
            level: "Średniozaawansowany",
        },
        {
            id: 9,
            title: "Plan 9: Redukcja - 5x w tyg.",
            category: "Redukcja",
            image: "https://img.freepik.com/darmowe-zdjecie/mlody-czlowiek-cwiczacy-na-silowni-w-kulturystyce_23-2149552295.jpg?ga=GA1.1.1764834424.1735931185&semt=ais_hybrid&w=740",
            description: "Zaawansowany plan na szybką redukcję tłuszczu.",
            duration: "14 tygodni",
            level: "Zaawansowany",
        },
    ];

    // Filtrowanie danych na podstawie wybranego filtra
    const filteredPlans =
        filter === "all"
            ? plans
            : plans.filter((plan) => plan.category === filter);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 anim-opacity">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Wybierz plan treningowy
                </h1>
                <p className="text-lg text-gray-500">
                    Wybierz plan dopasowany do swoich celów!
                </p>
            </div>

            {/* Filtrowanie */}
            <div className="flex justify-center gap-6 mb-10">
                <button
                    onClick={() => setFilter("Masa mięśniowa")}
                    className="bg-blue-600 text-white text-sm font-bold cursor-pointer px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Masa mięśniowa
                </button>
                <button
                    onClick={() => setFilter("Siła")}
                    className="bg-red-600 text-white text-sm font-bold cursor-pointer px-6 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Siła
                </button>
                <button
                    onClick={() => setFilter("Redukcja")}
                    className="bg-green-600 text-white text-sm font-bold cursor-pointer px-6 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Redukcja
                </button>
                <button
                    onClick={() => setFilter("all")}
                    className="bg-gray-600 text-white text-sm font-bold cursor-pointer px-6 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                    Wszystkie
                </button>
            </div>

            {/* Grid z planami */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
                    >
                        <img
                            src={plan.image}
                            alt={plan.title}
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                {plan.title}
                            </h2>
                            <p className="text-gray-600 mb-4">
                                {plan.description}
                            </p>
                            <p className="text-gray-500 mb-4">
                                Czas trwania: {plan.duration}
                            </p>
                            <p className="text-gray-500 mb-4">
                                Poziom: {plan.level}
                            </p>
                            <div className="flex justify-between items-center">
                                <button
                                    className={`text-white px-4 py-2 rounded-lg text-sm font-bold cursor-pointer hover:opacity-80 transition ${
                                        plan.category === "Masa mięśniowa"
                                            ? "bg-blue-600"
                                            : plan.category === "Siła"
                                            ? "bg-red-600"
                                            : plan.category === "Redukcja"
                                            ? "bg-green-600"
                                            : "bg-gray-600"
                                    }`}
                                >
                                    Zaczynamy!
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
