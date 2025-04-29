"use client";

import ShareButton from "@/components/Buttons/ShareButton";
import { AddToCartButton } from "@/components/Cart/AddToCartButton";
import Shimmer from "@/components/Shimmer";
import Image from "next/image";
import { useState } from "react";

type SizeAndPrice = {
    size: string;
    price: number;
};

type LunchboxProductProps = {
    title: string;
    price: number;
    slug: string; 
    description: string;
    image: string | File | null;
    additionalImages?: string[];
    sizesAndPrices?: SizeAndPrice[];
    content?: string;
};

export function LunchboxProduct({
    title,
    price,
    slug,
    image,
    description,
    additionalImages,
    sizesAndPrices = [],
    content,
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
    const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
    const tags = content?.split(",").filter(Boolean) || [];

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
            onClick={handleClickOutside}
        >
            {/* Galeria zdjęć */}
            <div className="space-y-4 w-full lg:col-span-3">
                <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden image-container">
                    {isImageLoading && (
                        <Shimmer imageLoaded={!isImageLoading} />
                    )}

                    <Image
                        src={
                            hoverImage ||
                            (selectedImage instanceof File
                                ? URL.createObjectURL(selectedImage)
                                : selectedImage) ||
                            ""
                        }
                        alt={title}
                        onLoadingComplete={() => setIsImageLoading(false)}
                        fill
                        className="object-cover h-full w-full"
                    />
                </div>

                {(additionalImages?.length ?? 0) > 0 && (
                    <div className="w-full overflow-x-scroll pb-2">
                        <div className="flex gap-2 relative w-full">
                            <Image
                                src={image as string}
                                alt={title}
                                width={80}
                                height={80}
                                className="object-cover rounded border cursor-pointer"
                                onClick={() =>
                                    setSelectedImage(image as string)
                                }
                                onMouseEnter={() =>
                                    setHoverImage(image as string)
                                }
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
                            {sizesAndPrices.map((item) => (
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

                <div className="text-2xl font-bold text-green-600">
                    {selectedSizeAndPrice
                        ? `${selectedSizeAndPrice.price} zł`
                        : `${price.toFixed(2)} zł`}
                </div>

                <button
                    className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                    onClick={() => alert("Kupujesz (symulacja)")}
                >
                    Kup teraz
                </button>
                <AddToCartButton
                    produkt={{
                        title,
                        slug,
                        category: "TShirt", // lub dynamicznie jeśli masz
                        image: typeof image === "string" ? image : "",
                        additionalImages: additionalImages ?? [],
                        sizesAndPrices: sizesAndPrices ?? [],
                        price: selectedSizeAndPrice
                            ? Number(selectedSizeAndPrice.price)
                            : price,
                        description,
                        content: content ?? "",
                    }}
                />

                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                itemProp="keywords"
                                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
