// pagina de configuracion cursos
"use client";
import React, { useState, useEffect } from "react";

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



  return (
    <main>
      <h1>Administración de Cursos</h1>
    </main>
  )
}
