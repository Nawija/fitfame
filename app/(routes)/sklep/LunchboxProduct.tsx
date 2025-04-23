"use client";

import Image from "next/image";
import { useState } from "react";
const sizes = ["500ml", "800ml", "1000ml", "1500ml"];

export function LunchboxProduct() {
    const [selectedSize, setSelectedSize] = useState("500ml");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Galeria zdjęć */}
            <div className="space-y-4">
                <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                        src="/lunchbox1.jpg"
                        alt="Lunchbox"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex gap-4">
                    {["/lunchbox1.jpg", "/lunchbox2.jpg", "/lunchbox3.jpg"].map(
                        (img, i) => (
                            <div
                                key={i}
                                className="relative w-1/3 aspect-square bg-gray-100 rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={img}
                                    alt={`Lunchbox ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Szczegóły produktu */}
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Lunchbox premium
                </h1>
                <p className="text-gray-600">
                    Stylowy i praktyczny lunchbox do pracy, szkoły lub na
                    trening. Trzyma temperaturę i wygląda świetnie.
                </p>

                {/* Rozmiary */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        Rozmiar
                    </h3>
                    <div className="flex gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                                    selectedSize === size
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-300"
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cena */}
                <div className="text-2xl font-bold text-blue-600">49,99 zł</div>

                {/* Przycisk */}
                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                    onClick={() => alert("Dodałeś do koszyka (symulacja)")}
                >
                    Kup teraz
                </button>
            </div>
        </div>
    );
}
