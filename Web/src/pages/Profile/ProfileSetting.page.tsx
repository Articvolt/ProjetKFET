export const Profile = () => {
    return (
        <>
            <div className="flex items-center bg-white p-8 rounded-md w-full max-w-2xl mx-auto">
                <div className="flex flex-col items-center p-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="" alt="profile image" />
                        </div>
                    </div>
                    <a href="#" className="text-white bg-primary-green">modifier l'avatar</a>
                </div>

                <form>
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
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
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
        </>
    );
};