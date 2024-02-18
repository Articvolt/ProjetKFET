export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    disponibility: boolean;
    idUser?: number; 
    idCategory?: number; 
    // Omettez User, Category, et Adds pour simplifier, sauf si vous avez besoin de les afficher
}