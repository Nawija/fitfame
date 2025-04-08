import Link from "next/link";

export default function Kalkulatory() {
    return (
        <div className="flex justify-center flex-col space-y-8 items-center bg-white text-black font-sans anim-opacity">
            <h1 className="text-2xl font-semibold ">Wybierz kalkulator:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-8 max-w-4xl px-12">
                <Link href="kalkulatory/bmi">
                    <div className="p-4 border border-stone-400 rounded-lg relative w-full h-72 lg:h-62">
                        <img
                            className="w-full h-full object-cover"
                            src="https://img.freepik.com/darmowe-wektory/ilustracja-metabolizmu-plaska-konstrukcja_23-2150093697.jpg?t=st=1743796456~exp=1743800056~hmac=5c1d967be9795df48b5d721e8a97099a7f4739d099a65c9e19f193108412fdfc&w=1380"
                        />
                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full bg-stone-900 text-white text-center rotate-2">
                            Kalkulator BMI
                        </p>
                    </div>
                </Link>
                <Link href="kalkulatory/zapotrzebowanie-kaloryczne">
                    <div className="p-4 border border-stone-400 rounded-lg relative w-full h-72 lg:h-62">
                        <img
                            className="w-full h-full object-cover"
                            src="https://img.freepik.com/darmowe-zdjecie/poloz-plasko-butelke-salatki-i-soku_23-2148262146.jpg?t=st=1743796622~exp=1743800222~hmac=ee28d61be6fcd5a633a3ff3da47f5c261fc90d41003fda9e2e1179fb55275389&w=2000"
                        />
                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full bg-stone-900 text-white text-center rotate-2">
                            Zapotrzebowanie kaloryczne
                        </p>
                    </div>
                </Link>
                <Link href="kalkulatory/zapotrzebowanie-kaloryczne">
                    <div className="p-4 border border-stone-400 rounded-lg relative w-full h-72 lg:h-62">
                        <img
                            className="w-full h-full object-cover"
                            src="https://img.freepik.com/darmowe-zdjecie/poloz-plasko-butelke-salatki-i-soku_23-2148262146.jpg?t=st=1743796622~exp=1743800222~hmac=ee28d61be6fcd5a633a3ff3da47f5c261fc90d41003fda9e2e1179fb55275389&w=2000"
                        />
                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full bg-stone-900 text-white text-center rotate-2">
                            Zapotrzebowanie kaloryczne
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
