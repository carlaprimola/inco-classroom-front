
"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditCourseContentPage = () => {
    const [curso, setCurso] = useState({
        contenidocurso: {
            TituloMaterial: "",
            TipoRecurso: "",
            Contenido: "",
            Descripcion: ""
        }
    });

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if (id) {
            obtenerDatosCurso(id);
        }
    }, []);

    // const obtenerDatosCurso = async (id) => {
    //     try {
    //         const response = await axios.get(`http://localhost:8000/cursos/${id}`);
    //         setCurso(response.data);
    //     } catch (error) {
    //         console.error("Error al obtener el curso:", error);
    //     }
    // };

    const obtenerDatosCurso = async (id) => {
        try {
            const cursoResponse = await axios.get(`http://localhost:8000/cursos/${id}`);
            const contenidoResponse = await axios.get(`http://localhost:8000/contenido/${id}`); // Cambia la URL según corresponda
            const cursoData = cursoResponse.data;
            const contenidoData = contenidoResponse.data;
            
            setCurso({
                ...cursoData,
                contenidocurso: {
                    ...contenidoData
                }
            });
        } catch (error) {
            console.error("Error al obtener el curso:", error);
        }
    };
    
    const actualizarCurso = async () => {
        try {
            const params = new URLSearchParams(window.location.search);
            const id = params.get("id");
            await axios.put(`http://localhost:8000/contenido/${id}`, curso.contenidocurso);
            console.log("Curso actualizado correctamente");
            window.location.href = "/dashboard/settings";
        } catch (error) {
            console.error("Error al actualizar el curso:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurso(prevCurso => ({
            ...prevCurso,
            contenidocurso: {
                ...prevCurso.contenidocurso,
                [name]: value
            }
        }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita que el formulario se envíe por defecto
    
        try {
            const params = new URLSearchParams(window.location.search);
            const id = params.get("id");
            await axios.put(`http://localhost:8000/contenido/${id}`, curso.contenidocurso);
            console.log("Curso actualizado correctamente");
            window.location.href = "/dashboard/settings";
        } catch (error) {
            console.error("Error al actualizar el curso:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", color: "black" }}>
            <h1>Editar Contenido del Curso</h1>
            <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Título del Material</label>
                    <input
                        type="text"
                        name="TituloMaterial"
                        value={curso.contenidocurso.TituloMaterial}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Tipo de Recurso</label>
                    <input
                        type="text"
                        name="TipoRecurso"
                        value={curso.contenidocurso.TipoRecurso}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Contenido</label>
                    <input
                        type="text"
                        name="Contenido"
                        value={curso.contenidocurso.Contenido}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Descripción</label>
                    <input
                        type="text"
                        name="Descripcion"
                        value={curso.contenidocurso.Descripcion}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Contenido</label>
                    <input
                        type="text"
                        name="Contenido"
                        value={curso.contenidocurso.Opiniones}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Aptitud1</label>
                    <input
                        type="text"
                        name="Aptitud1"
                        value={curso.contenidocurso.Aptitud1}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Aptitud2</label>
                    <input
                        type="text"
                        name="Aptitud2"
                        value={curso.contenidocurso.Aptitud2}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Aptitud3</label>
                    <input
                        type="text"
                        name="Aptitud3"
                        value={curso.contenidocurso.Aptitud3}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Nivel</label>
                    <input
                        type="text"
                        name="Nivel"
                        value={curso.contenidocurso.Nivel}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>


                {/* Botón para actualizar el curso */}
                <button type="submit" style={{ width: "150px", height: "40px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>Actualizar Curso</button>
            </form>
        </div>
    );
}

export default EditCourseContentPage;
