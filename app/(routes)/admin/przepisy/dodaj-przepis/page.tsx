"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import StatusMessage from "@/components/StatusMessage";
import RecipePage from "./RecipePage";
import { FormRecipePage, FormState } from "@/types/types";

const AdminPrzepisy: React.FC = () => {
    const [form, setForm] = useState<FormRecipePage>({
        title: "",
        category: "all",
        level: "Łatwy",
        slug: "",
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        fiber: 0,
        time: "",
        image: null,
        description: "",
        content: "",
        ingredients: [""],
        steps: [{ title: "", description: [""], image: null }],
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
                    steps[stepIndex].description[descriptionIndex] =
                        e.target.value;
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

    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append("folder", "przepisy");
        formData.append("file", file);

        const response = await fetch("/api/upload-image", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data.url) {
            const imageUrl = `${data.url}`;
            return imageUrl;
        } else {
            throw new Error("Image upload failed");
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
            steps: [
                ...prevForm.steps,
                { title: "", description: [""], image: null },
            ],
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

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setForm((prevForm) => ({
                ...prevForm,
                image: file,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setStatus("Saving...");

        let uploadedImageUrl = "";
        if (form.image instanceof File) {
            uploadedImageUrl = await uploadImage(form.image);
        } else if (typeof form.image === "string") {
            uploadedImageUrl = form.image;
        }

        const stepsWithUploadedImages = await Promise.all(
            form.steps.map(async (step) => {
                let imageUrl = step.image;
                if (step.image instanceof File) {
                    imageUrl = await uploadImage(step.image);
                }
                return {
                    ...step,
                    image: imageUrl,
                };
            })
        );

        const updatedForm = {
            ...form,
            image: uploadedImageUrl,
            steps: stepsWithUploadedImages,
        };

        const res = await fetch("/api/admin/save-recipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedForm),
        });

        if (res.ok) {
            setStatus("Saved ✅");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setForm({
                title: "",
                slug: "",
                category: "all",
                level: "Łatwy",
                calories: 0,
                protein: 0,
                fat: 0,
                carbs: 0,
                fiber: 0,
                time: "",
                image: null,
                description: "",
                content: "",
                ingredients: [""],
                steps: [{ title: "", description: [""], image: null }],
            });
        } else {
            setStatus("Error");
        }
    };

    return (
        <div className="flex">
            <div className="flex-1 w-full mx-6">
                <RecipePage recipe={form} />
            </div>
            <div className="w-1/4 h-screen overflow-y-scroll sticky top-0">
                <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg border border-gray-200">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Dodaj nowy przepis
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            name="title"
                            placeholder="Tytuł"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-200 rounded-lg"
                            required
                        />
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-200 rounded-lg"
                        >
                            <option value="Kurczak">Kurczak</option>
                            <option value="Masa">Masa</option>
                            <option value="Rzeźba">Rzeźba</option>
                            <option value="Niskokaloryczne">
                                Niskokaloryczne
                            </option>
                        </select>
                        <select
                            name="level"
                            value={form.level}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-200 rounded-lg"
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
                            className="w-full p-2 border border-gray-200 rounded-lg"
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full p-2 border border-gray-200 rounded-lg"
                        />

                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-1 px-1 text-sm text-gray-600 font-medium">
                                <div>Kcal</div>
                                <div>Białko</div>
                                <div>Tłuszcze</div>
                                <div>Węglowodany</div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {["calories", "protein", "fat", "carbs"].map(
                                    (macro) => (
                                        <input
                                            key={macro}
                                            name={macro}
                                            type="number"
                                            placeholder={macro}
                                            value={
                                                form[
                                                    macro as keyof FormState
                                                ] as number
                                            }
                                            onChange={handleChange}
                                            className="p-3 border border-gray-200 rounded-lg"
                                        />
                                    )
                                )}
                            </div>
                        </div>

                        <textarea
                            name="description"
                            placeholder="Opis"
                            value={form.description}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-200 h-24 rounded-lg"
                        />

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Składniki
                            </h3>
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
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                            className="flex-grow p-2 border border-gray-200 rounded-lg"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveIngredient(index)
                                            }
                                            className="text-base p-2 text-white cursor-pointer bg-red-500 rounded-lg hover:bg-red-600"
                                        >
                                            <MdDeleteForever />
                                        </button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            <button
                                type="button"
                                onClick={handleAddIngredient}
                                className="text-xs bg-blue-600 flex items-center cursor-pointer justify-center text-white py-1.5 px-3 font-semibold rounded-lg"
                            >
                                <FaPlus className="mr-2" /> Dodaj składnik
                            </button>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Kroki przygotowania
                            </h3>
                            <AnimatePresence>
                                {form.steps.map((step, stepIndex) => (
                                    <motion.div
                                        key={stepIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mb-6 border-t border-blue-300 pt-4 space-y-2"
                                    >
                                        <input
                                            placeholder="Tytuł kroku"
                                            value={step.title}
                                            onChange={(e) =>
                                                handleChange(
                                                    e,
                                                    undefined,
                                                    stepIndex
                                                )
                                            }
                                            name={`steps[${stepIndex}].title`}
                                            className="w-full p-2 border border-gray-200 rounded-lg"
                                        />
                                        <AnimatePresence>
                                            {step.description.map(
                                                (desc, descriptionIndex) => (
                                                    <motion.div
                                                        key={descriptionIndex}
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.9,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            scale: 0.9,
                                                        }}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <textarea
                                                            placeholder="Opis"
                                                            name={`steps[${stepIndex}].description`}
                                                            data-index={
                                                                descriptionIndex
                                                            }
                                                            value={desc}
                                                            onChange={(e) =>
                                                                handleChange(
                                                                    e,
                                                                    undefined,
                                                                    stepIndex
                                                                )
                                                            }
                                                            className="flex-grow p-2 border border-gray-200 h-20 rounded-lg"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleRemoveStepDescription(
                                                                    stepIndex,
                                                                    descriptionIndex
                                                                )
                                                            }
                                                            className="text-white bg-red-500 cursor-pointer p-2 rounded-lg hover:bg-red-600 text-base"
                                                        >
                                                            <MdDeleteForever />
                                                        </button>
                                                    </motion.div>
                                                )
                                            )}
                                        </AnimatePresence>
                                        <div className=" space-x-3 flex items-center">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleAddStepDescription(
                                                        stepIndex
                                                    )
                                                }
                                                className="text-xs bg-blue-600 flex items-center cursor-pointer justify-center text-white py-1 px-3 font-semibold rounded-lg"
                                            >
                                                <FaPlus className="mr-2" />{" "}
                                                Dodaj opis
                                            </button>
                                            {/* <AddStep onClick={handleAddStep} /> */}
                                            <button
                                                type="button"
                                                onClick={handleAddStep}
                                                className="text-xs bg-yellow-600 flex items-center cursor-pointer justify-center text-white py-1 px-3 font-semibold rounded-lg"
                                            >
                                                <FaPlus className="mr-2" /> Nowy
                                                krok
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveStep(stepIndex)
                                                }
                                                className="text-xs bg-red-600 flex items-center cursor-pointer justify-center text-white py-1 px-3 font-semibold rounded-lg"
                                            >
                                                <MdDeleteForever className="mr-2" />{" "}
                                                Usuń krok
                                            </button>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-1">
                                                Zdjęcie do kroku:
                                            </label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file =
                                                        e.target.files?.[0];
                                                    if (file) {
                                                        const updatedSteps = [
                                                            ...form.steps,
                                                        ];
                                                        updatedSteps[
                                                            stepIndex
                                                        ].image = file;
                                                        setForm((prevForm) => ({
                                                            ...prevForm,
                                                            steps: updatedSteps,
                                                        }));
                                                    }
                                                }}
                                                className="w-full p-2 border border-gray-200 rounded-lg"
                                            />
                                            {step.image && (
                                                <img
                                                    src={
                                                        step.image
                                                            ? step.image instanceof
                                                              File
                                                                ? URL.createObjectURL(
                                                                      step.image
                                                                  )
                                                                : step.image
                                                            : undefined
                                                    }
                                                    alt={`Krok ${
                                                        stepIndex + 1
                                                    }`}
                                                    className="mt-2 rounded-lg w-full h-auto"
                                                />
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        <div className="w-full flex items-end justify-end">
                            <button
                                type="submit"
                                className="bg-green-600 cursor-pointer w-max  text-white text-sm px-5 py-2 font-semibold rounded-lg hover:bg-green-500"
                            >
                                Zapisz przepis
                            </button>
                        </div>
                        <StatusMessage status={status} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPrzepisy;

// function AddStep(onClick: () => void) {
//     return (
//         <button
//             type="button"
//             onClick={onClick}
//             className="text-xs bg-yellow-600 flex items-center cursor-pointer justify-center text-white py-1 px-3 font-semibold rounded-lg"
//         >
//             <FaPlus className="mr-2" /> Nowy krok
//         </button>
//     );
// }
// function DeleteStep(onClick) {
//     return (
//         <button
//             type="button"
//             onClick={onClick}
//             className="text-xs bg-red-600 flex items-center cursor-pointer justify-center text-white py-1 px-3 font-semibold rounded-lg"
//         >
//             <MdDeleteForever className="mr-2" /> Usuń krok
//         </button>
//     );
// }
