import React from "react";
import { useItems, useDeleteItem } from "./ItemModel.ts";
import { useCategories } from "../Categories/CategoryModel.ts";

const ItemsList: React.FC = () => {
    const { items } = useItems();
    const { categories } = useCategories();
    const deleteItem = useDeleteItem();

    const handleDelete = async (id: number) => {
        await deleteItem(id);
    };

    // Fonction pour trouver le nom de la catégorie par idCategory
    const getCategoryName = (idCategory: number | undefined) => {
        const category = categories.find(cat => cat.id === idCategory);
        return category ? category.name : 'Non catégorisé';
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Liste des produits</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="table-header">
                        Nom
                    </th>
                    <th scope="col" className="table-header">
                        Description
                    </th>
                    <th scope="col" className="table-header">
                        Catégorie
                    </th>
                    <th scope="col" className="table-header">
                        Disponible
                    </th>
                    <th scope="col" className="table-header">
                        Quantité
                    </th>
                    <th scope="col" className="table-header">
                        Prix
                    </th>
                    <th scope="col" className="table-header">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {items.map(item => (
                    <tr key={item.id}>
                        <td className="table-data">
                            <div className="text-sm text-gray-500">{item.name}</div>
                        </td>
                        <td className="table-data">
                            <div className="text-sm text-gray-500">{item.description}</div>
                        </td>
                        <td className="table-data">
                            <div className="text-sm text-gray-500">{getCategoryName(item.idCategory)}</div>
                        </td>
                        <td className="table-data">
                            <div className="text-sm text-gray-500">{item.disponibility ? 'Oui' : 'Non'}</div>
                        </td>
                        <td className="table-data">
                            <div className="text-sm text-gray-500">{item.quantity}</div>
                        </td>
                        <td className="table-data">
                            <div className="text-sm text-gray-500">{item.price} euros</div>
                        </td>
                        <td className="table-data text-sm font-medium">
                            <button
                                onClick={() => handleDelete(item.id)}
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

export default ItemsList;