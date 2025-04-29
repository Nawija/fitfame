"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "@/types/types";
import { ProductCardFlex } from "@/components/Porducts/ProductCardFlex";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
    products: Product[];
}

export function ProductSlider({ products }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        const container = scrollRef.current;
        if (!container) return;
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
            container.scrollLeft + container.offsetWidth < container.scrollWidth
        );
    };

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollAmount = container.offsetWidth / 2;
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        checkScroll();
        container.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            container.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    return (
        <div className="relative w-full">
            {canScrollLeft && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-stone-400 shadow-2xl hover:bg-stone-500 transition-colors cursor-pointer p-2 rounded-full"
                    aria-label="Przewiń w lewo"
                >
                    <FaArrowLeft className="w-4 h-4 text-white" />
                </button>
            )}

            <div
                ref={scrollRef}
                className="w-full overflow-x-auto py-4 scrollbar-hide"
            >
                <div className="w-max flex items-stretch space-x-3">
                    {products.slice(0, 10).map((produkt) => (
                        <ProductCardFlex key={produkt.slug} produkt={produkt} />
                    ))}
                </div>
            </div>

            {canScrollRight && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-stone-400 shadow-2xl hover:bg-stone-500 transition-colors cursor-pointer p-2 rounded-full"
                    aria-label="Przewiń w prawo"
                >
                    <FaArrowRight className="w-4 h-4 text-white" />
                </button>
            )}
        </div>
    );
}
