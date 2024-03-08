import React from "react";
import { useItems, useDeleteItem } from "./ItemModel.ts"; 


const ItemsList: React.FC = () => {
    const { items } = useItems();
    const deleteItem = useDeleteItem();

    const handleDelete = async (id: number) => {
        await deleteItem(id);
        // You should also update the items state to reflect the deletion
        // For example, you can call setItems with the updated list
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Liste des produits</h2>
            {items.length === 0 ? (
                <p className="text-center text-gray-600">Aucun produits en base de données</p>
            ) : (
                <div className="flex flex-col">
                    {items.map(item => (
                        <div key={item.id}
                             className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                            <div>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-600">{item.description}</p>
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
            )}
        </div>
    );
};

export default ItemsList;