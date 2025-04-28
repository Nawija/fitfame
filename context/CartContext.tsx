"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/types/types";

type CartItem = {
    produkt: Product;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (produkt: Product, quantity?: number) => void;
    removeFromCart: (slug: string) => void;
    updateQuantity: (slug: string, quantity: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (produkt: Product, quantity = 1) => {
        setCart((prev) => {
            const existingItem = prev.find(
                (item) => item.produkt.slug === produkt.slug
            );
            if (existingItem) {
                return prev.map((item) =>
                    item.produkt.slug === produkt.slug
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prev, { produkt, quantity }];
            }
        });
    };

    const removeFromCart = (slug: string) => {
        setCart((prev) => prev.filter((item) => item.produkt.slug !== slug));
    };

    const updateQuantity = (slug: string, quantity: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.produkt.slug === slug ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
