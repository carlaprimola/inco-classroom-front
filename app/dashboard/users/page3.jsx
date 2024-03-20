"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faEye, faXmark, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import styles from "./users.module.css"; // Importa los estilos CSS específicos de usuarios
import StartUserButton from "../../ui/dashboard/users/StartUserButton"; // Importa el botón para comenzar usuario
import ShareUserButton from "../../ui/dashboard/users/ShareUserButton"; // Importa el botón para compartir usuario

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8000/usuarios");
                console.log("Datos de usuarios recibidos:", response.data);
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleUserClick = async (userID) => {
        try {
            const responseUser = await axios.get(`http://localhost:8000/usuarios/${userID}`);
            console.log("Datos del usuario seleccionado:", responseUser.data);
            setSelectedUser(responseUser.data);

            // Abrir el modal
            setModalVisible(true);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    // Botón para comenzar usuario
    const handleStartUserClick = () => {
        console.log("Comenzar usuario");
    };

    // Botón para compartir usuario
    const handleShareUserClick = () => {
        console.log("Compartir usuario");
    };

    return (
        <main className="bg-gray-100 min-h-screen py-16">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {users.map((user) => (
                        <div
                            key={user.ID}
                            className="w-50 h-90 hover:shadow-xl cursor-pointer bg-white rounded-lg shadow-md overflow-hidden"
                            onClick={() => handleUserClick(user.ID)}
                        >
                            {/* Aquí puedes agregar la imagen del usuario si tienes una */}
                            <div className="p-5">
                                <h2 className="text-xl text-black font-semibold text-center h-40">
                                    {user.Nombre}
                                </h2>
                                {/* Otros detalles del usuario, como correo electrónico, rol, etc. */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            {modalVisible && selectedUser && (
                <main className="fixed z-10 inset-0 overflow-y-auto">
                    <section className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <div className="w-200 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                            {/* Contenido del modal */}
                            {/* Puedes mostrar detalles adicionales del usuario aquí */}
                            {/* Puedes agregar botones para acciones adicionales, como comenzar usuario, compartir, etc. */}
                            <footer className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-center">
                                {/* Botón para comenzar usuario */}
                                <StartUserButton onClick={handleStartUserClick} />
                                {/* Botón para compartir usuario */}
                                <ShareUserButton onClick={handleShareUserClick} />
                            </footer>
                        </div>
                    </section>
                </main>
            )}
        </main>
    );
};

export default UsersPage;
