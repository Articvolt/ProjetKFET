import ItemsList from '../../components/Items/ItemsList';
import CategoriesList from "../../components/Categories/CategoriesList.tsx";

export const ItemsPage = () => {
    return (
        <div>
            <h1>Panneau d'administration</h1>
            <div>
                <ItemsList />
            </div>
            <div>
                <CategoriesList />
            </div>
            
        </div>
    );
};
