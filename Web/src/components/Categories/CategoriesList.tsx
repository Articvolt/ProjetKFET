import React from "react";
import { useCategories, useDeleteCategory } from "./CategoryModel.ts";
import { useItems } from "../Items/ItemModel.ts"; // Votre hook useItems

const CategoriesList: React.FC = () => {
    const { categories } = useCategories();
    const { items } = useItems(); // Obtenir le tableau d'items
    const deleteCategory = useDeleteCategory();

    const handleDelete = async (id: number) => {
        await deleteCategory(id);
    };

    // Nouvelle fonction pour obtenir le nombre d'items pour une catégorie donnée
    const getItemCount = (idCategory: number | undefined) => {
        return items.filter(item => item.idCategory === idCategory).length;
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Liste des categories</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="table-header">
                        Catégorie
                    </th>
                    <th scope="col" className="table-header">
                        Nombre de produits dans cette catégorie
                    </th>
                    <th scope="col" className="table-header">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {categories.map(category => (
                    <tr key={category.id}>
                        <td className="table-data">
                            <div className="data">{category.name}</div>
                        </td>
                        <td className="table-data">
                            <div className="data">{getItemCount(category.id) === 0 ? 'Aucun' : getItemCount(category.id)}</div>
                        </td>
                        <td className="table-data text-sm font-medium">
                            <button
                                onClick={() => handleDelete(category.id)}
                                className="delete-button"
                            >
                                Supprimer
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default CategoriesList;