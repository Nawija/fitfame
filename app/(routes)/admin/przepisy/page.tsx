"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Step {
    title: string;
    description: string[];
}

interface FormState {
    title: string;
    category: "all" | "Kurczak" | "Masa" | "Rzeźba" | "Niskokaloryczne";
    level: "Łatwy" | "Średni" | "Trudny";
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    time: string;
    image: string;
    description: string;
    ingredients: string[];
    steps: Step[];
}

const AdminPrzepisy: React.FC = () => {
    const [form, setForm] = useState<FormState>({
        title: "",
        category: "all",
        level: "Łatwy",
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        time: "",
        image: "",
        description: "",
        ingredients: [""],
        steps: [{ title: "", description: [""] }],
    });

    const [status, setStatus] = useState<string>("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
        index?: number,
        stepIndex?: number
    ): void => {
        if (stepIndex !== undefined) {
            const steps = [...form.steps];
            const stepName = e.target.name.split(".")[1];

            if (stepName === "title") {
                steps[stepIndex].title = e.target.value;
            } else if (stepName === "description") {
                const descriptionIndex = Number(e.target.dataset.index);
                if (!isNaN(descriptionIndex)) {
                    steps[stepIndex].description[descriptionIndex] = e.target.value;
                }
            }

            setForm((prevForm) => ({ ...prevForm, steps }));
        } else if (index !== undefined) {
            const ingredients = [...form.ingredients];
            ingredients[index] = e.target.value;
            setForm((prevForm) => ({ ...prevForm, ingredients }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleAddIngredient = (): void => {
        setForm((prevForm) => ({
            ...prevForm,
            ingredients: [...prevForm.ingredients, ""],
        }));
    };

    const handleRemoveIngredient = (index: number): void => {
        setForm((prevForm) => ({
            ...prevForm,
            ingredients: prevForm.ingredients.filter((_, i) => i !== index),
        }));
    };

    const handleAddStep = (): void => {
        setForm((prevForm) => ({
            ...prevForm,
            steps: [...prevForm.steps, { title: "", description: [""] }],
        }));
    };

    const handleRemoveStep = (index: number): void => {
        setForm((prevForm) => ({
            ...prevForm,
            steps: prevForm.steps.filter((_, i) => i !== index),
        }));
    };

    const handleAddStepDescription = (stepIndex: number): void => {
        const steps = [...form.steps];
        steps[stepIndex].description.push("");
        setForm((prevForm) => ({ ...prevForm, steps }));
    };

    const handleRemoveStepDescription = (
        stepIndex: number,
        descriptionIndex: number
    ): void => {
        const steps = [...form.steps];
        steps[stepIndex].description = steps[stepIndex].description.filter(
            (_, i) => i !== descriptionIndex
        );
        setForm((prevForm) => ({ ...prevForm, steps }));
    };

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setStatus("Saving...");

        const updatedForm = {
            ...form,
            image:
                form.image.startsWith("/images/przepisy/")
                    ? form.image
                    : `/images/przepisy/${form.image}`,
        };

        const res = await fetch("/api/admin/save-recipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedForm),
        });

        if (res.ok) {
            setStatus("Saved ✅");
            setForm({
                title: "",
                category: "all",
                level: "Łatwy",
                calories: 0,
                protein: 0,
                fat: 0,
                carbs: 0,
                time: "",
                image: "",
                description: "",
                ingredients: [""],
                steps: [{ title: "", description: [""] }],
            });
        } else {
            setStatus("Error ❌");
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-2xl shadow-xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Dodaj nowy przepis</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    name="title"
                    placeholder="Tytuł"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-xl"
                    required
                />
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-xl"
                >
                    <option value="Kurczak">Kurczak</option>
                    <option value="Masa">Masa</option>
                    <option value="Rzeźba">Rzeźba</option>
                    <option value="Niskokaloryczne">Niskokaloryczne</option>
                </select>
                <select
                    name="level"
                    value={form.level}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-xl"
                >
                    <option value="Łatwy">Łatwy</option>
                    <option value="Średni">Średni</option>
                    <option value="Trudny">Trudny</option>
                </select>

                <input
                    name="time"
                    placeholder="Czas przygotowania"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-xl"
                />
                <input
                    name="image"
                    placeholder="Ścieżka do obrazka"
                    value={form.image}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-xl"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["calories", "protein", "fat", "carbs"].map((macro) => (
                        <input
                            key={macro}
                            name={macro}
                            type="number"
                            placeholder={macro}
                            value={form[macro as keyof FormState] as number}
                            onChange={handleChange}
                            className="p-3 border rounded-xl"
                        />
                    ))}
                </div>

                <textarea
                    name="description"
                    placeholder="Opis"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full p-3 border h-24 rounded-xl"
                />

                <div>
                    <h3 className="text-xl font-semibold mb-2">Składniki</h3>
                    <AnimatePresence>
                        {form.ingredients.map((ingredient, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex items-center gap-2 mb-2"
                            >
                                <input
                                    placeholder="Składnik"
                                    value={ingredient}
                                    onChange={(e) => handleChange(e, index)}
                                    className="flex-grow p-2 border rounded-xl"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveIngredient(index)}
                                    className="text-sm px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
                                >
                                    Usuń
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <button
                        type="button"
                        onClick={handleAddIngredient}
                        className="mt-2 text-sm text-blue-600"
                    >
                        + Dodaj składnik
                    </button>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Kroki przygotowania</h3>
                    <AnimatePresence>
                        {form.steps.map((step, stepIndex) => (
                            <motion.div
                                key={stepIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mb-6 border-t pt-4 space-y-2"
                            >
                                <input
                                    placeholder="Tytuł kroku"
                                    value={step.title}
                                    onChange={(e) => handleChange(e, undefined, stepIndex)}
                                    name={`steps[${stepIndex}].title`}
                                    className="w-full p-2 border rounded-xl"
                                />
                                <AnimatePresence>
                                    {step.description.map((desc, descriptionIndex) => (
                                        <motion.div
                                            key={descriptionIndex}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="flex items-start gap-2"
                                        >
                                            <textarea
                                                placeholder="Opis"
                                                name={`steps[${stepIndex}].description`}
                                                data-index={descriptionIndex}
                                                value={desc}
                                                onChange={(e) =>
                                                    handleChange(e, undefined, stepIndex)
                                                }
                                                className="flex-grow p-2 border h-20 rounded-xl"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveStepDescription(stepIndex, descriptionIndex)
                                                }
                                                className="text-white bg-red-500 px-2 py-1 rounded-lg hover:bg-red-600"
                                            >
                                                ❌
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                                <button
                                    type="button"
                                    onClick={() => handleAddStepDescription(stepIndex)}
                                    className="text-sm text-blue-600"
                                >
                                    + Dodaj opis
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveStep(stepIndex)}
                                    className="ml-4 text-sm text-red-600"
                                >
                                    🗑️ Usuń krok
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <button
                        type="button"
                        onClick={handleAddStep}
                        className="text-sm text-blue-600"
                    >
                        + Dodaj krok
                    </button>
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-500"
                >
                    Zapisz przepis
                </button>

                {status && (
                    <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
                )}
            </form>
        </div>
    );
};

export default AdminPrzepisy;
