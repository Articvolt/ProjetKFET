import axios from 'axios';
import { Item } from '../types/itemTypes';

const API_BASE_URL = 'http://localhost:5113/api/items';

export const fetchItems = async (): Promise<Item[]> => {
    try {
        const response = await axios.get<Item[]>('http://localhost:5113/api/items');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch items:', error);
        return []; // Retourne un tableau vide en cas d'erreur
    }
};

export const fetchItemById = async (id: number): Promise<Item> => {
    const response = await axios.get<Item>(`${API_BASE_URL}/${id}`);
    return response.data;
};

export const createItem = async (item: Item): Promise<Item> => {
    const response = await axios.post<Item>(API_BASE_URL, item);
    return response.data;
};

export const updateItem = async (id: number, item: Item): Promise<void> => {
    await axios.put(`${API_BASE_URL}/${id}`, item);
};

export const deleteItem = async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/${id}`);
};
