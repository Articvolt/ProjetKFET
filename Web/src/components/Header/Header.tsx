import { Link } from 'react-router-dom';
import headerImage from '../../assets/header.jpg';
import logo from '../../assets/logo-removebg.png';

export const Header = () => {
    return (
        <>
            <header className="h-auto">
                <div className="relative">
                    <div className="brightness-10">
                        <img src={headerImage}  alt="header-img" className="max-h-60 h-auto w-full object-cover"/>
                    </div>
                    <nav className="absolute top-0 left-0 right-0 text-white">
                        <div className="flex justify-between flex-wrap py-2">
                            <Link className="w-80px" to="/">
                                <img src={logo} className="mx-6" alt="logo"/>
                            </Link>
                            <div>
                                <ul className="flex flex-wrap py-2">
                                    <li>
                                        <Link className="mx-6" to="/items">PANNEAU D'ADMINISTRATION</Link>
                                    </li>
                                    <li>
                                        <Link className="mx-6" to="/">MENU DE LA SEMAINE</Link>
                                    </li>
                                    <li>
                                        <Link className="mx-6" to="/">MA COMMANDE</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="bg-primary-green text-white text center">
                    <p className="text-center py-2 text-xl">
                        Attention, les réservations pour le jour même doivent être faites avant 11h30
                    </p>
                </div>
            </header>
        </>

    );
};
