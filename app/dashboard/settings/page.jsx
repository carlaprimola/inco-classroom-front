// pagina de configuracion cursos
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditCourse from "./editCourse.jsx";

export default function CourseSettings() {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await axios.get("http://localhost:8000/cursos");
                console.log("Datos de cursos recibidos:", response.data);
                setCursos(response.data);
            } catch (error) {
                console.error("Error fetching cursos:", error);
            }
        };

        fetchCursos();
    }, []);

    // Función para eliminar curso
    const deleteCurso = async (cursoID) => {
        try {
            await axios.delete(`http://localhost:8000/cursos/${cursoID}`);
            // Actualizar la lista de cursos después de eliminar uno
            fetchCursos();
        } catch (error) {
            console.error('Error deleting curso:', error);
        }
    };

    return (
        <main>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nombre del Curso</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID del Contenido del Curso</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Docente</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Duración</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {cursos.map(curso => (
                        <tr key={curso.ID}>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{curso.NombreCurso}</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{curso.imageUrl}</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 text-center">{curso.contenidocurso_ID}</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{curso.Docente}</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{curso.Duracion}</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                            <Link href={`settings/edit/${curso.ID}`}>
                                    <button className="w-10 h-10 text-center justify-center button-courses flex items-center text-white mb-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-md"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                </Link>
                                <button className="w-10 h-10 text-center justify-center button-courses flex items-center text-white mb-3 bg-red-500 hover:bg-red-600 rounded-full shadow-md" onClick={() => deleteCurso(curso.ID)}><FontAwesomeIcon icon={faTrash} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
