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
            <h2 className="text-2xl font-bold mb-4">Liste des produits</h2>
                <div className="flex flex-col">
                    {items.map(item => (
                        <div key={item.id}
                             className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                            <div>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-600">{item.description}</p>
                                <p className="text-gray-600">Catégorie: {getCategoryName(item.idCategory)}</p>
                            </div>
                            <div className="flex space-x-2">
                            <button
                                    onClick={() => handleDelete(item.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default ItemsList;