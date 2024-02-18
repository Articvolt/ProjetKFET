import React, { useEffect, useState } from 'react';
import { fetchItems, deleteItem } from '../../api/ApiService';
import { Item } from '../../types/itemTypes';

const ItemsList: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const getItems = async () => {
            const items = await fetchItems();
            console.log(items); // Ajoutez cette ligne pour le debugging
            setItems(items);
        };
        getItems();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteItem(id);
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div>
            <h2>Items List</h2>
            {items.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    {/* Affichez d'autres détails de l'item ici */}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ItemsList;
