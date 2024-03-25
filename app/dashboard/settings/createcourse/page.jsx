"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const CreateCoursePage = () => {
    const [curso, setCurso] = useState({
        NombreCurso: "",
        imageUrl: "",
        Docente: "",
        Duracion: "",
        contenidoCursoID: "" 
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (
          !curso.NombreCurso ||
          !curso.imageUrl ||
          !curso.Docente ||
          !curso.Duracion
        ) {
          toast.error("Por favor complete los campos obligatorios");
          return;
        }
        try {
          await axios.post(`http://localhost:8000/cursos`, curso);
          console.log("Curso creado correctamente");
          toast.success("Curso creado correctamente");
          // Puedes redirigir al usuario a la página de configuración aquí si lo deseas
        } catch (error) {
          console.error("Error creating curso:", error);
          toast.error("Error al crear el curso");
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
        <div className="bg-white border-4 rounded-lg shadow relative m-10">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold">Create Curso</h3>
                <Link href="/dashboard/settings">
          <button type= "button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </Link>
            </div>

     


            <div className="p-6 space-y-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-6 gap-6 text-black">
                        <div className="col-span-6">
                            <label htmlFor="NombreCurso" className="text-sm font-medium block mb-2">Nombre del Curso <span className="text-red-500">*</span> </label>
                            <input type="text" name="NombreCurso" id="NombreCurso" value={curso.NombreCurso} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Nombre del Curso" required />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="imageUrl" className="text-sm font-medium  block mb-2">Imagen <span className="text-red-500">*</span></label>
                            <input type="text" name="imageUrl" id="imageUrl" value={curso.imageUrl} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Pega la URL de una imagen para tu curso" required />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="Docente" className="text-sm font-medium  block mb-2">Docente <span className="text-red-500">*</span> </label>
                            <input type="text" name="Docente" id="Docente" value={curso.Docente} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Docente" required />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="Duracion" className="text-sm font-medium  block mb-2">Duración <span className="text-red-500">*</span> </label>
                            <input type="text" name="Duracion" id="Duracion" value={curso.Duracion} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Duración del Curso" required />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="contenidoCursoID" className="text-sm font-medium  block mb-2">ID del Contenido del Curso</label>
                            <input type="text" name="contenidoCursoID" id="contenidoCursoID" value={curso.contenidoCursoID} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Utiliza el ID del contenido que hayas creado" />
                        </div>
                    </div>
                    <div className="p-6 border-t border-gray-200 rounded-b">
                        <button type="submit" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Crear Curso</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateCoursePage;
