// import axios from 'axios';

// const BASE_URL = 'http://localhost:8000';

// export const fetchUsers = async (q, page) => {
//     try {
//         // Realizar la solicitud GET al backend
//         const response = await axios.get(`${BASE_URL}/usuarios?q=${q}&page=${page}`);
        
//         // Verificar el formato de los datos devueltos
//         console.log('Datos de usuarios recibidos:', response.data);

//         // Asegurarse de que la respuesta contenga un arreglo de usuarios
//         if (!Array.isArray(response.data)) {
//             throw new Error('La respuesta no contiene un arreglo de usuarios.');
//         }

//         // Devolver los datos de usuarios
//         return response.data;
//     } catch (error) {
//         // Manejar errores de solicitud o formato de datos
//         console.error('Error al obtener usuarios:', error);
//         throw new Error('Error al obtener usuarios. Por favor, inténtalo de nuevo.');
//     }
// };


// import { Product, User } from "./models";
// import { connectToDB } from "./utils";

// export const fetchUsers = async (q, page) => {
//     const regex = new RegExp(q, "i");

//     const ITEM_PER_PAGE = 2;

    // try {
    //     connectToDB();
    //     const count = await User.find({ username: { $regex: regex } }).count();
    //     const users = await User.find({ username: { $regex: regex } })
    //         .limit(ITEM_PER_PAGE)
    //         .skip(ITEM_PER_PAGE * (page - 1));
    //     return { count, users };
    // } catch (err) {
    //     console.log(err);
    //     throw new Error("Failed to fetch users!", err);
    // }


// export const fetchUser = async (id) => {
//     console.log(id);
//     try {
//         connectToDB();
//         const user = await User.findById(id);
//         return user;
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to fetch user!");
//     }
// };

// export const fetchProducts = async (q, page) => {
//     console.log(q);
//     const regex = new RegExp(q, "i");

//     const ITEM_PER_PAGE = 2;

//     try {
//         connectToDB();
//         const count = await Product.find({ title: { $regex: regex } }).count();
//         const products = await Product.find({ title: { $regex: regex } })
//             .limit(ITEM_PER_PAGE)
//             .skip(ITEM_PER_PAGE * (page - 1));
//         return { count, products };
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to fetch products!");
//     }
// };

// export const fetchProduct = async (id) => {
//     try {
//         connectToDB();
//         const product = await Product.findById(id);
//         return product;
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to fetch product!");
//     }
// };

// // DUMMY DATA

// export const cards = [
//     {
//         id: 1,
//         title: "Total Users",
//         number: 10.928,
//         change: 12,
//     },
//     {
//         id: 2,
//         title: "Stock",
//         number: 8.236,
//         change: -2,
//     },
//     {
//         id: 3,
//         title: "Revenue",
//         number: 6.642,
//         change: 18,
//     },
// ];