"use client";

import { useState } from "react";
import StatusMessage from "@/components/StatusMessage";
import { FormProduktyPage } from "@/types/types";
import { LunchboxProduct } from "@/app/(routes)/sklep/[slug]/LunchboxProduct";

const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("folder", "produkty")
    formData.append("file", file);

    const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();
    if (data.url) {
        const imageUrl = `images/produkty/${data.url}`;
        return imageUrl;
    } else {
        throw new Error("Image upload failed");
    }
};

const AdminProdukty: React.FC = () => {
    const defaultForm: FormProduktyPage = {
        title: "",
        slug: "",
        description: "",
        category: "LunchBox",
        image: null,
        price: 0,
        content: "",
    };
    const [form, setForm] = useState<FormProduktyPage>(defaultForm);

    const [status, setStatus] = useState<string>("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        const slug = newTitle
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(
                /[ąćęłńóśźż]/g,
                (c) =>
                    ({
                        ą: "a",
                        ć: "c",
                        ę: "e",
                        ł: "l",
                        ń: "n",
                        ó: "o",
                        ś: "s",
                        ź: "z",
                        ż: "z",
                    }[c] ?? c) // <-- dodane ?? c
            )
            .replace(/[^a-z0-9-]/g, "");

        setForm((prevForm) => ({
            ...prevForm,
            title: newTitle,
            slug,
        }));
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ): void => {
        const { name, value } = e.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: name === "price" ? Number(value) : value,
        }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
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

        const updatedForm = {
            ...form,
            image: uploadedImageUrl,
        };

        const res = await fetch("/api/admin/produkty/dodaj-produkt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedForm),
        });

        if (res.ok) {
            setStatus("Saved ✅");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setForm(defaultForm);
        } else {
            setStatus("Error");
        }
    };

    return (
        <div className="flex items-start justify-center py-12">
            <div className="flex-1 w-full mx-6 max-w-4xl">
                <LunchboxProduct
                    title={form.title}
                    price={form.price}
                    image={form.image}
                />
            </div>
            <div className="w-1/4 h-screen overflow-y-scroll sticky top-0">
                <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg border border-gray-200">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Dodaj nowy produkt
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            name="title"
                            placeholder="Tytuł"
                            value={form.title}
                            onChange={handleTitleChange}
                            className="w-full p-2 border border-gray-200 rounded-lg"
                            required
                        />

                        <input
                            name="price"
                            placeholder="Cena"
                            value={form.price}
                            type="number"
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
                            <option value="Lunchbox">LunchBox</option>
                            <option value="TShirt">T-Shirt</option>
                            <option value="Akcesoria">Akcesoria</option>
                        </select>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full p-2 border border-gray-200 rounded-lg"
                        />

                        <textarea
                            name="description"
                            placeholder="Opis"
                            value={form.description}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-200 h-24 rounded-lg"
                        />

                        <textarea
                            name="content"
                            placeholder="Treść / dodatkowe info"
                            value={form.content}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-200 h-32 rounded-lg"
                        />

                        <div className="w-full flex items-end justify-end">
                            <button
                                type="submit"
                                className="bg-green-600 cursor-pointer w-max  text-white text-sm px-5 py-2 font-semibold rounded-lg hover:bg-green-500"
                            >
                                Zapisz produkt
                            </button>
                        </div>
                        <StatusMessage status={status} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminProdukty;
