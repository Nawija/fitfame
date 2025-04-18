"use client";

import { useState } from "react";

export default function AdminPrzepisy() {
    const [form, setForm] = useState({
        title: "",
        category: "",
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        time: "",
        image: "",
        content: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Saving...");

        const res = await fetch("/api/admin/save-recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setStatus("Saved ✅");
            setForm({
                title: "",
                category: "",
                calories: 0,
                protein: 0,
                fat: 0,
                carbs: 0,
                time: "",
                image: "",
                content: "",
            });
        } else {
            setStatus("Error ❌");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Dodaj przepis</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="title"
                    placeholder="Tytuł"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full p-2 border"
                    required
                />
                <input
                    name="category"
                    placeholder="Kategoria"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full p-2 border"
                />
                <input
                    name="time"
                    placeholder="Czas przygotowania"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full p-2 border"
                />
                <input
                    name="image"
                    placeholder="Ścieżka do obrazka"
                    value={form.image}
                    onChange={handleChange}
                    className="w-full p-2 border"
                />

                <div className="grid grid-cols-3 gap-4">
                    <input
                        name="calories"
                        type="number"
                        placeholder="Kalorie"
                        value={form.calories}
                        onChange={handleChange}
                        className="p-2 border"
                    />
                    <input
                        name="protein"
                        type="number"
                        placeholder="Białko"
                        value={form.protein}
                        onChange={handleChange}
                        className="p-2 border"
                    />
                    <input
                        name="fat"
                        type="number"
                        placeholder="Tłuszcz"
                        value={form.fat}
                        onChange={handleChange}
                        className="p-2 border"
                    />
                    <input
                        name="carbs"
                        type="number"
                        placeholder="Węgle"
                        value={form.carbs}
                        onChange={handleChange}
                        className="p-2 border"
                    />
                </div>

                <textarea
                    name="content"
                    placeholder="Treść przepisu (markdown)"
                    value={form.content}
                    onChange={handleChange}
                    className="w-full p-2 border h-40"
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                    Zapisz przepis
                </button>

                {status && <p className="mt-2">{status}</p>}
            </form>
        </div>
    );
}
