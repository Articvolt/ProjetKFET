import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-primary-grey py-10 mt-2 text-white">
            <div className="flex justify-evenly flex-wrap py-2">
                <Link to="/general-terms">Conditions générales d'utilisation</Link>
                <Link to="/legal-notice">Mentions légales</Link>
            </div>
        </footer>
    );
};