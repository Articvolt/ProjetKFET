import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../../types/categoryTypes";

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5113/api/Categories/")
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const addCategory = async (newCategory: Category): Promise<Category> => {
        try {
            const response = await axios.post<Category>("http://localhost:5113/api/Categories/", newCategory);
            if (response.status === 201) {
                setCategories(oldCategories => [...oldCategories, response.data]);
                // Return newly added category
                return response.data;
            }
        } catch (error) {
            console.error('Failed to add new category', error);
        }
        return newCategory;
    };

    const deleteCategory = (categoryId: number) => {
        axios.delete(`http://localhost:5113/api/Categories/${categoryId}`)
            .then(response => {
                console.log("Catégorie supprimée", response.data);
                setCategories(oldCategories => oldCategories.filter(category => category.id !== categoryId));
            })
            .catch(error => {
                console.error("Erreur lors de la suppression de la catégorie", error);
            });
    };

    return { categories, addCategory, deleteCategory };
};
