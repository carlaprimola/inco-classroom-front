// import axios from "axios";

// const getUserData = async (userId) => {
//     try {
//         const token = localStorage.getItem("token"); // Obtener el token JWT del almacenamiento local
//         const response = await axios.get(`http://localhost:8000/usuarios/${userId}`, {
//             headers: {
//                 userstoken: token, // Incluir el token en los encabezados de la solicitud
//             },
//         });
//         return response.data; // Devuelve los datos del usuario obtenidos del backend
//     } catch (error) {
//         console.error("Error al obtener los datos del usuario:", error);
//         throw error;
//     }
// };

// export default getUserData;
