import React from "react";
import { useCategories, useDeleteCategory } from "./CategoryModel.ts";

const CategoriesList: React.FC = () => {
    const { categories } = useCategories();
    const deleteCategory = useDeleteCategory();

    const handleDelete = async (id: number) => {
        await deleteCategory(id);
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Liste des categories</h2>
            <div className="flex flex-col">
                {categories.map(category => (
                    <div key={category.id}
                         className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                        <div>
                            <p className="text-gray-600">{category.name}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleDelete(category.id)}
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

export default CategoriesList;