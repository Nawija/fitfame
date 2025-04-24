"use client";

import ShareButton from "@/components/Buttons/ShareButton";
import { useState } from "react";

type SizeAndPrice = {
    size: string;
    price: number | string;
};

type LunchboxProductProps = {
    title: string;
    price: number;
    image: string | File | null;
    additionalImages?: string[];
    sizesAndPrices?: SizeAndPrice[];
};

export function LunchboxProduct({
    title,
    price,
    image,
    additionalImages,
    sizesAndPrices = [],
}: LunchboxProductProps) {
    const [selectedSizeAndPrice, setSelectedSizeAndPrice] =
        useState<SizeAndPrice | null>(
            sizesAndPrices?.length ? sizesAndPrices[0] : null
        );

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

                {additionalImages?.length > 0 && (
                    <div className="flex gap-2 flex-wrap relative">
                        {additionalImages.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Dodatkowe zdjęcie ${i + 1}`}
                                className="w-20 h-20 object-cover rounded border"
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Szczegóły produktu */}
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-600">
                    Stylowy i praktyczny lunchbox do pracy, szkoły lub na
                    trening. Trzyma temperaturę i wygląda świetnie.
                </p>

                {sizesAndPrices.length > 0 && (
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-gray-700">
                                Rozmiar i cena
                            </h3>
                            <ShareButton title={title} />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {sizesAndPrices.map((item, i) => (
                                <button
                                    key={`${item.size}-${item.price}`}
                                    onClick={() =>
                                        setSelectedSizeAndPrice(item)
                                    }
                                    className={`px-4 py-2 border rounded-lg text-sm font-medium cursor-pointer ${
                                        selectedSizeAndPrice?.size === item.size
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-white text-gray-700 border-gray-300"
                                    }`}
                                >
                                    {item.size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="text-2xl font-bold text-blue-600">
                    {selectedSizeAndPrice
                        ? `${selectedSizeAndPrice.price} zł`
                        : `${price.toFixed(2)} zł`}
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
