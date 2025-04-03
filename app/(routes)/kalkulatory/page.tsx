import { MainBtn } from "@/components/Buttons/MainBtn";
import Link from "next/link";

export default function Kalkulatory() {
    return (
        <div className="flex justify-center flex-col space-y-8 items-center bg-white text-black font-sans anim-opacity">
            <h1 className="text-2xl font-semibold ">Wybierz kalkulator:</h1>
            <div className="flex flex-col items-center justify-center space-y-4">
            <Link href="kalkulatory/bmi">
                <MainBtn>Kalkulator BMI</MainBtn>
            </Link>
            <Link href="kalkulatory/zapotrzebowanie-kaloryczne">
                <MainBtn>Zapotrzebowanie kaloryczne</MainBtn>
            </Link>
            </div>
        </div>
    );
}
