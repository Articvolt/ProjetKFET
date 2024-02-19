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
        <div>
            <h2>Items List</h2>
            {items.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ItemsList;