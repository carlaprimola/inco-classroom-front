"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const CreateContentPage = () => {
  const [newContent, setNewContent] = useState({
    TituloMaterial: "",
    TipoRecurso: "",
    Contenido: "",
    Descripcion: "",
    Opiniones: "",
    Aptitud1: "",
    Aptitud2: "",
    Aptitud3: "",
    Nivel: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContent((prevContent) => ({
      ...prevContent,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validación de campos (solo un ejemplo, puedes ajustar según necesites)
    if (newContent.TituloMaterial.trim() === "" || newContent.TipoRecurso.trim() === "") {
      return toast.error("Por favor, completa todos los campos obligatorios");
    }

    try {
      await axios.post("http://localhost:8000/contenido", newContent);
      toast.success("Contenido creado correctamente");
      // Limpiar el formulario después de crear el contenido
      setNewContent({
        TituloMaterial: "",
        TipoRecurso: "",
        Contenido: "",
        Descripcion: "",
        Opiniones: "",
        Aptitud1: "",
        Aptitud2: "",
        Aptitud3: "",
        Nivel: ""
      });
    } catch (error) {
      console.error("Error al crear contenido:", error);
      toast.error("Error al crear contenido");
    }
  };

  return (
    <div className="bg-white border-4 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">
          Crear Contenido
        </h3>
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
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="titulo-material" className="text-sm font-medium text-gray-900 block mb-2">Título del Material <span className="text-red-500">*</span> </label>
              <input
                type="text"
                id="titulo-material"
                name="TituloMaterial"
                value={newContent.TituloMaterial}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Título del Material"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="tipo-recurso" className="text-sm font-medium text-gray-900 block mb-2">Tipo de Recurso <span className="text-red-500">*</span> </label>
              <input
                type="text"
                id="tipo-recurso"
                name="TipoRecurso"
                value={newContent.TipoRecurso}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Link, Video o Presentacion"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="contenido" className="text-sm font-medium text-gray-900 block mb-2">Contenido <span className="text-red-500">*</span> </label>
              <input
                type="text"
                id="contenido"
                name="Contenido"
                value={newContent.Contenido}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Contenido"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="descripcion" className="text-sm font-medium text-gray-900 block mb-2">Descripción <span className="text-red-500">*</span> </label>
              <input
                type="text"
                id="descripcion"
                name="Descripcion"
                value={newContent.Descripcion}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Descripción"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="opiniones" className="text-sm font-medium text-gray-900 block mb-2">Opiniones </label>
              <input
                type="text"
                id="opiniones"
                name="Opiniones"
                value={newContent.Opiniones}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Opiniones"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="aptitud1" className="text-sm font-medium text-gray-900 block mb-2">Aptitud 1 <span className="text-red-500">*</span>  </label>
              <input
                type="text"
                id="aptitud1"
                name="Aptitud1"
                value={newContent.Aptitud1}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Aptitud 1"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="aptitud2" className="text-sm font-medium text-gray-900 block mb-2">Aptitud 2</label>
              <input
                type="text"
                id="aptitud2"
                name="Aptitud2"
                value={newContent.Aptitud2}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Aptitud 2"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="aptitud3" className="text-sm font-medium text-gray-900 block mb-2">Aptitud 3</label>
              <input
                type="text"
                id="aptitud3"
                name="Aptitud3"
                value={newContent.Aptitud3}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Aptitud 3"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="nivel" className="text-sm font-medium text-gray-900 block mb-2">Nivel <span className="text-red-500">*</span> </label>
              <input
                type="text"
                id="nivel"
                name="Nivel"
                value={newContent.Nivel}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Nivel"
              />
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Crear Contenido</button>
          </div>
        </form>
      </div>
    </div>
  );
  
  }
  export default CreateContentPage;
