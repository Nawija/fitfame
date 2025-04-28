import "./globals.css";
import Nav from "@/components/Header/Nav";
import Footer from "@/components/Footer";

export async function generateMetadata() {
    return {
        title: "GRAMFIT",
        description: `Sprawdź przepis na!`,
        openGraph: {
            title: "GRAMFIT",
            description: `Sprawdź przepis na!`,
            images: "/images/gramfit.jpg",
        },
        twitter: {
            card: "summary_large_image",
            title: "GRAMFIT",
            description: "GRAMFIT",
            images: "/images/gramfit.jpg",
        },
    };
}

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
                <Nav />
                <main className="flex-1 w-full relative bg-gray-50">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
