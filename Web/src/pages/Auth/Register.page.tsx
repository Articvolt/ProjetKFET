export const Register = () => {
    return (
        <>
            <h1>Inscription</h1>
            <form className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto my-8">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="pseudonyme" className="text-gray-700">pseudonyme</label>
                    <input
                        type="text"
                        id="pseudonyme"
                        className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="password" className="text-gray-700">mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="confirm-password" className="text-gray-700">confirmer le mot de passe</label>
                    <input
                        type="password"
                        id="confirm-password"
                        className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="terms"
                        className="rounded text-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    />
                    <label htmlFor="terms" className="text-gray-700">
                        veuillez accepter
                        <a href="/general-terms" className="link-button"> les termes d'utilisations</a>
                    </label>
                </div>

                <button type="submit" className="form-button">
                    Valider
                </button>
            </form>
        </>
    );
};