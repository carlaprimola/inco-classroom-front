// // Configurar Axios con el token en los encabezados de todas las solicitudes
// axios.interceptors.request.use(
//     (config) => {
//         const token = getToken();
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// //Axios con el token en los encabezados de todas las solicitudes
// axios.interceptors.request.use(
//     (config) => {
//         const token = getToken();
//         if (token) {
//             config.headers.userstoken = token;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );
