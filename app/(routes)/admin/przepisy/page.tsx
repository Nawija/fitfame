"use client";

import { useState } from "react";

const AddRecipePage = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target as HTMLFormElement);

        const res = await fetch("/api/admin/add-recipe", {
            method: "POST",
            body: formData,
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error("Błąd serwera:", errorText);
            setMessage("Wystąpił błąd podczas dodawania przepisu");
            setLoading(false);
            return;
        }

        try {
            const result = await res.json();
            console.log(result); // Logowanie odpowiedzi serwera
            setMessage(result.message || "Dodano przepis!");
        } catch (error) {
            console.error("Błąd podczas parsowania odpowiedzi JSON:", error);
            setMessage("Wystąpił problem z odpowiedzią serwera");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                Dodaj nowy przepis
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label htmlFor="title" className="text-lg text-gray-600">
                        Tytuł przepisu
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Tytuł przepisu"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="image" className="text-lg text-gray-600">
                        Zdjęcie przepisu
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="description"
                        className="text-lg text-gray-600"
                    >
                        Opis przepisu
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Opis przepisu"
                        required
                    ></textarea>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="ingredients"
                        className="text-lg text-gray-600"
                    >
                        Składniki (w formacie JSON)
                    </label>
                    <textarea
                        name="ingredients"
                        id="ingredients"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder='["100g ryżu", "200g kurczaka"]'
                        required
                    ></textarea>
                </div>

                <div className="space-y-2">
                    <label htmlFor="steps" className="text-lg text-gray-600">
                        Kroki przygotowania (w formacie JSON)
                    </label>
                    <textarea
                        name="steps"
                        id="steps"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder='["Ugotuj ryż", "Smaż kurczaka"]'
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 text-white bg-green-500 rounded-md hover:bg-green-600 disabled:bg-gray-300"
                    disabled={loading}
                >
                    {loading ? "Dodawanie..." : "Dodaj przepis"}
                </button>
            </form>

            {message && (
                <p className="mt-6 text-center text-xl text-red-500">
                    {message}
                </p>
            )}
        </div>
    );
};

export default AddRecipePage;
