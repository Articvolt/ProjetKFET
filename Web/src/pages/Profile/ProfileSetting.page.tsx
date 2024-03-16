export const Profile = () => {
    return (
        <>
            <div className="flex flex-col justify-between bg-white p-8 rounded-md w-full max-w-2xl mx-auto items-start">
                <div className="w-full">
                    <nav className="flex justify-start mb-8">
                        <a href="#" className="m-4 underline">Profil</a>
                        <a href="/invoices" className="m-4 hover:underline">Mes commandes</a>
                    </nav>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full items-center md:space-x-8">
                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <div
                            className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-4 overflow-hidden flex items-center justify-center text-sm">
                            <img src="" alt="profile image" onError={(e) => {
                                // @ts-ignore
                                e.target.onerror = null;
                                // @ts-ignore
                                e.target.src = "https://placehold.it/100";
                            }}/>
                        </div>
                        <a href="#" className="form-button bg-primary-green">modifier l'avatar</a>
                    </div>
                    <form className="flex-1">
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                    Prénom
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 border rounded border-gray-200"
                                    id="firstName"
                                    type="text"
                                    placeholder="Prénom"
                                />
                            </div>
                            <div className="md:ml-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                    Nom
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 border rounded border-gray-200"
                                    id="lastName"
                                    type="text"
                                    placeholder="Nom"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 border rounded border-gray-200"
                                id="email"
                                type="email"
                                placeholder="Adresse mail"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                Mot de passe
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 border rounded border-gray-200"
                                id="password"
                                type="password"
                            />
                            <a className="link-button cursor-pointer text-xs">supprimer mon compte</a>
                        </div>
                        <div className="text-center">
                            <button className="form-button">Enregistrer les modifications</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};