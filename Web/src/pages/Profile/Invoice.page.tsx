export const Invoice = () => {
    return (
        <>
            <div className="flex flex-col justify-between bg-white p-8 rounded-md w-full max-w-2xl mx-auto items-start">
                <div className="w-full">
                    <nav className="flex justify-start mb-8">
                        <a href="/profile" className="m-4 hover:underline">Profil</a>
                        <a href="/#" className="m-4 underline">Mes commandes</a>
                    </nav>
                </div>
            </div>
        </>
    );
};