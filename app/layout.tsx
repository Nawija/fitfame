import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Header/Nav";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
    title: "GramFit - Trener Personalny",
    description:
        "GramFit to kompleksowa platforma dla osób pragnących poprawić swoją formę fizyczną. Oferujemy indywidualne plany treningowe, które pomagają osiągnąć wymarzoną sylwetkę, a także darmową bazę przepisów, które wspierają zdrowe odżywianie. Nasz sklep internetowy to miejsce, w którym znajdziesz wysokiej jakości produkty wspierające Twoje cele fitnessowe. Z GramFit osiągniesz sukces, zarówno na siłowni, jak i w kuchni",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <head>
                <meta
                    name="google-adsense-account"
                    content="ca-pub-1823788792891969"
                />
            </head>
            <body
                className={`flex flex-col min-h-screen w-full font-light antialiased font-sans bg-white`}
            >
                <CartProvider>
                    <Nav />
                    <main className="flex-1 w-full relative bg-gray-50">
                        {children}
                    </main>
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
