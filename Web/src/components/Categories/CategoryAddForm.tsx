import React, { useState, FormEvent } from 'react'; // import FormEvent
import { Category } from "../../types/categoryTypes";

interface CategoryAddFormProps {
    addCategory: (newCategory: Category) => Promise<Category>;
}

// Ajout des props dans la liste des arguments de la fonction
export const CategoryAddForm: React.FC<CategoryAddFormProps> = ({ addCategory }) => {
    const [newCategoryName, setNewCategoryName] = useState('');

    // Gestion de l'événement de soumission du formulaire
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newCategory = {  name: newCategoryName, items: null }
        addCategory(newCategory);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Ajouter une catégorie: </label>
            <input type="text" value={newCategoryName} onChange={e => setNewCategoryName(e.target.value)} />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default CategoryAddForm;