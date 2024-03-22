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
            const response = await axios.post("http://localhost:8000/login", { email, password });
            const { token, user_id } = response.data; // Extraer el token y los datos del usuario de la respuesta del servidor
            localStorage.setItem('token', token); // Almacenar el token en localStorage
            localStorage.setItem('user', user_id); // Almacenar los datos del usuario en localStorage
        
            window.location.href = "/dashboard";
        } catch (error) {
            setError("Email o contraseña incorrectos");
            console.log(error)
        }
    };

    return (
        <div className="h-screen w-full bg-cover relative">
            <div className="absolute inset-0" style={{ backgroundImage: "url('/images/Image_Header1_49d601fa4c.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="absolute inset-0 bg-[#08215C] opacity-80"></div>
            <div className="h-full flex items-center justify-center">
                <div className="w-full">
                    <div className="flex flex-col hover:blur-0 bg-center bg-cover items-center justify-center w-full gap-5 relative z-10">
                        <h1 className="my-6">
                            <img src='/images/incoBLanco.svg' alt="Logo" />
                        </h1>
                        <ul className="inline-flex items-center text-xl gap-10">
                            {/* List Items */}
                        </ul>
                        <p className="text-white text-right">or use email your account</p>
                        <input
                            type="email"
                            className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                            placeholder="Enter Your Email Here!"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                            placeholder="Enter Your Password Here!"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="text-right">
                            <a
                                href=""
                                className="italic text-white/50 text-sm underline decoration-violet-500 text-violet-500 hover:text-white transition"
                            >
                                Forget your Password?
                            </a>
                        </div>
                        <ButtonLogin text="Enviar" onClick={handleLogin} className="bg-[#007AFF]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
