"use client";

import ShareButton from "@/components/Buttons/ShareButton";
import Image from "next/image";
import { useState } from "react";

type SizeAndPrice = {
    size: string;
    price: number | string;
};

type LunchboxProductProps = {
    title: string;
    price: number;
    description: string;
    image: string | File | null; // Image can be a URL (string) or an uploaded file (File)
    additionalImages?: string[]; // Optional array of additional image URLs
    sizesAndPrices?: SizeAndPrice[]; // Optional array of SizeAndPrice objects
};

export function LunchboxProduct({
    title,
    price,
    image,
    description,
    additionalImages,
    sizesAndPrices = [], // Default empty array for sizes and prices
}: LunchboxProductProps) {
    const [selectedSizeAndPrice, setSelectedSizeAndPrice] =
        useState<SizeAndPrice | null>(
            sizesAndPrices?.length ? sizesAndPrices[0] : null
        );
    const [selectedImage, setSelectedImage] = useState<string | File | null>(
        image
    );
    const [hoverImage, setHoverImage] = useState<string | null>(null);

    const handleClickOutside = (e: React.MouseEvent) => {
        const imageContainer = e.target as HTMLElement;
        if (!imageContainer.closest(".image-container")) {
            setSelectedImage(image);
        }
    };

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
            onClick={handleClickOutside}
        >
            {/* Galeria zdjęć */}
            <div className="space-y-4 w-full lg:col-span-3">
                <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden image-container">
                    <Image
                        src={
                            hoverImage ||
                            (selectedImage instanceof File
                                ? URL.createObjectURL(selectedImage)
                                : selectedImage) ||
                            ""
                        }
                        alt={title}
                        fill
                        className="object-cover h-full w-full"
                    />
                </div>

                {(additionalImages?.length ?? 0) > 0 && (
                    <div className="flex gap-2 flex-wrap relative">
                        <Image
                            src={image as string}
                            alt={title}
                            width={80}
                            height={80}
                            className="object-cover rounded border cursor-pointer"
                            onClick={() => setSelectedImage(image as string)}
                            onMouseEnter={() => setHoverImage(image as string)}
                        />
                        {additionalImages?.map((img, i) => (
                            <Image
                                key={i}
                                src={img}
                                alt={`Dodatkowe zdjęcie ${i + 1}`}
                                width={80}
                                height={80}
                                className="object-cover rounded border cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                                onMouseEnter={() => setHoverImage(img)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Szczegóły produktu */}
            <div className="space-y-6 lg:col-span-2">
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-600">{description}</p>

                {sizesAndPrices.length > 0 && (
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-gray-700">
                                Rozmiar:
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
                    className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                    onClick={() => alert("Dodałeś do koszyka (symulacja)")}
                >
                    Kup teraz
                </button>
            </div>
        </div>
    );
}
