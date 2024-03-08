import {AuthForm} from "../../components/Auth/AuthForm.tsx";

export const Login = () => {
    return (
        <>
            <div>
                <h1>Connexion</h1>
                <AuthForm/>
                <p className="text-sm text-center mt-4">
                    Pas encore inscrit ?
                    <a href="/register"
                       className="text-indigo-600 hover:text-indigo-800 font-semibold">Inscrivez-vous</a>
                </p>
            </div>
        </>
    );
};