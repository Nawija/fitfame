import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";

export default function ShoppingCart() {
    const { cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link href="/koszyk" aria-label="Koszyk" className="relative">
            <MdShoppingCart className="hover:text-[#a58b34] transition-all text-2xl" />
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </Link>
    );
}
