import axios from "axios";

// Función para obtener el token de autenticación del almacenamiento local
const getToken = () => {
    return localStorage.getItem("token");
};

// Configurar Axios con el token en los encabezados de todas las solicitudes
axios.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Exportar Axios configurado
export default axios;
