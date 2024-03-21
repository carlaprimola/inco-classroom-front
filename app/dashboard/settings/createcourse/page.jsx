// pagina de configuracion cursos
// pagina de configuracion cursos
"use client";
import React, { useState } from "react";
import axios from "axios";

const CreateCoursePage = () => {
    const [curso, setCurso] = useState({
        NombreCurso: "",
        imageUrl: "",
        Docente: "",
        Duracion: "",
        contenidocurso: {
            TituloMaterial: "",
            TipoRecurso: "",
            Contenido: "",
            Descripcion: ""
        }
    });

    const createCurso = async () => {
        try {
            await axios.post(`http://localhost:8000/cursos`, curso);
            console.log("Curso creado correctamente");
            // Redirigir a la página de configuración u otra página adecuada
        } catch (error) {
            console.error("Error creating curso:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurso(prevCurso => ({
            ...prevCurso,
            [name]: value
        }));
    };

    const handleContentInputChange = (event) => {
        const { name, value } = event.target;
        setCurso(prevCurso => ({
            ...prevCurso,
            contenidocurso: {
                ...prevCurso.contenidocurso,
                [name]: value
            }
        }));
    };

    return (
        <div style={{ textAlign: "center", color: "black" }}>
            <h1>Create Curso</h1>
            <form onSubmit={createCurso} style={{ display: "inline-block" }}>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Nombre del Curso</label>
                    <input
                        type="text"
                        name="NombreCurso"
                        value={curso.NombreCurso}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Imagen</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={curso.imageUrl}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Docente</label>
                    <input
                        type="text"
                        name="Docente"
                        value={curso.Docente}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Duración</label>
                    <input
                        type="text"
                        name="Duracion"
                        value={curso.Duracion}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                {/* Campos del contenido del curso */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Título del Material</label>
                    <input
                        type="text"
                        name="TituloMaterial"
                        value={curso.contenidocurso.TituloMaterial}
                        onChange={handleContentInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Tipo de Recurso</label>
                    <input
                        type="text"
                        name="TipoRecurso"
                        value={curso.contenidocurso.TipoRecurso}
                        onChange={handleContentInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Contenido</label>
                    <input
                        type="text"
                        name="Contenido"
                        value={curso.contenidocurso.Contenido}
                        onChange={handleContentInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Descripción</label>
                    <input
                        type="text"
                        name="Descripcion"
                        value={curso.contenidocurso.Descripcion}
                        onChange={handleContentInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                {/* Botón para crear el curso */}
                <button type="submit" style={{ width: "150px", height: "40px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>Crear Curso</button>
            </form>
        </div>
    );
}

export default CreateCoursePage;

