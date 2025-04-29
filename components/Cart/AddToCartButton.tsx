"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types/types"; // <-- DODAJ TEN IMPORT
type AddToCartButtonProps = {
    produkt: Product;
};

export function AddToCartButton({ produkt }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleAddToCart = () => {
        if (produkt.sizesAndPrices?.length) {
            // Jeśli są dostępne rozmiary, dodajemy wybrany rozmiar i cenę
            addToCart(produkt, 1);
        } else {
            // Jeśli brak rozmiarów, dodajemy po prostu produkt z jego ceną
            addToCart(produkt);
        }
        setIsModalOpen(true);
    };

    const handleGoToCart = () => {
        setIsModalOpen(false);
        router.push("/koszyk");
    };

    const handleContinueShopping = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={handleAddToCart}
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
                Dodaj do koszyka
            </button>

            {/* Modal with background blur animation */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="bg-black/30 p-8 w-full h-full absolute top-0 left-0 -z-10"
                        />
                        <motion.div
                            initial={{ opacity: 0, translateY: "100%" }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: "100%" }}
                            transition={{ duration: 0.25 }}
                            className="bg-white rounded-2xl p-8 shadow-2xl text-center max-w-sm w-full h-screen lg:h-auto lg:mt-0 lg:rounded-lg mt-[50vh] space-y-6"
                        >
                            <h2 className="text-2xl font-bold">
                                Produkt dodany!
                            </h2>
                            <p className="text-gray-500">
                                Co chcesz zrobić dalej?
                            </p>
                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={handleGoToCart}
                                    className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                                >
                                    Przejdź do koszyka
                                </button>
                                <button
                                    onClick={handleContinueShopping}
                                    className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition"
                                >
                                    Kontynuuj zakupy
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
