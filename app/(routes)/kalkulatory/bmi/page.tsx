import { BMIForm } from "./BMIForm";
import Legends from "./Legends";

export default function BMI() {
    return (
        <div className="flex justify-center items-center bg-white text-black font-sans anim-opacity">
            <div className="px-8 py-8 bg-white w-full max-w-4xl ">
                <h1 className="text-3xl font-bold text-center text-black mb-6">
                    BMI Kalculator
                </h1>
                <div className="flex flex-col w-full lg:flex-row items-center justify-start lg:items-start lg:justify-center gap-6">
                    <BMIForm />
                    <Legends />
                </div>
            </div>
        </div>
    );
}
