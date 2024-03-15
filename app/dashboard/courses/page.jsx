'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './courses.css'

const CardPage = () => {
    const [cursos, setCursos] = useState([]);
    const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/cursos');
                console.log('Datos de cursos recibidos:', response.data);
                setCursos(response.data);
            } catch (error) {
                console.error('Error fetching cursos:', error);
            }
        };

        fetchCursos();
    }, []);

    const handleCursoClick = async (cursoID) => {
        try {
            const responseCurso = await axios.get(`http://localhost:8000/cursos/${cursoID}`);
            console.log('Datos del curso seleccionado:', responseCurso.data);
            setCursoSeleccionado(responseCurso.data);

            // Obtener el contenido del curso si hay un ID de contenido
            if (responseCurso.data.contenidocurso_ID) {
                const responseContenido = await axios.get(`http://localhost:8000/contenido/${responseCurso.data.contenidocurso_ID}`);
                console.log('Contenido del curso:', responseContenido.data);
                // Agregar el contenido del curso al objeto del curso seleccionado
                setCursoSeleccionado(prevCursoSeleccionado => ({
                    ...prevCursoSeleccionado,
                    contenidocurso: responseContenido.data
                }));
            }

            // Abrir el modal
            setModalVisible(true);
        } catch (error) {
            console.error('Error fetching curso content:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cursos.map(curso => (
                        <div key={curso.ID} className="hover:shadow-xl cursor-pointer bg-white rounded-lg shadow-md overflow-hidden" onClick={() => handleCursoClick(curso.ID)}>
                            <img src={curso.imageUrl} alt={curso.NombreCurso} className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl text-black font-semibold mb-2">{curso.NombreCurso}</h2>
                                <button className="flex items-center text-white" onClick={() => handleVerMasClick(curso.ID)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 mr-1">
                                        <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" fill="currentColor"/>
                                    </svg>
                                    <span>Ver más</span>
                                </button>




                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalVisible && cursoSeleccionado && cursoSeleccionado.contenidocurso && (
    <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{cursoSeleccionado.NombreCurso}</h3>
                    {cursoSeleccionado.contenidocurso && (
                        <>
                            <p className="text-sm text-gray-500 mb-2">Tipo de Recurso: {cursoSeleccionado.contenidocurso.TipoRecurso}</p>
                            <p className="text-sm text-gray-700">{cursoSeleccionado.contenidocurso.Contenido}</p>
                            <p className="text-sm text-gray-700">{cursoSeleccionado.contenidocurso.Descripcion}</p>
                        </>
                    )}
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button onClick={() => setModalVisible(false)} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
)}

        </div>
    );
};

export default CardPage;
