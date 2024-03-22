"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function CourseSettings() {
  const [cursos, setCursos] = useState([]);
  const [contenidos, setContenidos] = useState([]);
  const [activeTab, setActiveTab] = useState("courses");
  const [showModalCurso, setShowModalCurso] = useState(false);
  const [showModalContenido, setShowModalContenido] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  useEffect(() => {
    fetchCursos();
    fetchContenidos();
  }, []);

  const fetchCursos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cursos");
      console.log("Datos de cursos recibidos:", response.data);
      setCursos(response.data);
    } catch (error) {
      console.error("Error fetching cursos:", error);
    }
  };

  const fetchContenidos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/contenido");
      console.log("Datos de contenidos recibidos:", response.data);
      setContenidos(response.data);
    } catch (error) {
      console.error("Error fetching contenidos:", error);
    }
  };

  const deleteCurso = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/cursos/${id}`);
      const updatedCursos = cursos.filter((curso) => curso.ID !== id);
      setCursos(updatedCursos);
      setShowModalCurso(false);
    } catch (error) {
      console.error("Error deleting curso:", error);
    }
  };

  const deleteContenido = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/contenido/${id}`);
      const updatedContenidos = contenidos.filter(
        (contenido) => contenido.ID !== id
      );
      setContenidos(updatedContenidos);
      setShowModalContenido(false);
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };

  const handleDeleteCurso = (id) => {
    setIdToDelete(id);
    setShowModalCurso(true);
  };

  const handleDeleteContenido = (id) => {
    setIdToDelete(id);
    setShowModalContenido(true);
  };

  
  return (
    <main>
      {/* <h1 className="text-black">Administración de Cursos y Contenidos</h1> */}
      <div className="flex justify-center mb-3 mt-6">
        <button
          className={`w-40 h-12 ${
            activeTab === "courses"
              ? "bg-blue-800 text-white"
              : "bg-teal-400 text-white"
          } rounded-md mr-3 hover:bg-blue-800`}
          onClick={() => setActiveTab("courses")}
        >
          Cursos
        </button>
        <button
          className={`w-40 h-12 ${
            activeTab === "content"
              ? "bg-blue-800 text-white"
              : "bg-teal-400 text-white"
          } rounded-md  hover:bg-blue-800`}
          onClick={() => setActiveTab("content")}
        >
          Contenido
        </button>
      </div>
  
      {activeTab === "courses" && (
        <>
          {/* <div className="flex justify-center mb-3">
            <Link href="/dashboard/settings/createcourse">
              <button className="w-40 h-12 bg-teal-400 text-white rounded-md mr-3 hover:bg-blue-800">
                <FontAwesomeIcon icon={faPlus} /> Crear Curso
              </button>
            </Link>
          </div> */}
          <div className="text-black   ">
            <div className="p-4 flex">
              <h2 className="text-3xl mt-2 ">Gestión de Cursos</h2>
            </div>

            <div className="flex justify-center mb-2">
            <Link href="/dashboard/settings/createcourse">
              <button className="w-40 h-12 bg-teal-400 text-white rounded-md mr-3 hover:bg-blue-800">
                <FontAwesomeIcon icon={faPlus} /> Crear Curso
              </button>
            </Link>
          </div>

            <div className="px-3 py-4 flex justify-center">
              <table className="w-full text-md bg-white shadow-md rounded mb-4 border">
                <tbody>
                  <tr className="border-b text-center">
                    <th className="p-3 px-5">Nombre del Curso</th>
                    <th className="p-3 px-5">Imagen</th>
                    <th className="p-3 px-5">Docente</th>
                    <th className="p-3 px-5">Duración</th>
                    <th className="p-3 px-5">Acciones</th>
                  </tr>
                  {cursos.map((curso) => (
                    <tr key={curso.ID}>
                      <td className="text-black text-center">
                        {curso.NombreCurso}
                      </td>
                      <td className="p-2 flex justify-center items-center">
                        <img
                          src={curso.imageUrl}
                          alt="Imagen del curso"
                          className="w-24 h-24 object-cover"
                        />
                      </td>
                      <td className="text-black p-2 text-center">{curso.Docente}</td>
                      <td className="text-black p-2 text-center">{curso.Duracion}</td>
                      <td className="p-2 text-center">
                        <div className="flex flex-col items-center">
                          <Link href={`/dashboard/settings/editcourse?id=${curso.ID}`}>
                          <button className="w-10 h-10 text-center justify-center flex items-center text-white bg-blue-800 mb-1">
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </Link>
                          <button
                            className="w-10 h-10 text-center justify-center flex items-center text-white bg-red-500 mt-1"
                            onClick={() => handleDeleteCurso(curso.ID)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {activeTab === "content" && (
  <>
    {/* <div className="flex justify-center mb-3">
      <Link href="/dashboard/settings/createcontent">
        <button className="w-40 h-12 bg-teal-400 text-white rounded-md mr-3 hover:bg-blue-800">
          <FontAwesomeIcon icon={faPlus} /> Crear Contenido
        </button>
      </Link>
    </div> */}
    <div className="text-black ">
      <div className="p-2 flex">
        <h2 className="text-3xl mt-2">Gestión de Contenidos</h2>
      </div>
      <div className="flex justify-center mb-2">
      <Link href="/dashboard/settings/createcontent">
        <button className="w-40 h-12 bg-teal-400 text-white rounded-md mr-3 hover:bg-blue-800">
          <FontAwesomeIcon icon={faPlus} /> Crear Contenido
        </button>
      </Link>
    </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4 border">
          <tbody>
            <tr className="border-b text-center">
              <th className=" p-3 px-5">ID</th>
              <th className=" p-3 px-5">Título del Material</th>
              <th className=" p-3 px-5">Tipo de Recurso</th>
              <th className=" p-3 px-5">Contenido</th>
              <th className=" p-3 px-5">Descripción</th>
              <th className=" p-3 px-5">Opiniones</th>
              <th className=" p-3 px-5">Aptitud1</th>
              <th className=" p-3 px-5">Aptitud2</th>
              <th className=" p-3 px-5">Aptitud3</th>
              <th className=" p-3 px-5">Nivel</th>
              <th className=" p-3 px-5">Acciones</th>
            </tr>
            {contenidos.map((contenido) => (
              <tr key={contenido.ID} >
                <td className="py-4 px-3 text-black text-center">{contenido.ID}</td>
                <td className="py-4 px-3 text-black text-center">{contenido.TituloMaterial}</td>
                <td className="py-4 px-3 text-black text-center">{contenido.TipoRecurso}</td>
                <td className="py-4 px-3 text-black text-center">
                  {contenido.Contenido.substring(0, 30)}
                  {contenido.Contenido.length > 30 ? "..." : ""}
                </td>
                <td className="text-black text-center">
                  {contenido.Descripcion.substring(0, 30)}
                  {contenido.Descripcion.length > 30 ? "..." : ""}
                </td>
                <td className="text-black text-center">{contenido.Opiniones}</td>
                <td className="text-black text-center">{contenido.Aptitud1}</td>
                <td className="text-black text-center">{contenido.Aptitud2}</td>
                <td className="text-black text-center">{contenido.Aptitud3}</td>
                <td className="text-black text-center">{contenido.Nivel}</td>
                <td className="text-center">
  <div className="flex flex-col items-center">
    <Link href={`/dashboard/settings/editcontent?id=${contenido.ID}`}>
      <button className="w-10 h-10 text-center justify-center flex items-center text-white bg-blue-800 mb-1">
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
    </Link>
    <button
      className="w-10 h-10 text-center justify-center flex items-center text-white bg-red-500 mt-1"
      onClick={() => handleDeleteContenido(contenido.ID)}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
)}


{showModalCurso && (
  <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    <div className="max-w-md border rounded-lg relative">
      <div className="flex flex-col p-5 rounded-lg shadow bg-white">
        <div className="flex">
          <div>
            <svg className="w-6 h-6 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
          </div>

          <div className="ml-3">
            <h2 className="font-semibold text-gray-800">Eliminar Curso</h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">¿Estás seguro de que deseas eliminar este curso?</p>
          </div>
        </div>

        <div className="flex justify-end items-center mt-3">
          <button
            onClick={() => deleteCurso(idToDelete)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md"
          >
            Eliminar
          </button>

          <button
            onClick={() => setShowModalCurso(false)}
            className="px-4 py-2 ml-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{showModalContenido && (
  <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    <div className="max-w-md border rounded-lg relative">
      <div className="flex flex-col p-5 rounded-lg shadow bg-white">
        <div className="flex">
          <div>
            <svg className="w-6 h-6 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
          </div>

          <div className="ml-3">
            <h2 className="font-semibold text-gray-800">Eliminar Contenido</h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">¿Estás seguro de que deseas eliminar este contenido?</p>
          </div>
        </div>

        <div className="flex justify-end items-center mt-3">
          <button
            onClick={() => deleteContenido(idToDelete)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md"
          >
            Eliminar
          </button>

          <button
            onClick={() => setShowModalContenido(false)}
            className="px-4 py-2 ml-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </main>
  );
}

  