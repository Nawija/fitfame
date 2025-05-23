"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MenuBurger from "@/components/Header/MenuBurger";
import { NAVLINKS } from "@/constants/Links";
import { kanit } from "@/fonts";
import { TiSocialFacebook } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import Logo from "@/components/Header/Logo";
import ShoppingCart from "../Cart/ShoppingCart";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);
    const pathname = usePathname();

    // Dodaj cień do nagłówka przy scrollowaniu
    useEffect(() => {
        const handleScroll = () => setHasShadow(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Zamykaj menu po zmianie strony
    useEffect(() => {
        setShowMenu(false);
    }, [pathname]);

    // Blokuj scrollowanie strony gdy menu jest otwarte
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showMenu]);

    // Obsługa kliknięcia poza menu (dodaj event listener do body)
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const menu = document.querySelector(".mobile-menu");
            const burger = document.querySelector(".menu-burger-button");

            if (
                showMenu &&
                menu &&
                burger &&
                !menu.contains(target) &&
                !burger.contains(target)
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [showMenu]);

    return (
        <>
            {/* Overlay do zamykania menu */}
            {showMenu && (
                <div
                    className="fixed inset-0 anim-opacity backdrop-blur-md z-[10] lg:hidden"
                    onClick={() => setShowMenu(false)}
                    aria-hidden="true"
                />
            )}
            <header
                className={`${
                    pathname === "/" ? "fixed top-0" : "static"
                } z-50 w-screen transition-all ${kanit.className} ${
                    hasShadow
                        ? "bg-white/90 backdrop-blur-md text-gray-700"
                        : pathname === "/"
                        ? "bg-transparent text-white"
                        : "bg-white text-gray-700"
                }`}
            >
                <div className="mx-auto flex items-center justify-between max-w-screen-2xl px-3 py-1.5 relative w-full z-50">
                    <Logo />
                    <MenuBurger
                        handleShowMenu={() => setShowMenu(!showMenu)}
                        showMenu={showMenu}
                    />

                    {/* Menu mobilne */}
                    <div
                        className={`mobile-menu fixed left-0 top-0 z-[50] h-screen w-[280px] bg-[#a58b34] text-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
                            showMenu ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <div className="flex flex-col h-full pt-12 px-6">
                            <nav aria-label="Menu mobilne">
                                <ul className="flex flex-col space-y-6">
                                    {NAVLINKS.map((link, index) => (
                                        <li
                                            key={link.label}
                                            className={`transition-all duration-300 ${
                                                showMenu
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            }`}
                                            style={{
                                                transitionDelay: `${
                                                    index * 50
                                                }ms`,
                                            }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() =>
                                                    setShowMenu(false)
                                                }
                                                className={`block py-1 text-lg uppercase font-medium transition-all hover:text-[#ffcbc4] ${
                                                    pathname === link.href
                                                        ? "text-white font-bold"
                                                        : "text-white/70"
                                                }`}
                                                aria-current={
                                                    pathname === link.href
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Social media w menu mobilnym */}
                            <div className="flex gap-5 mt-auto mb-10 pt-10">
                                <ShoppingCart />
                                <Link
                                    href="https://www.facebook.com/JarekOlszewskiFotografia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="text-white hover:text-[#ffcbc4] transition-all text-2xl"
                                >
                                    <TiSocialFacebook />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/jarek.olszewski.fotografia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="text-white hover:text-[#ffcbc4] transition-all text-xl"
                                >
                                    <FiInstagram />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Menu desktopowe */}
                    <nav className="hidden lg:block w-full">
                        <ul className="flex items-center justify-center xl:space-x-4 space-x-2 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                            {NAVLINKS.map((link) => (
                                <li
                                    key={link.label}
                                    className="relative w-max font-medium"
                                >
                                    <Link
                                        href={link.href}
                                        className={` py-4 px-1 uppercase lg:text-sm transition-all hover:text-[#a58b34] ${
                                            pathname === link.href
                                                ? "text-[#a58b34]"
                                                : ""
                                        }`}
                                        aria-current={
                                            pathname === link.href
                                                ? "page"
                                                : undefined
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social media desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        <ShoppingCart />
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:text-[#a58b34] transition-all text-2xl"
                        >
                            <TiSocialFacebook />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-[#a58b34] transition-all text-xl"
                        >
                            <FiInstagram />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
