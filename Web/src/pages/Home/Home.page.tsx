import dessertIcon from '../../assets/icons/dessert-icon-512px.png';
import drinkIcon from '../../assets/icons/water-icon-512px.png';
import plateIcon from '../../assets/icons/plat-icon-512px.png';
import encasIcon from '../../assets/icons/encas-icon-512px.png';
//produit test
import platImg from '../../assets/products/plat.jpg';

export const Home = () => {
    return (
        <div>
            <div className="text-center">
                <h1>Le menu du [DATE DU JOUR]</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur.
                    Vitae tincidunt blandit nisl sed vulputate.
                </p>

                <div>
                    <ul className="flex flex-wrap py-2 mx-auto my-8 justify-around">
                        <li className="flex items-center menu-button">
                            <img src={plateIcon} className="w-30px" alt="icone plat"/>
                            LES PLATS
                        </li>
                        <li className="flex items-center menu-button">
                            <img src={drinkIcon} className="w-30px" alt="icone boisson"/>
                            LES BOISSONS
                        </li>
                        <li className="flex items-center menu-button">
                            <img src={dessertIcon} className="w-30px" alt="icon dessert"/>
                            LES DESSERTS
                        </li>
                        <li className="flex items-center menu-button">
                            <img src={encasIcon} className="w-30px " alt="icon encas"/>
                            LES ENCAS
                        </li>
                    </ul>
                </div>
            </div>


            <div className="card-list">
                <div className="card">
                    <img src={platImg} alt="plat test" className="img-product"/>
                    <div>
                        <h2>plat test</h2>
                        <button>commander</button>
                    </div>
                </div>
                <div className="card">
                    <img src={platImg} alt="plat test" className="img-product"/>
                    <div>
                        <h2>plat test</h2>
                        <button>commander</button>
                    </div>
                </div>
                <div className="card">
                    <img src={platImg} alt="plat test" className="img-product"/>
                    <div>
                        <h2>plat test</h2>
                        <button>commander</button>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button className="my-8">
                    Passer cette étape
                </button>
            </div>
        </div>
    );
};