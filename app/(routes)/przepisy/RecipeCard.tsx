"use client";

import { useState, useRef, useEffect } from "react";
import { SecondBtn } from "@/components/Buttons/SecondBtn";
import { IoTime } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/types/types";
import Shimmer from "@/components/Shimmer";

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "100px",
                threshold: 0.1,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <Link
            href={`/przepisy/${recipe.slug}`}
            className="flex items-stretch group w-full"
        >
            <div
                ref={cardRef}
                className="bg-white group p-2 rounded-lg shadow-lg hover:shadow-xl transition-all transform text-center flex flex-col items-center justify-between w-full"
            >
                <div className="w-full">
                    <div className="relative w-full">
                        <div className="relative w-full h-44 object-cover rounded-md mb-3 overflow-hidden">
                            <Shimmer imageLoaded={imageLoaded} />

                            {isVisible && (
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    quality={80}
                                    fill
                                    onLoadingComplete={() =>
                                        setImageLoaded(true)
                                    }
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[107%]"
                                />
                            )}
                        </div>

                        <div className="absolute p-2 text-sm font-semibold -bottom-1 -right-1 bg-white rounded-lg text-yellow-700 flex items-center justify-center">
                            <IoTime className="mr-1" />
                            <p>{recipe.time}</p>
                        </div>
                    </div>

                    <h3 className="text-lg px-1 font-semibold text-gray-800 mb-2">
                        {recipe.title.charAt(0).toUpperCase() +
                            recipe.title.slice(1).toLowerCase()}
                    </h3>
                    <p className="text-sm capitalize text-gray-700">
                        {recipe.category}
                    </p>
                    <p className="text-lg font-semibold">
                        {recipe.calories} kcal
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                        B: {recipe.protein}g T: {recipe.fat}g W: {recipe.carbs}g
                    </p>
                </div>

                <SecondBtn className="mt-4 mb-4">Zobacz przepis</SecondBtn>
            </div>
        </Link>
    );
};
