export default function Newslettera() {
    return (
        <div className="flex items-center justify-center flex-col px-6 py-24 bg-gray-100 text-gray-800">
            <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl text-center space-y-6">
                <h3 className="text-3xl font-bold">
                    Zapisz się do newslettera
                </h3>
                <p className="text-gray-600 text-base">
                    Otrzymuj porady treningowe, przepisy i darmowe materiały
                    bezpośrednio na maila.
                </p>
                <form className="w-full space-y-4">
                    <input
                        type="email"
                        placeholder="Twój adres e-mail"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Zapisz się
                    </button>
                </form>
                <p className="text-xs text-gray-400">
                    Możesz wypisać się w każdej chwili.
                </p>
            </div>
        </div>
    );
}
