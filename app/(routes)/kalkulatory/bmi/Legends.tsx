export default function Legends() {
    return (
        <div className="lg:max-w-xs text-center lg:text-left bg-gray-100 border border-stone-300 p-4 rounded-lg w-full">
            <h2 className="text-lg font-semibold mb-3 animate-pulse">
                Kategoria BMI
            </h2>
            <ul className="text-sm text-gray-700 space-y-1.5">
                <li>
                    <strong className="font-bold">Mężczyzna:</strong>
                </li>
                <li className="border-b border-gray-300">
                    Niedowaga: &lt; 18.5
                </li>
                <li className="border-b border-gray-300">
                    Prawidłowa waga: 18.5 - 24.9
                </li>
                <li className="border-b border-gray-300">Nadwaga: 25 - 29.9</li>
                <li className="border-b border-gray-300">Otyłość: &ge; 30</li>
            </ul>
            <ul className="text-sm text-gray-700 mt-3 space-y-1.5">
                <li>
                    <strong className="font-bold">Mężczyzna:</strong>
                </li>
                <li className="border-b border-gray-300">
                    Niedowaga: &lt; 18.0
                </li>
                <li className="border-b border-gray-300">
                    Prawidłowa waga: 18.0 - 24.4
                </li>
                <li className="border-b border-gray-300">
                    Nadwaga: 24.5 - 29.0
                </li>
                <li className="border-b border-gray-300">Otyłość: &ge; 29.1</li>
            </ul>
        </div>
    );
}
