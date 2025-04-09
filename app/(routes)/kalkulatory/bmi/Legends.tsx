export default function Legends({
    activeCategory,
}: {
    activeCategory: string | null;
}) {
    const getClass = (label: string) => {
        const colors: { [key: string]: string } = {
            Niedowaga: "bg-yellow-100 animate-pulse",
            "Prawidłowa waga": "bg-green-100 animate-pulse",
            Nadwaga: "bg-yellow-100 animate-pulse",
            Otyłość: "bg-red-100 animate-pulse",
        };
        return label === activeCategory ? `${colors[label]} font-semibold` : "";
    };

    return (
        <div className="lg:max-w-xs text-center lg:text-left bg-blue-50 border border-blue-300 p-4 rounded-lg w-full">
            <h2 className="text-xl font-semibold mb-3">Kategoria BMI</h2>
            <ul className="text-sm text-gray-700 space-y-1.5">
                <li>
                    <strong className="font-bold text-lg">Mężczyzna:</strong>
                </li>
                {[
                    { label: "Niedowaga", range: "< 18.5" },
                    { label: "Prawidłowa waga", range: "18.5 - 24.9" },
                    { label: "Nadwaga", range: "25 - 29.9" },
                    { label: "Otyłość", range: ">= 30" },
                ].map(({ label, range }) => (
                    <li
                        key={label}
                        className={`border-b border-gray-300 p-1 rounded ${getClass(
                            label
                        )}`}
                    >
                        {label}: {range}
                    </li>
                ))}
            </ul>
            <ul className="text-sm text-gray-700 mt-3 space-y-1.5">
                <li>
                    <strong className="font-bold text-lg">Kobieta:</strong>
                </li>
                {[
                    { label: "Niedowaga", range: "< 18.0" },
                    { label: "Prawidłowa waga", range: "18.0 - 24.4" },
                    { label: "Nadwaga", range: "24.5 - 29.0" },
                    { label: "Otyłość", range: ">= 29.1" },
                ].map(({ label, range }) => (
                    <li
                        key={label}
                        className={`border-b border-gray-300 p-1 rounded ${getClass(
                            label
                        )}`}
                    >
                        {label}: {range}
                    </li>
                ))}
            </ul>
        </div>
    );
}
