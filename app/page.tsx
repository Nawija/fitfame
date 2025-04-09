"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="anim-opacity">
            {/* HERO */}
            <div className="relative h-[82vh] w-full">
                <Image
                    src="/images/tired-bearded-man.jpg"
                    fill
                    className="object-cover -z-20"
                    alt="hero"
                    quality={60}
                />
                <div className="absolute inset-0 bg-black/60 -z-20" />
                <h1 className="font-bold uppercase text-5xl lg:text-9xl z-10 h-full w-3/4 mx-auto text-center flex items-center justify-center text-white">
                    Zmień swoje ciało już dziś!
                </h1>
            </div>

            {/* SEO SEKCJA */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-800 space-y-6">
                <div className="max-w-6xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
                            Skuteczne plany treningowe dopasowane do Ciebie
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600 max-w-4xl mx-auto text-center">
                            Niezależnie od tego, czy chcesz schudnąć, zbudować masę mięśniową
                            czy poprawić kondycję znajdziesz u nas <strong>idealny plan
                            treningowy</strong> dopasowany do Twoich celów. Nasze plany tworzone są
                            przez certyfikowanego trenera i oparte na wieloletnim doświadczeniu.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <h3 className="text-3xl font-semibold mb-4">
                                Odchudzanie bez głodówki
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Pozbądź się zbędnych kilogramów dzięki <strong>zdrowej diecie</strong>,
                                dopasowanej aktywności fizycznej i profesjonalnym wskazówkom. Nauczymy Cię
                                jak jeść smacznie i tracić na wadze bez efektu jojo.
                            </p>
                        </div>
                        <Image
                            src="/images/przepisy/pancakes.jpg"
                            width={600}
                            height={400}
                            alt="Zdrowy posiłek"
                            className="rounded-2xl shadow-lg"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <Image
                            src="/images/tired-bearded-man.jpg"
                            width={600}
                            height={400}
                            alt="Trening siłowy"
                            className="rounded-2xl shadow-lg order-2 lg:order-1"
                        />
                        <div className="order-1 lg:order-2">
                            <h3 className="text-3xl font-semibold mb-4">
                                Zbuduj masę mięśniową z głową
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Dzięki naszym planom treningowym na <strong>masę mięśniową</strong>,
                                rozwiniesz sylwetkę i zwiększysz siłę w bezpieczny i skuteczny sposób.
                                Każdy plan zawiera dokładny rozkład ćwiczeń, ilości serii, powtórzeń i
                                dni treningowych.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
