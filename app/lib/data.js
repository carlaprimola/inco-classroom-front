"use client"
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const fetchUsers = async () => {
    const user_id = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    try {
        // Realizar la solicitud GET al backend incluyendo el token en el encabezado
        const response = await axios.get(`${BASE_URL}/usuarios/${user_id}`, {
            headers: {
                'userstoken': token // Incluir el token en el encabezado como 'userstoken'
            }
        });

        // Verificar el formato de los datos devueltos
        console.log('Datos de usuarios recibidos:', response.data);

        return response.data;
    } catch (error) {
        // Manejar errores de solicitud o formato de datos
        console.error('Error al obtener usuarios:', error);
        throw new Error('Error al obtener usuarios. Por favor, inténtalo de nuevo.');
    }
};