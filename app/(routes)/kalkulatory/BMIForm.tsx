"use client";

import React, { useState } from "react";

export const BMIForm = () => {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100; // Convert height to meters
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(parseFloat(bmiValue.toFixed(2)));

            if (bmiValue < 18.5) setCategory("Niedowaga");
            else if (bmiValue < 24.9) setCategory("Prawidłowa waga");
            else if (bmiValue < 29.9) setCategory("Nadwaga");
            else setCategory("Otyłość");

            setErrorMessage(null); // Clear error message if calculation succeeds
        } else {
            setErrorMessage("Proszę wpisać wagę i wzrost!");
        }
    };

    return (
        <div>
            <div className="mb-4">
                <label
                    htmlFor="weight"
                    className="block text-black text-lg font-medium mb-2"
                >
                    Waga (kg)
                </label>
                <input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Enter your weight"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="height"
                    className="block text-black text-lg font-medium mb-2"
                >
                    Wzrost (cm)
                </label>
                <input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your height"
                />
            </div>

            <button
                onClick={calculateBMI}
                className="w-full p-4 bg-yellow-500 text-white rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-200 cursor-pointer"
            >
                Oblicz BMI
            </button>

            {errorMessage && (
                <div className="mt-4 p-3 text-center text-red-600 font-semibold bg-red-100 rounded-lg animate-pulse">
                    {errorMessage}
                </div>
            )}

            {bmi !== null && !errorMessage && (
                <div className="mt-6 text-center">
                    <p className="text-xl text-black font-bold mb-2">
                        Twoje BMI wynosi: {bmi}
                    </p>
                    <p className="text-lg text-gray-700">{category}</p>
                </div>
            )}
        </div>
    );
};
