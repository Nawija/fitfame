import Image from "next/image";
import Link from "next/link";

const calculators = [
  {
    href: "kalkulatory/bmi",
    image: "/images/kalkulatory/bmi.jpg",
    label: "Kalkulator BMI",
  },
  {
    href: "kalkulatory/zapotrzebowanie-kaloryczne",
    image: "/images/kalkulatory/zapotrzebowanie-kaloryczne.jpg",
    label: "Zapotrzebowanie kaloryczne",
  },
  {
    href: "kalkulatory/bf",
    image: "/images/kalkulatory/body-fat.jpg",
    label: "BF% (Body Fat Percentage)",
  },
];

export default function Kalkulatory() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12 text-black font-sans anim-opacity">
      <h1 className="text-2xl font-semibold">Wybierz kalkulator:</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full px-4">
        {calculators.map(({ href, image, label }) => (
          <Link
            key={href}
            href={href}
            className="relative h-72 p-4 border border-gray-200 bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={label}
              fill
              priority
              className="object-cover"
            />
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full bg-stone-900 text-white text-center rotate-2">
              {label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
