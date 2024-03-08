export const AuthForm = () => {
    return (
        <form className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto my-8">
            <input type="text" placeholder="Pseudonyme"
                   className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            <input type="password" placeholder="Mot de passe"
                   className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            <button type="submit"
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Connexion
            </button>
        </form>
    );
};