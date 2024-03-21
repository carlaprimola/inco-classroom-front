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
//   const [contenidos, setContenidos] = useState([]);
//   const [activeTab, setActiveTab] = useState("courses");

//   useEffect(() => {
//     fetchCursos();
//     fetchContenidos();
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

//   const fetchContenidos = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/contenido");
//       console.log("Datos de contenidos recibidos:", response.data);
//       setContenidos(response.data);
//     } catch (error) {
//       console.error("Error fetching contenidos:", error);
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

//   const deleteContenido = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/contenido/${id}`);
//       // Actualizar la lista de contenidos después de eliminar uno
//       const updatedContenidos = contenidos.filter(
//         (contenido) => contenido.ID !== id
//       );
//       setContenidos(updatedContenidos);
//     } catch (error) {
//       console.error("Error deleting content:", error);
//     }
//   };

//   return (
//     <main>
//       <h1 className="text-black">Administración de Cursos y Contenidos</h1>
//       <div className="flex justify-center mb-3">
//         <button
//           className={`w-40 h-12 ${
//             activeTab === "courses"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-300 text-gray-700"
//           } rounded-md mr-3 hover:bg-blue-600`}
//           onClick={() => setActiveTab("courses")}
//         >
//           Cursos
//         </button>
//         <button
//           className={`w-40 h-12 ${
//             activeTab === "content"
//               ? "bg-green-500  text-white"
//               : "bg-gray-300 text-gray-700"
//           } rounded-md hover:bg-green-600`}
//           onClick={() => setActiveTab("content")}
//         >
//           Contenido
//         </button>
//       </div>

//       {activeTab === "courses" && (
//         <>
//           <div className="flex justify-center mb-3">
//             <Link href="/dashboard/settings/createcourse">
//               <button className="w-40 h-12 bg-blue-500 text-white rounded-md mr-3 hover:bg-blue-600">
//                 <FontAwesomeIcon icon={faPlus} /> Crear Curso
//               </button>
//             </Link>
//           </div>
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th className="text-black">Nombre del Curso</th>
//                 <th className="text-black">Imagen</th>
//                 <th className="text-black">Docente</th>
//                 <th className="text-black">Duración</th>
//                 <th className="text-black">Acciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cursos.map((curso) => (
//                 <tr key={curso.ID}>
//                   <td className="text-black text-center">
//                     {curso.NombreCurso}
//                   </td>
//                   {/* <td className="text-black">{curso.imageUrl}</td> */}
//                   <td className="p-2 flex justify-center items-center">
//                     <img
//                       src={curso.imageUrl}
//                       alt="Imagen del curso"
//                       className="w-24 h-24 object-cover"
//                     />
//                   </td>
//                   <td className="text-black p-2 text-center">{curso.Docente}</td>
//                   <td className="text-black p-2 text-center">{curso.Duracion}</td>
//                   <td className="p-2 flex justify-center items-center">
//                   <div className="flex justify-center items-center">
//                     <Link
//                       href={`/dashboard/settings/editcourse?id=${curso.ID}`}
//                     >
//                       <button className="w-10 h-10 text-center justify-center flex items-center text-white bg-blue-500 mr-3">
//                         <FontAwesomeIcon icon={faPenToSquare} />
//                       </button>
//                     </Link>
//                     <button
//                       className="w-10 h-10 text-center justify-center flex items-center text-white bg-red-500"
//                       onClick={() => deleteCurso(curso.ID)}
//                     >
//                       <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                     <Link
//                       href={`/dashboard/settings/editcontent?id=${curso.ID}`}
//                     >
//                     </Link>
//                     </div>
//                   </td>
                  
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}

//       {activeTab === "content" && (
//         <>
//           <div className="flex justify-center mb-3">
//             <Link href="/dashboard/settings/createcontent">
//               <button className="w-40 h-12 bg-green-500 text-white rounded-md hover:bg-green-600">
//                 <FontAwesomeIcon icon={faPlus} /> Crear Contenido
//               </button>
//             </Link>
//           </div>
//           <table className="w-full">
//             <thead>
//               <tr>
//               <th className="text-black">ID</th>
//                 <th className="text-black">Título del Material</th>
//                 <th className="text-black">Tipo de Recurso</th>
//                 <th className="text-black">Contenido</th>
//                 <th className="text-black">Descripción</th>
//                 <th className="text-black">Opiniones</th>
//                 <th className="text-black">Aptitud1</th>
//                 <th className="text-black">Aptitud2</th>
//                 <th className="text-black">Aptitud3</th>
//                 <th className="text-black">Nivel</th>
//                 <th className="text-black">Acciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contenidos.map((contenido) => (
//                 <tr key={contenido.ID}>
//                   <td className="text-black">{contenido.ID}</td>
//                   <td className="text-black">{contenido.TituloMaterial}</td>
//                   <td className="text-black">{contenido.TipoRecurso}</td>
//                   <td className="text-black">
//                     {contenido.Contenido.substring(0, 50)}
//                     {contenido.Contenido.length > 50 ? "..." : ""}
//                   </td>
//                   <td className="text-black">
//                     {contenido.Descripcion.substring(0, 50)}
//                     {contenido.Descripcion.length > 50 ? "..." : ""}
//                   </td>
//                   <td className="text-black">{contenido.Opiniones}</td>
//                   <td className="text-black">{contenido.Aptitud1}</td>
//                   <td className="text-black">{contenido.Aptitud2}</td>
//                   <td className="text-black">{contenido.Aptitud3}</td>
//                   <td className="text-black">{contenido.Nivel}</td>
//                   <td>
//                     <Link
//                       href={`/dashboard/settings/editcontent?id=${contenido.ID}`}
//                     >
//                       <button className="w-10 h-10 text-center justify-center flex items-center text-white bg-blue-500 mr-3">
//                         <FontAwesomeIcon icon={faPenToSquare} />
//                       </button>
//                     </Link>
//                     <button
//                       className="w-10 h-10 text-center justify-center flex items-center text-white bg-red-500"
//                       onClick={() => deleteContenido(contenido.ID)}
//                     >
//                       <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}
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
          <div className="text-gray-900 bg-gray-200">
            <div className="p-4 flex">
              <h1 className="text-3xl">Cursos</h1>
            </div>
            <div className="px-3 py-4 flex justify-center">
              <table className="w-full text-md bg-white shadow-md rounded mb-4">
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
                          <button className="w-10 h-10 text-center justify-center flex items-center text-white bg-blue-500 mb-1">
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
    <div className="flex justify-center mb-3">
      <Link href="/dashboard/settings/createcontent">
        <button className="w-40 h-12 bg-green-500 text-white rounded-md hover:bg-green-600">
          <FontAwesomeIcon icon={faPlus} /> Crear Contenido
        </button>
      </Link>
    </div>
    <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex">
        <h1 className="text-3xl">Contenidos</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
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
              <tr key={contenido.ID}>
                <td className="text-black text-center">{contenido.ID}</td>
                <td className="text-black text-center">{contenido.TituloMaterial}</td>
                <td className="text-black text-center">{contenido.TipoRecurso}</td>
                <td className="text-black text-center">
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
      <button className="w-10 h-10 text-center justify-center flex items-center text-white bg-blue-500 mb-1">
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
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Eliminar Curso</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">¿Estás seguro de que deseas eliminar este curso?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
           onClick={() => deleteCurso(idToDelete)}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Eliminar
          </button>
          <button
            onClick={() => setShowModalCurso(false)}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{showModalContenido && (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Eliminar Contenido</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">¿Estás seguro de que deseas eliminar este contenido?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={() => deleteContenido(idToDelete)}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Eliminar
          </button>
          <button
            onClick={() => setShowModalContenido(false)}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
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

  