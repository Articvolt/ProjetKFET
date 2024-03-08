import axios from 'axios';
import { User } from '../types/userTypes.ts';

const API_BASE_URL = 'http://localhost:5113/api/users';

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>('http://localhost:5113/api/users');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return []; // Retourne un tableau vide en cas d'erreur
    }
};

export const fetchUserById = async (id: number): Promise<User> => {
    const response = await axios.get<User>(`${API_BASE_URL}/${id}`);
    return response.data;
};

export const createUser = async (user: User): Promise<User> => {
    const response = await axios.post<User>(API_BASE_URL, user);
    return response.data;
};

export const updateUser = async (id: number, item: User): Promise<void> => {
    await axios.put(`${API_BASE_URL}/${id}`, item);
};

export const deleteUser = async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/${id}`);
};
