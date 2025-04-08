import { BMIForm } from "./BMIForm";
import Legends from "./Legends";

export default function BMI() {
    return (
        <>
            <div className="flex justify-center items-center bg-white text-black font-sans anim-opacity">
                <div className="px-8 py-8 bg-white w-full max-w-4xl ">
                    <h1 className="text-3xl font-bold text-center text-black mb-6">
                        BMI Kalculator
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Oblicz swoje BMI i sprawdź, w jakim przedziale się
                        znajdujesz.
                    </p>
                    <div className="flex flex-col w-full lg:flex-row items-center justify-start lg:items-start lg:justify-center gap-6">
                        <BMIForm />
                        <Legends />
                    </div>
                </div>
            </div>

            <section className="my-12 p-6 rounded-lg border border-blue-300 bg-blue-50 m-4 max-w-2xl md:mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-black">
                    Co to jest BMI?
                </h2>
                <p className="text-gray-700 mb-4">
                    BMI (Body Mass Index) to wskaźnik masy ciała, który służy do
                    oceny, czy dana osoba ma prawidłową wagę w stosunku do
                    swojego wzrostu. Jest to prosty i szybki sposób na wstępną
                    ocenę stanu zdrowia.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-black">
                    Jak interpretować wynik?
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                        <strong>BMI poniżej 18.5:</strong> Niedowaga warto
                        skonsultować się z lekarzem lub dietetykiem.
                    </li>
                    <li>
                        <strong>BMI 18.5 - 24.9:</strong> Prawidłowa masa ciała.
                    </li>
                    <li>
                        <strong>BMI 25 - 29.9:</strong> Nadwaga warto zadbać o
                        zdrowy tryb życia.
                    </li>
                    <li>
                        <strong>BMI 30 i więcej:</strong> Otyłość skonsultuj się
                        z lekarzem.
                    </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                    Pamiętaj, że BMI nie uwzględnia masy mięśniowej, wieku, płci
                    ani rozkładu tkanki tłuszczowej. Dla dokładniejszej diagnozy
                    warto wykonać dodatkowe badania.
                </p>
            </section>
        </>
    );
}
