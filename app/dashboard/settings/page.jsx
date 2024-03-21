// pagina de configuracion cursos
"use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPenToSquare,
//   faTrash,
//   faPlus,
// } from "@fortawesome/free-solid-svg-icons";

// export default function CourseSettings() {
//   const [cursos, setCursos] = useState([]);

//   useEffect(() => {
//     fetchCursos();
//   }, []);

//   const fetchCursos = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/cursos");
//       console.log("Datos de cursos recibidos:", response.data);
//       setCursos(response.data);
//     } catch (error) {
//       console.error("Error fetching cursos:", error);
//     }
//   };

//   const deleteCurso = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/cursos/${id}`);
//       // Actualizar la lista de cursos después de eliminar uno
//       const updatedCursos = cursos.filter((curso) => curso.ID !== id);
//       setCursos(updatedCursos);
//     } catch (error) {
//       console.error("Error deleting curso:", error);
//     }
//   };

//   return (
//     <main>
//       <h1 className="text-black">Administración de Cursos</h1>
//       <div className="flex justify-center mb-3">
//       <Link href="/dashboard/settings/createcourse">
//         <button className="w-40 h-12 bg-blue-500 text-white rounded-md mr-3 hover:bg-blue-600">Crear Curso</button>
//       </Link>
//       <Link href="/dashboard/settings/createcontent">
//         <button className="w-40 h-12 bg-green-500 text-white rounded-md hover:bg-green-600">Crear Contenido</button>
//       </Link>
//     </div>

//       <table>
//         <thead>
//           <tr>
//             <th className="text-black">Nombre del Curso</th>
//             <th className="text-black">Imagen</th>
//             <th className="text-black">Docente</th>
//             <th className="text-black">Duración</th>
//             <th className="text-black">Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cursos.map((curso) => (
//             <tr key={curso.ID}>
//               <td className="text-black">{curso.NombreCurso}</td>
//               <td className="text-black">{curso.imageUrl}</td>
//               <td className="text-black">{curso.Docente}</td>
//               <td className="text-black">{curso.Duracion}</td>
//               <td>
//                 <Link href={`/dashboard/settings/editcourse?id=${curso.ID}`}>
//                   <button className="w-10 h-10 text-center justify-center  flex items-center text-white bg-blue-500 mr-3">
//                     <FontAwesomeIcon icon={faPenToSquare} />
//                   </button>
//                 </Link>

//                 <button
//                   className="w-10 h-10 text-center justify-center  flex items-center text-white bg-red-500"
//                   onClick={() => deleteCurso(curso.ID)}
//                 >
//                   <FontAwesomeIcon icon={faTrash} />
//                 </button>
//                 <Link href={`/dashboard/settings/contentlist?id=${curso.ID}`}>
//                   <button className="w-10 h-10 text-center justify-center  flex items-center text-white bg-green-500">
//                     Ver más
//                   </button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </main>
//   );
// }

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
      // Actualizar la lista de cursos después de eliminar uno
      const updatedCursos = cursos.filter((curso) => curso.ID !== id);
      setCursos(updatedCursos);
    } catch (error) {
      console.error("Error deleting curso:", error);
    }
  };

  const deleteContenido = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/contenido/${id}`);
      // Actualizar la lista de contenidos después de eliminar uno
      const updatedContenidos = contenidos.filter(
        (contenido) => contenido.ID !== id
      );
      setContenidos(updatedContenidos);
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };

  return (
    <main>
      <h1 className="text-black">Administración de Cursos y Contenidos</h1>
      <div className="flex justify-center mb-3">
        <button
          className={`w-40 h-12 ${
            activeTab === "courses"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } rounded-md mr-3 hover:bg-blue-600`}
          onClick={() => setActiveTab("courses")}
        >
          Cursos
        </button>
        <button
          className={`w-40 h-12 ${
            activeTab === "content"
              ? "bg-green-500  text-white"
              : "bg-gray-300 text-gray-700"
          } rounded-md hover:bg-green-600`}
          onClick={() => setActiveTab("content")}
        >
          Contenido
        </button>
      </div>

      {activeTab === "courses" && (
        <>
          <div className="flex justify-center mb-3">
            <Link href="/dashboard/settings/createcourse">
              <button className="w-40 h-12 bg-blue-500 text-white rounded-md mr-3 hover:bg-blue-600">
                <FontAwesomeIcon icon={faPlus} /> Crear Curso
              </button>
            </Link>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-black">Nombre del Curso</th>
                <th className="text-black">Imagen</th>
                <th className="text-black">Docente</th>
                <th className="text-black">Duración</th>
                <th className="text-black">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cursos.map((curso) => (
                <tr key={curso.ID}>
                  <td className="text-black text-center">
                    {curso.NombreCurso}
                  </td>
                  {/* <td className="text-black">{curso.imageUrl}</td> */}
                  <td className="p-2 flex justify-center items-center">
                    <img
                      src={curso.imageUrl}
                      alt="Imagen del curso"
                      className="w-24 h-24 object-cover"
                    />
                  </td>
                  <td className="text-black p-2 text-center">{curso.Docente}</td>
                  <td className="text-black p-2 text-center">{curso.Duracion}</td>
                  <td className="p-2 flex justify-center items-center">
                  <div className="flex justify-center items-center">
                    <Link
                      href={`/dashboard/settings/editcourse?id=${curso.ID}`}
                    >
                      <button className="w-10 h-10 text-center justify-center flex items-center text-white bg-blue-500 mr-3">
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </Link>
                    <button
                      className="w-10 h-10 text-center justify-center flex items-center text-white bg-red-500"
                      onClick={() => deleteCurso(curso.ID)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <Link
                      href={`/dashboard/settings/contentlist?id=${curso.ID}`}
                    >
                      <button className="w-10 h-10 text-center justify-center flex items-center text-white bg-green-500">
                        Ver más
                      </button>
                    </Link>
                    </div>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {activeTab === "content" && (
        <>
          <div className="flex justify-center mb-3">
            <Link href="/dashboard/settings/createcontent">
              <button className="w-40 h-12 bg-green-500 text-white rounded-md hover:bg-green-600">
                <FontAwesomeIcon icon={faPlus} /> Crear Contenido
              </button>
            </Link>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-black">Título del Material</th>
                <th className="text-black">Tipo de Recurso</th>
                <th className="text-black">Contenido</th>
                <th className="text-black">Descripción</th>
                <th className="text-black">Opiniones</th>
                <th className="text-black">Aptitud1</th>
                <th className="text-black">Aptitud2</th>
                <th className="text-black">Aptitud3</th>
                <th className="text-black">Nivel</th>
                <th className="text-black">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {contenidos.map((contenido) => (
                <tr key={contenido.ID}>
                  <td className="text-black">{contenido.TituloMaterial}</td>
                  <td className="text-black">{contenido.TipoRecurso}</td>
                  <td className="text-black">
                    {contenido.Contenido.substring(0, 50)}
                    {contenido.Contenido.length > 50 ? "..." : ""}
                  </td>
                  <td className="text-black">
                    {contenido.Descripcion.substring(0, 50)}
                    {contenido.Descripcion.length > 50 ? "..." : ""}
                  </td>
                  <td className="text-black">{contenido.Opiniones}</td>
                  <td className="text-black">{contenido.Aptitud1}</td>
                  <td className="text-black">{contenido.Aptitud2}</td>
                  <td className="text-black">{contenido.Aptitud3}</td>
                  <td className="text-black">{contenido.Nivel}</td>
                  <td>
                    <Link
                      href={`/dashboard/settings/contentlist?id=${contenido.ID}`}
                    >
                      <button className="w-10 h-10 text-center justify-center flex items-center text-white bg-blue-500 mr-3">
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </Link>
                    <button
                      className="w-10 h-10 text-center justify-center flex items-center text-white bg-red-500"
                      onClick={() => deleteContenido(contenido.ID)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </main>
  );
}
