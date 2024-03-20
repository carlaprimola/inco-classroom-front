import React from 'react';
import ButtonHome from './ui/dashboard/button/ButtonHome';

const Homepage = () => {
    return (
        <div>
            <main className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden flex flex-col justify-center items-center">
                <section className="absolute inset-0">
                    <video autoPlay muted loop playsInline type="video/mp4" src="/video/inco_video1.mp4" className="object-cover object-center w-full h-full"></video>
                    <div className="absolute inset-0 bg-[#44D8CA] opacity-40"></div>
                </section>
                <span className="flex justify-center items-center w-full h-full z-10">
                    <img src='/images/incoBLanco.svg' alt="Logo" className="w-96 h-auto" />
                </span>
                <section className="relative z-10 flex flex-col justify-center items-center mt-[-8%] h-full text-center">
                    <h1 className="text-5xl font-bold leading-tight mb-4">¡Bienvenidos a la academia!</h1>
                    <p className="text-lg text-gray-300 mb-8">Aqui comienza tu verdadera formación.</p>
                    <div className="flex flex-row gap-10"> {/* Flexbox container con un espacio entre los elementos */}
                        <ButtonHome text="SOY ESTUDIANTE" href="/login" />
                        <ButtonHome text="SOY PROFESOR" href="/login" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Homepage;
