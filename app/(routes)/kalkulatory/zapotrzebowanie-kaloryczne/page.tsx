import { CalorieCalculator  } from "./CalorieCalculator";

export default function BMI() {
    return (
        <div className="flex justify-center items-center bg-white text-black font-sans anim-opacity">
            <div className="w-full max-w-lg px-4 py-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-center text-black mb-6">
                    Zapotrzebowanie Kaloryczne
                </h1>
                <CalorieCalculator />
            </div>
        </div>
    );
}
