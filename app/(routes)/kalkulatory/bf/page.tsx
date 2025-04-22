"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";

export default function BodyFatCalculator() {
    const [sex, setSex] = useState<"male" | "female">("male");
    const [weight, setWeight] = useState("");
    const [neck, setNeck] = useState("");
    const [chest, setChest] = useState("");
    const [waist, setWaist] = useState("");
    const [abdomen, setAbdomen] = useState("");
    const [hips, setHips] = useState("");
    const [thigh, setThigh] = useState("");
    const [calf, setCalf] = useState("");
    const [biceps, setBiceps] = useState("");
    const [result, setResult] = useState<{
        bodyFatPercent: number;
        fatMass: number;
        leanMass: number;
    } | null>(null);

    const parse = (val: string) => parseFloat(val) || 0;

    const handleCalculate = () => {
        const w = parse(weight);
        const data = {
            neck: parse(neck),
            chest: parse(chest),
            waist: parse(waist),
            abdomen: parse(abdomen),
            hips: parse(hips),
            thigh: parse(thigh),
            calf: parse(calf),
            biceps: parse(biceps),
        };

        // Empiryczny model szacujący BF% na podstawie obwodów (dla poglądowej analizy)
        let bf = 0;
        if (sex === "male") {
            bf =
                0.15 * data.waist +
                0.1 * data.abdomen +
                0.05 * data.hips -
                0.08 * data.neck -
                0.05 * data.chest -
                0.02 * data.biceps -
                0.01 * data.thigh -
                0.01 * data.calf;
        } else {
            bf =
                0.18 * data.waist +
                0.12 * data.abdomen +
                0.1 * data.hips -
                0.06 * data.neck -
                0.04 * data.chest -
                0.02 * data.biceps -
                0.01 * data.thigh -
                0.01 * data.calf;
        }

        bf = Math.max(5, Math.min((bf / w) * 100, 60)); // limitujemy zakres (5% - 60%)

        const fatMass = (bf / 100) * w;
        const leanMass = w - fatMass;

        setResult({
            bodyFatPercent: parseFloat(bf.toFixed(2)),
            fatMass: parseFloat(fatMass.toFixed(2)),
            leanMass: parseFloat(leanMass.toFixed(2)),
        });
    };

    return (
        <>
            <div className="w-full mx-auto flex items-center justify-center">
                <Image
                    src="/images/kalkulatory/jak-sie-mierzyc.jpg"
                    height={400}
                    width={400}
                    alt="jak sie mierzyć"
                />
            </div>
            <div className="max-w-xl mx-auto bg-white p-6 z-40 shadow rounded-xl space-y-3 my-12">
                <h2 className="text-2xl font-semibold text-center">
                    Zaawansowany kalkulator BF%
                </h2>

                <div className="flex gap-4 justify-center text-xs">
                    <button
                        onClick={() => setSex("male")}
                        className={`px-4 py-2 rounded cursor-pointer ${
                            sex === "male"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100"
                        }`}
                    >
                        Mężczyzna
                    </button>
                    <button
                        onClick={() => setSex("female")}
                        className={`px-4 py-2 rounded cursor-pointer ${
                            sex === "female"
                                ? "bg-pink-600 text-white"
                                : "bg-gray-100"
                        }`}
                    >
                        Kobieta
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="Masa ciała (kg)"
                        value={weight}
                        onChange={setWeight}
                    />
                    <Input label="Szyja (cm)" value={neck} onChange={setNeck} />
                    <Input
                        label="Klatka piersiowa (cm)"
                        value={chest}
                        onChange={setChest}
                    />
                    <Input
                        label="Talia (cm)"
                        value={waist}
                        onChange={setWaist}
                    />
                    <Input
                        label="Brzuch (cm)"
                        value={abdomen}
                        onChange={setAbdomen}
                    />
                    <Input
                        label="Biodra (cm)"
                        value={hips}
                        onChange={setHips}
                    />
                    <Input label="Udo (cm)" value={thigh} onChange={setThigh} />
                    <Input label="Łydka (cm)" value={calf} onChange={setCalf} />
                    <Input
                        label="Biceps (cm)"
                        value={biceps}
                        onChange={setBiceps}
                    />
                </div>

                <button
                    onClick={handleCalculate}
                    className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-400 cursor-pointer transition-colors"
                >
                    Oblicz BF%
                </button>

                <AnimatePresence>
                    {result && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4 }}
                            className="text-center space-y-2"
                        >
                            <p className="text-xl font-semibold">
                                BF%:{" "}
                                <span className="text-blue-600">
                                    {result.bodyFatPercent}%
                                </span>
                            </p>
                            <p>
                                Tkanka tłuszczowa:{" "}
                                <strong>{result.fatMass} kg</strong>
                            </p>
                            <p>
                                Masa beztłuszczowa:{" "}
                                <strong>{result.leanMass} kg</strong>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

function Input({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: (val: string) => void;
}) {
    return (
        <div className="flex flex-col">
            <label className="text-sm">{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="p-1 border rounded"
            />
        </div>
    );
}
