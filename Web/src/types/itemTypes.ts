import {Category} from "./categoryTypes.ts";

export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    disponibility: boolean;
    idUser?: number; 
    idCategory?: number;
    category?: Category;
}