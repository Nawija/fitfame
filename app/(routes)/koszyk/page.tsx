"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function KoszykPage() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.produkt.price * item.quantity,
        0
    );

    if (cart.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-4 text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Twój koszyk jest pusty
                </h1>
                <Link href="/sklep" className="text-blue-600 underline">
                    Wróć do sklepu
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">Twój Koszyk</h1>

            <div className="space-y-6">
                {cart.map(({ produkt, quantity }) => (
                    <div
                        key={produkt.slug}
                        className="flex items-center gap-6 border-b py-4"
                    >
                        <img
                            src={produkt.image}
                            alt={produkt.title}
                            className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">
                                {produkt.title}
                            </h2>
                            <p className="text-gray-600">{produkt.price} zł</p>

                            <div className="flex items-center gap-2 mt-2">
                                <button
                                    onClick={() =>
                                        updateQuantity(
                                            produkt.slug,
                                            quantity - 1
                                        )
                                    }
                                    disabled={quantity <= 1}
                                    className="px-2 cursor-pointer py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <span className="font-bold">{quantity}</span>
                                <button
                                    onClick={() =>
                                        updateQuantity(
                                            produkt.slug,
                                            quantity + 1
                                        )
                                    }
                                    className="px-2 py-1 cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => removeFromCart(produkt.slug)}
                            className="text-red-600 cursor-pointer hover:underline"
                        >
                            Usuń
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-8 border-t pt-6">
                <div>
                    <button
                        onClick={clearCart}
                        className="text-gray-600 hover:underline cursor-pointer"
                    >
                        Wyczyść koszyk
                    </button>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold">
                        Razem: {totalPrice.toFixed(2)} zł
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-6 py-2 rounded-lg font-semibold mt-4">
                        Przejdź do kasy
                    </button>
                </div>
            </div>
        </div>
    );
}
