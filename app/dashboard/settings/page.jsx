// pagina de configuracion cursos
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

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
            <h1 className="text-black">Administración de Cursos</h1>
            <table>
                <thead>
                    <tr>
                        <th className="text-black">Nombre del Curso</th>
                        <th className="text-black">Imagen</th>
                        <th className="text-black">ID del Contenido del Curso</th>
                        <th className="text-black">Docente</th>
                        <th className="text-black">Duración</th>
                        <th className="text-black">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map(curso => (
                        <tr key={curso.ID}>
                            <td className="text-black">{curso.NombreCurso}</td>
                            <td className="text-black">{curso.imageUrl}</td>
                            <td className="text-center text-black">{curso.contenidocurso_ID}</td>
                            <td className="text-black">{curso.Docente}</td>
                            <td className="text-black">{curso.Duracion}</td>
                            <td>
                                <Link href={`/edit/${curso.ID}`}>
                                    <button className=" w-10 h-10 text-center justify-center button-courses flex items-center text-white mb-3  bg-blue-500"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                </Link>
                                <button className="w-10 h-10 text-center justify-center button-courses flex items-center text-white mb-3 bg-red-500" onClick={() => deleteCurso(curso.ID)}><FontAwesomeIcon icon={faTrash} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
