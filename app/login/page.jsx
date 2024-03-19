//El login se conecta con el backend a través de una solicitud HTTP POST enviada desde el frontend al endpoint /login, donde el backend ejecuta la lógica de autenticación y devuelve una respuesta al frontend indicando si el inicio de sesión fue exitoso o no.

"use client"
import React, { useState } from "react";
import axios from "axios";
import ButtonLogin from "../ui/dashboard/button/ButtonLogin";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/login', {
                email: email,
                password: password
            });

            // Si la respuesta es exitosa, establece loggedIn en true
            setLoggedIn(true);
            console.log(response.data);
        } catch (error) {
            console.error('Error de inicio de sesión:', error);
        }
    };

    // Si loggedIn es true, redirige al usuario a la página deseada
    if (loggedIn) {
        return (
            <div>
                <p>Iniciaste sesión correctamente. Serás redirigido...</p>
                <Link href="/dashboard">
                    <a>Ir al panel de control</a>
                </Link>
            </div>
        );
    }

    return (
        <div className="h-screen w-full bg-cover relative">
            {/* Resto del código del componente de inicio de sesión */}
            {/* ... */}
        </div>
    );
};

export default Login;
