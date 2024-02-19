import {useEffect, useState} from "react";
import axios from "axios";
import {Item} from "../../types/itemTypes";

export const useItems = () => {
    const [items, setItems] = useState<Item[]>([]);

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
        axios.delete(`http://localhost:5113/api/Items/${itemId}`)
            .then(response => {
                console.log("Item supprimé", response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la suppression de l'item", error);
            });
    };
};