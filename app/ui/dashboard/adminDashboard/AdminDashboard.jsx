"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardPage = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/cursos');
                console.log('Datos de cursos recibidos:', response.data); // Agregado para mostrar los datos recibidos
                setCursos(response.data);
            } catch (error) {
                console.error('Error fetching cursos:', error);
            }
        };

        fetchCursos();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cursos.map(cursos => (
                        <div key={cursos.ID} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={cursos.imageUrl} alt={cursos.NombreCurso} className="w-full h-40 object-cover" />
                            
                            <div className="p-6">
                                <h2 className="text-xl text-black font-semibold mb-2">{cursos.NombreCurso}</h2>

                        
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardPage;
