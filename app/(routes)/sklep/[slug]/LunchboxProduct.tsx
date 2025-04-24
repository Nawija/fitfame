"use client";

import ShareButton from "@/components/Buttons/ShareButton";
import { useState } from "react";

type LunchboxProductProps = {
    title: string;
    price: number;
    image: string | File | null;
    additionalImages?: string[]; // ← dodaj to
};

const sizes = ["500ml", "800ml", "1000ml", "1500ml"];

export function LunchboxProduct({
    title,
    price,
    image,
    additionalImages,
}: LunchboxProductProps) {
    const [selectedSize, setSelectedSize] = useState("500ml");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Galeria zdjęć */}
            <div className="space-y-4">
                <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src={
                            image
                                ? image instanceof File
                                    ? URL.createObjectURL(image)
                                    : image
                                : undefined
                        }
                        alt={title}
                        className="object-cover h-full w-full"
                    />
                </div>

                {Array.isArray(additionalImages) &&
                    additionalImages.length > 0 && (
                        <div className="flex gap-2 flex-wrap relative">
                            {additionalImages?.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`Dodatkowe zdjęcie ${i + 1}`}
                                    className="w-20 h-20 object-cover rounded border"
                                />
                            ))}
                        </div>
                    )}

                {/* Galeria miniatur można pominąć lub dostosować jeśli chcesz tylko 1 zdjęcie */}
            </div>

            {/* Szczegóły produktu */}
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-600">
                    Stylowy i praktyczny lunchbox do pracy, szkoły lub na
                    trening. Trzyma temperaturę i wygląda świetnie.
                </p>

                <div>
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Rozmiar
                        </h3>
                        <ShareButton title={title} />
                    </div>
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

                <div className="text-2xl font-bold text-blue-600">
                    {price.toFixed(2)} zł
                </div>

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
