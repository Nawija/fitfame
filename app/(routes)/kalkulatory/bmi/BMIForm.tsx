"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const BMIForm = () => {
    const [weight, setWeight] = useState("70");
    const [height, setHeight] = useState("175");
    const [gender, setGender] = useState("male");
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100;
        if (!w || !h) return setError("Proszę wpisać wagę i wzrost!");

        const bmiValue = +(w / (h * h)).toFixed(2);
        setBmi(bmiValue);
        setError(null);

        const thresholds =
            gender === "male" ? [18.5, 24.9, 29.9] : [18, 24.4, 29];
        const labels = ["Niedowaga", "Prawidłowa waga", "Nadwaga", "Otyłość"];

        setCategory(
            bmiValue < thresholds[0]
                ? labels[0]
                : bmiValue < thresholds[1]
                ? labels[1]
                : bmiValue < thresholds[2]
                ? labels[2]
                : labels[3]
        );
    };

    const categoryColors: { [key: string]: string } = {
        "Prawidłowa waga": "bg-green-100",
        Nadwaga: "bg-yellow-100",
        Otyłość: "bg-red-100",
    };

    const sliderColor =
        gender === "male" ? "accent-blue-500" : "accent-pink-500";

    const renderInput = (
        label: string,
        value: string,
        setValue: (v: string) => void,
        unit: string,
        min: string,
        max: string
    ) => (
        <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
                {label}: {value} {unit}
            </label>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`w-full ${sliderColor}`}
            />
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-2 border rounded-lg text-center"
            />
        </div>
    );

    return (
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-50 w-full">
            <div className="flex flex-col gap-6">
                {/* Gender Buttons */}
                <div className="flex justify-center gap-4 mb-4">
                    {["male", "female"].map((g) => (
                        <button
                            key={g}
                            className={`p-2 px-4 rounded-lg cursor-pointer ${
                                gender === g
                                    ? g === "male"
                                        ? "bg-blue-500 text-white"
                                        : "bg-pink-500 text-white"
                                    : "bg-gray-200"
                            }`}
                            onClick={() => setGender(g)}
                        >
                            {g === "male" ? "Mężczyzna" : "Kobieta"}
                        </button>
                    ))}
                </div>

                {/* Weight & Height Inputs */}
                {renderInput("Waga", weight, setWeight, "kg", "30", "200")}
                {renderInput("Wzrost", height, setHeight, "cm", "100", "250")}

                {/* Calculate Button */}
                <button
                    onClick={calculateBMI}
                    className="w-full p-4 bg-yellow-500 text-white rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-200"
                >
                    Oblicz BMI
                </button>

                {/* Error */}
                {error && (
                    <motion.div
                        className="mt-4 p-3 text-center text-red-600 font-semibold bg-red-100 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {error}
                    </motion.div>
                )}

                {/* Result */}
                {bmi !== null && !error && (
                    <motion.div
                        className={`mt-6 text-center p-4 rounded-lg ${
                            categoryColors[category!] || "bg-gray-100"
                        }`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <p className="text-xl font-bold">
                            Twoje BMI wynosi: {bmi}
                        </p>
                        <p className="text-lg text-gray-700">{category}</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
