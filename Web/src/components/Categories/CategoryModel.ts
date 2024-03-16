import {useEffect, useState} from "react";
import axios from "axios";
import {Category} from "../../types/categoryTypes";

export const useCategories = () => {
    // initialise un tableau vide
    const [categories, setCategories] = useState<Category[]>([]);
    
    // récupère la liste de catégories
    useEffect(() => {
        axios.get("http://localhost:5113/api/Categories/")
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return { categories, setCategories };
};

export const useDeleteCategory = () => {
    return (categoryId: number) => {
        // génère un json de suppression de la catégorie spécifiée
        axios.delete(`http://localhost:5113/api/Categories/${categoryId}`)
            .then(response => {
                console.log("Catégorie supprimée", response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la suppression de la catégorie", error);
            });
    };
};