"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const BMIForm = () => {
    const [weight, setWeight] = useState<string>("70");
    const [height, setHeight] = useState<string>("175");
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [gender, setGender] = useState<string>("male");

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = parseFloat(height) / 100;
            const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
            setBmi(parseFloat(bmiValue.toFixed(2)));

            if (bmiValue < 18.5) setCategory("Niedowaga");
            else if (bmiValue < 24.9) setCategory("Prawidłowa waga");
            else if (bmiValue < 29.9) setCategory("Nadwaga");
            else setCategory("Otyłość");

            setErrorMessage(null);
        } else {
            setErrorMessage("Proszę wpisać wagę i wzrost!");
        }
    };

    // Ustal kolor tła na podstawie kategorii BMI
    const getBackgroundColor = () => {
        if (category === "Prawidłowa waga") return "bg-green-100";
        if (category === "Nadwaga") return "bg-yellow-100";
        if (category === "Otyłość") return "bg-red-100";
        return "bg-gray-100"; // Niedowaga lub brak wartości
    };

    return (
        <div className="p-6 bg-white rounded-lg">
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
                    className="w-full"
                />
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full p-2 border rounded-lg text-center"
                />
            </div>

            {/* Wzrost */}
            <div className="mb-6">
                <label className="block text-black text-lg font-medium mb-2">
                    Wzrost: {height} cm
                </label>
                <input
                    type="range"
                    min="100"
                    max="250"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full"
                />
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-2 border rounded-lg text-center"
                />
            </div>

            {/* Oblicz BMI */}
            <button
                onClick={calculateBMI}
                className="w-full p-4 bg-yellow-500 text-white rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-200"
            >
                Oblicz BMI
            </button>

            {/* Błąd */}
            {errorMessage && (
                <motion.div
                    className="mt-4 p-3 text-center text-red-600 font-semibold bg-red-100 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {errorMessage}
                </motion.div>
            )}

            {/* Wynik BMI */}
            {bmi !== null && !errorMessage && (
                <motion.div
                    className={`mt-6 text-center p-4 rounded-lg ${getBackgroundColor()}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <p className="text-xl text-black font-bold">
                        Twoje BMI wynosi: {bmi}
                    </p>
                    <p className="text-lg text-gray-700">{category}</p>
                </motion.div>
            )}
        </div>
    );
};
