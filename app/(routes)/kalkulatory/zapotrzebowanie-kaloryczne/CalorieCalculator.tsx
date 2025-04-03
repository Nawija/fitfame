"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const CalorieCalculator = () => {
    const [weight, setWeight] = useState<string>("70");
    const [height, setHeight] = useState<string>("175");
    const [age, setAge] = useState<string>("25");
    const [gender, setGender] = useState<string>("male");
    const [activity, setActivity] = useState<string>("1.2");
    const [bmr, setBmr] = useState<number | null>(null);
    const [tdee, setTdee] = useState<number | null>(null);

    const calculateCalories = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const a = parseFloat(age);
        const act = parseFloat(activity);

        if (!w || !h || !a) return;

        let bmrValue = 0;
        if (gender === "male") {
            bmrValue = 88.36 + (13.4 * w) + (4.8 * h) - (5.7 * a);
        } else {
            bmrValue = 447.6 + (9.2 * w) + (3.1 * h) - (4.3 * a);
        }

        const tdeeValue = bmrValue * act;
        setBmr(parseFloat(bmrValue.toFixed(2)));
        setTdee(parseFloat(tdeeValue.toFixed(2)));
    };

    const sliderColor = gender === "male" ? "accent-blue-500" : "accent-pink-500";

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            {/* Wybór płci */}
            <div className="mb-4 flex justify-center gap-4">
                <button
                    className={`p-2 px-4 rounded-lg ${
                        gender === "male" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setGender("male")}
                >
                    Mężczyzna
                </button>
                <button
                    className={`p-2 px-4 rounded-lg ${
                        gender === "female" ? "bg-pink-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setGender("female")}
                >
                    Kobieta
                </button>
            </div>

            {/* Waga */}
            <div className="mb-4">
                <label className="block text-black text-lg font-medium mb-2">
                    Waga: {weight} kg
                </label>
                <input
                    type="range"
                    min="30"
                    max="200"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className={`w-full ${sliderColor}`}
                />
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full p-2 border rounded-lg text-center"
                />
            </div>

            {/* Wzrost */}
            <div className="mb-4">
                <label className="block text-black text-lg font-medium mb-2">
                    Wzrost: {height} cm
                </label>
                <input
                    type="range"
                    min="100"
                    max="250"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className={`w-full ${sliderColor}`}
                />
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-2 border rounded-lg text-center"
                />
            </div>

            {/* Wiek */}
            <div className="mb-4">
                <label className="block text-black text-lg font-medium mb-2">
                    Wiek: {age} lat
                </label>
                <input
                    type="range"
                    min="10"
                    max="100"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full accent-gray-500"
                />
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full p-2 border rounded-lg text-center"
                />
            </div>

            {/* Poziom aktywności */}
            <div className="mb-6">
                <label className="block text-black text-lg font-medium mb-2">
                    Poziom aktywności
                </label>
                <select
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                    <option value="1.2">Siedzący tryb życia</option>
                    <option value="1.375">Lekka aktywność (1-3 dni/tyg.)</option>
                    <option value="1.55">Średnia aktywność (3-5 dni/tyg.)</option>
                    <option value="1.725">Wysoka aktywność (6-7 dni/tyg.)</option>
                    <option value="1.9">Bardzo wysoka aktywność</option>
                </select>
            </div>

            {/* Oblicz TDEE */}
            <button
                onClick={calculateCalories}
                className="w-full p-4 bg-yellow-500 text-white rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-200"
            >
                Oblicz zapotrzebowanie kaloryczne
            </button>

            {/* Wynik */}
            {bmr !== null && tdee !== null && (
                <motion.div
                    className="mt-6 text-center p-4 bg-green-100 rounded-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <p className="text-xl text-black font-bold">
                        Twoje BMR: {bmr} kcal
                    </p>
                    <p className="text-xl text-black font-bold">
                        Twoje TDEE: {tdee} kcal
                    </p>
                </motion.div>
            )}
        </div>
    );
};
