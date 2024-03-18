"use client"
import React, { useState } from "react";
import axios from "axios";
import ButtonLogin from "../ui/components/button/ButtonLogin";

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
            setError("Email o contraseÃ±a incorrectos");
            console.log(error)
        }
    };

    return (
        <div className="h-screen w-full bg-cover relative">
            {/* Resto del código del componente de inicio de sesión */}
            {/* ... */}
        </div>
    );
};

export default Login;