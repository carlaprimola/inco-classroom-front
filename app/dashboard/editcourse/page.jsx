// dashboard/editcourse/page.jsx
"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

// Función para obtener los datos del curso por ID
const getCourseById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/cursos/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching curso:", error);
        return null;
    }
};

const EditCoursePage = () => {
    const [curso, setCurso] = useState({
        NombreCurso: "",
        imageUrl: "",
        contenidocurso_ID: "",
        Docente: "",
        Duracion: "",
    });

    useEffect(() => {
        // Obtener el ID del curso de la URL
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if (id) {
            // Obtener los datos del curso por ID cuando el ID esté disponible en la URL
            getCourseData(id);
        }
    }, []);

    const getCourseData = async (id) => {
        const cursoData = await getCourseById(id);
        if (cursoData) {
            setCurso(cursoData);
        }
    };

    // Función para actualizar los datos del curso
    const updateCurso = async () => {
        try {
            // Obtener el ID del curso de la URL
            const params = new URLSearchParams(window.location.search);
            const id = params.get("id");
            await axios.put(`http://localhost:8000/cursos/${id}`, curso);
            console.log("Curso actualizado correctamente");
            // Redirigir a la página de administración de cursos después de la actualización
            window.location.href = "/dashboard/settings";
        } catch (error) {
            console.error("Error updating curso:", error);
        }
    };

    const updateContenido = async () => {
        try {
            // Lógica para actualizar el contenido del curso
            console.log("Contenido del curso actualizado correctamente");
        } catch (error) {
            console.error("Error updating contenido del curso:", error);
        }
    };

    const addContenido = async () => {
        try {
            // Lógica para añadir contenido al curso
            console.log("Contenido añadido al curso correctamente");
        } catch (error) {
            console.error("Error adding contenido to curso:", error);
        }
    };


    return (
        <div style={{ textAlign: "center", color: "black" }}>
            <h1>Edit Curso</h1>
            <form onSubmit={updateCurso} style={{ display: "inline-block", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Nombre del Curso</label>
                    <input
                        type="text"
                        value={curso.NombreCurso}
                        onChange={(e) => setCurso({ ...curso, NombreCurso: e.target.value })}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Imagen</label>
                    <input
                        type="text"
                        value={curso.imageUrl}
                        onChange={(e) => setCurso({ ...curso, imageUrl: e.target.value })}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>ID del Contenido del Curso</label>
                    <input
                        type="text"
                        value={curso.contenidocurso_ID}
                        onChange={(e) => setCurso({ ...curso, contenidocurso_ID: e.target.value })}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Docente</label>
                    <input
                        type="text"
                        value={curso.Docente}
                        onChange={(e) => setCurso({ ...curso, Docente: e.target.value })}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Duración</label>
                    <input
                        type="text"
                        value={curso.Duracion}
                        onChange={(e) => setCurso({ ...curso, Duracion: e.target.value })}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <button type="submit" style={{ width: "150px", height: "40px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>Actualizar Curso</button>
            </form>
            <div style={{ marginTop: "20px" }}>
                <h2>Edit Contenido del Curso</h2>
                <textarea
                    value={curso.contenido}
                    onChange={(e) => setCurso({ ...curso, contenido: e.target.value })}
                    style={{ width: "100%", height: "150px", marginBottom: "10px" }}
                />
                <div>
                    <button onClick={updateContenido} style={{ marginRight: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer" }}>Actualizar Contenido</button>
                    <input type="text" value={curso.nuevoContenido} onChange={(e) => setCurso({ ...curso, nuevoContenido: e.target.value })} style={{ marginRight: "10px", width: "300px", padding: "5px" }} />
                    <button onClick={addContenido} style={{ backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer" }}>Añadir Contenido</button>
                </div>
            </div>
        </div>
    );
};

export default EditCoursePage;
