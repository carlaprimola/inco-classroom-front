"use client"
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EditCoursePage = () => {
//     const [curso, setCurso] = useState({
//         NombreCurso: "",
//         imageUrl: "",
//         Docente: "",
//         Duracion: "",
//         contenidocurso_ID: "",
//         contenidocurso: {
//             TituloMaterial: "",
//             TipoRecurso: "",
//             Contenido: "",
//             Descripcion: "",
//             Opiniones: "",
//             Aptitud1: "",
//             Aptitud2: "",
//             Aptitud3: "",
//             Nivel: ""
//         }
//     });

//     useEffect(() => {
//         const params = new URLSearchParams(window.location.search);
//         const id = params.get("id");
//         if (id) {
//             getCourseData(id);
//         }
//     }, []);

//     const getCourseData = async (id) => {
//         try {
//             const response = await axios.get(`http://localhost:8000/cursos/${id}`);
//             setCurso(response.data);
//         } catch (error) {
//             console.error("Error fetching curso:", error);
//         }
//     };

//     const updateCurso = async () => {
//         try {
//             const params = new URLSearchParams(window.location.search);
//             const id = params.get("id");
            
//             const updatedData = {
//                 ...curso,
//                 contenidocurso: {
//                     ...curso.contenidocurso,
//                     ID: curso.contenidocurso_ID // Suponiendo que ID se necesita para identificar el contenido del curso en el servidor
//                 }
//             };
            
//             await axios.put(`http://localhost:8000/cursos/${id}`, updatedData);
            
//             console.log("Curso actualizado correctamente");
//             window.location.href = "/dashboard/settings";
//         } catch (error) {
//             console.error("Error updating curso:", error);
//         }
//     };
    

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
    
//         // If the field is nested within curso, update the nested state
//         if (curso.hasOwnProperty(name)) {
//             setCurso(prevCurso => ({
//                 ...prevCurso,
//                 [name]: value
//             }));
//         }
    
//         // If the field is nested within contenidocurso, update the nested state
//         if (curso.contenidocurso && curso.contenidocurso.hasOwnProperty(name)) {
//             setCurso(prevCurso => ({
//                 ...prevCurso,
//                 contenidocurso: {
//                     ...prevCurso.contenidocurso,
//                     [name]: value
//                 }
//             }));
//         }
//     };
    
//     return (
//         <div style={{ textAlign: "center", color: "black" }}>
//             <h1>Edit Curso</h1>
//             <form onSubmit={updateCurso} style={{ display: "inline-block" }}>
//                 <div style={{ marginBottom: "15px" }}>
//                     <label style={{ marginRight: "10px" }}>Nombre del Curso</label>
//                     <input
//                         type="text"
//                         name="NombreCurso"
//                         value={curso.NombreCurso}
//                         onChange={handleInputChange}
//                         style={{ width: "300px", height: "30px", padding: "5px" }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: "15px" }}>
//                     <label style={{ marginRight: "10px" }}>Imagen</label>
//                     <input
//                         type="text"
//                         name="imageUrl"
//                         value={curso.imageUrl}
//                         onChange={handleInputChange}
//                         style={{ width: "300px", height: "30px", padding: "5px" }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: "15px" }}>
//                     <label style={{ marginRight: "10px" }}>Docente</label>
//                     <input
//                         type="text"
//                         name="Docente"
//                         value={curso.Docente}
//                         onChange={handleInputChange}
//                         style={{ width: "300px", height: "30px", padding: "5px" }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: "15px" }}>
//                     <label style={{ marginRight: "10px" }}>Duración</label>
//                     <input
//                         type="text"
//                         name="Duracion"
//                         value={curso.Duracion}
//                         onChange={handleInputChange}
//                         style={{ width: "300px", height: "30px", padding: "5px" }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: "15px" }}>
//                     <label style={{ marginRight: "10px" }}>ID del Contenido del Curso</label>
//                     <input
//                         type="text"
//                         name="contenidocurso_ID"
//                         value={curso.contenidocurso_ID}
//                         onChange={handleInputChange}
//                         style={{ width: "300px", height: "30px", padding: "5px" }}
//                     />
//                 </div>
//                 {/* Campos del contenido del curso */}
//                 <div style={{ marginBottom: "15px" }}>
//                     <label style={{ marginRight: "10px" }}>Título del Material</label>
//                     <input
//                         type="text"
//                         name="TituloMaterial"
//                         value={curso.contenidocurso.TituloMaterial}
//                         onChange={handleInputChange}
//                         style={{ width: "300px", height: "30px", padding: "5px" }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: "15px" }}>
//                     <label style={{ marginRight: "10px" }}>Tipo de Recurso</label>
//                     <input
//                         type="text"
//                         name="TipoRecurso"
//                         value={curso.contenidocurso.TipoRecurso}
//                         onChange={handleInputChange}
//                         style={{ width: "300px", height: "30px", padding: "5px" }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: "15px" }}>
//                     <label style={{ marginRight: "10px" }}>Contenido</label>
//                     <input
//                         type="text"
//                         name="Contenido"
//                         value={curso.contenidocurso.Contenido}
//                         onChange={handleInputChange}
//                         style={{ width: "300px", height: "30px", padding: "5px" }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: "15px" }}>
//                     <label style={{ marginRight: "10px" }}>Descripción</label>
//                     <input
//                         type="text"
//                         name="Descripcion"
//                         value={curso.contenidocurso.Descripcion}
//                         onChange={handleInputChange}
//                         style={{ width: "300px", height: "30px", padding: "5px" }}
//                     />
//                 </div>
//                 {/* Botón para actualizar el curso */}
//                 <button type="submit" style={{ width: "150px", height: "40px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>Actualizar Curso</button>
//             </form>
//         </div>
//     );
// }

// export default EditCoursePage;




// "use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditCoursePage = () => {
    const [curso, setCurso] = useState({
        NombreCurso: "",
        imageUrl: "",
        Docente: "",
        Duracion: "",
        contenidocurso_ID: ""
    });

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if (id) {
            getCourseData(id);
        }
    }, []);

    const getCourseData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8000/cursos/${id}`);
            setCurso(response.data);
        } catch (error) {
            console.error("Error fetching curso:", error);
        }
    };

    const updateCurso = async () => {
        try {
            const params = new URLSearchParams(window.location.search);
            const id = params.get("id");
            await axios.put(`http://localhost:8000/cursos/${id}`, curso);
            console.log("Curso actualizado correctamente");
            window.location.href = "/dashboard/settings";
        } catch (error) {
            console.error("Error updating curso:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurso(prevCurso => ({
            ...prevCurso,
            [name]: value
        }));
    };

    return (
        <div style={{ textAlign: "center", color: "black" }}>
            <h1>Edit Curso</h1>
            <form onSubmit={updateCurso} style={{ display: "inline-block" }}>
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
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>ID del Contenido del Curso</label>
                    <input
                        type="text"
                        name="contenidocurso_ID"
                        value={curso.contenidocurso_ID}
                        onChange={handleInputChange}
                        style={{ width: "300px", height: "30px", padding: "5px" }}
                    />
                </div>
                <button type="submit" style={{ width: "150px", height: "40px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>Actualizar Curso</button>
            </form>
        </div>
    );
}

export default EditCoursePage;
