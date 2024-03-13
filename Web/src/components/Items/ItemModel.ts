import {useEffect, useState} from "react";
import axios from "axios";
import {Item} from "../../types/itemTypes";

export const useItems = () => {
    // initialise un tableau vide
    const [items, setItems] = useState<Item[]>([]);
    // récupère la liste d'items
    useEffect(() => {
        axios.get("http://localhost:5113/api/Items")
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return { items, setItems };
};

export const useDeleteItem = () => {
    return (itemId: number) => {
        // génère un json de suppression de l'item spécifié
        axios.delete(`http://localhost:5113/api/Items/${itemId}`)
            .then(response => {
                console.log("Item supprimé", response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la suppression de l'item", error);
            });
    };
};