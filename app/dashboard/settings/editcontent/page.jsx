
"use client"
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const EditContentPage = () => {
//   const [content, setContent] = useState({
//     TituloMaterial: "",
//     TipoRecurso: "",
//     Contenido: "",
//     Descripcion: "",
//     Opiniones: "",
//     Aptitud1: "",
//     Aptitud2: "",
//     Aptitud3: "",
//     Nivel: ""
//   });

//   useEffect(() => {
//     // Obtener el ID del contenido de la URL (suponiendo que estás pasando el ID como parámetro)
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get("id");
//     if (id) {
//       obtenerDatosContenido(id);
//     }
//   }, []);

//   const obtenerDatosContenido = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/contenido/${id}`);
//       setContent(response.data);
//     } catch (error) {
//       console.error("Error al obtener el contenido:", error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setContent((prevContent) => ({
//       ...prevContent,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.put(`http://localhost:8000/contenido/${content.ID}`, content);
//       toast.success("Contenido actualizado correctamente");
//       // Redirigir a la página de configuración/dashboard u otra página después de la edición
//     } catch (error) {
//       console.error("Error al actualizar contenido:", error);
//       toast.error("Error al actualizar contenido");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", color: "black" }}>
//       <h1>Editar Contenido</h1>
//       <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ marginRight: "10px" }}>Título del Material</label>
//           <input
//             type="text"
//             name="TituloMaterial"
//             value={content.TituloMaterial}
//             onChange={handleInputChange}
//             style={{ width: "300px", height: "30px", padding: "5px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ marginRight: "10px" }}>Tipo de Recurso</label>
//           <input
//             type="text"
//             name="TipoRecurso"
//             value={content.TipoRecurso}
//             onChange={handleInputChange}
//             style={{ width: "300px", height: "30px", padding: "5px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ marginRight: "10px" }}>Contenido</label>
//           <input
//             type="text"
//             name="Contenido"
//             value={content.Contenido}
//             onChange={handleInputChange}
//             style={{ width: "300px", height: "30px", padding: "5px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ marginRight: "10px" }}>Descripción</label>
//           <input
//             type="text"
//             name="Descripcion"
//             value={content.Descripcion}
//             onChange={handleInputChange}
//             style={{ width: "300px", height: "30px", padding: "5px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ marginRight: "10px" }}>Opiniones</label>
//           <input
//             type="text"
//             name="Opiniones"
//             value={content.Opiniones}
//             onChange={handleInputChange}
//             style={{ width: "300px", height: "30px", padding: "5px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ marginRight: "10px" }}>Aptitud 1</label>
//           <input
//             type="text"
//             name="Aptitud1"
//             value={content.Aptitud1}
//             onChange={handleInputChange}
//             style={{ width: "300px", height: "30px", padding: "5px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ marginRight: "10px" }}>Aptitud 2</label>
//           <input
//             type="text"
//             name="Aptitud2"
//             value={content.Aptitud2}
//             onChange={handleInputChange}
//             style={{ width: "300px", height: "30px", padding: "5px" }}
//             />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ marginRight: "10px" }}>Aptitud 3</label>
//           <input
//             type="text"
//             name="Aptitud3"
//             value={content.Aptitud3}
//             onChange={handleInputChange}
//             style={{ width: "300px", height: "30px", padding: "5px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ marginRight: "10px" }}>Nivel</label>
//           <input
//             type="text"
//             name="Nivel"
//             value={content.Nivel}
//             onChange={handleInputChange}
//             style={{ width: "300px", height: "30px", padding: "5px" }}
//           />
//         </div>
//         {/* Botón para actualizar el contenido */}
//         <button type="submit">Actualizar Contenido</button>
//       </form>
//     </div>
//   );
// };

// export default EditContentPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const EditContentPage = () => {
  const [content, setContent] = useState({
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      obtenerDatosContenido(id);
    }
  }, []);

  const obtenerDatosContenido = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/contenido/${id}`);
      setContent(response.data);
    } catch (error) {
      console.error("Error al obtener el contenido:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8000/contenido/${content.ID}`, content);
      toast.success("Contenido actualizado correctamente");
      // Redirigir a la página de configuración/dashboard u otra página después de la edición
    } catch (error) {
      console.error("Error al actualizar contenido:", error);
      toast.error("Error al actualizar contenido");
    }
  };

  return (
    <div className="bg-white  border-4 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">
          Editar Contenido
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
              <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Título del Material</label>
              <input type="text" name="TituloMaterial" id="product-name" value={content.TituloMaterial} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Tipo de Recurso</label>
              <input type="text" name="TipoRecurso" id="category" value={content.TipoRecurso} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="content" className="text-sm font-medium text-gray-900 block mb-2">Contenido</label>
              <input type="text" name="Contenido" id="content" value={content.Contenido} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Contenido" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Descripción</label>
              <input type="text" name="Descripcion" id="description" value={content.Descripcion} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Descripción" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="opinions" className="text-sm font-medium text-gray-900 block mb-2">Opiniones</label>
              <input type="text" name="Opiniones" id="opinions" value={content.Opiniones} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Opiniones" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="aptitude1" className="text-sm font-medium text-gray-900 block mb-2">Aptitud 1</label>
              <input type="text" name="Aptitud1" id="aptitude1" value={content.Aptitud1} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Aptitud 1" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="aptitude2" className="text-sm font-medium text-gray-900 block mb-2">Aptitud 2</label>
              <input type="text" name="Aptitud2" id="aptitude2" value={content.Aptitud2} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Aptitud 2"  />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="aptitude3" className="text-sm font-medium text-gray-900 block mb-2">Aptitud 3</label>
              <input type="text" name="Aptitud3" id="aptitude3" value={content.Aptitud3} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Aptitud 3"  />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="level" className="text-sm font-medium text-gray-900 block mb-2">Nivel</label>
              <input type="text" name="Nivel" id="level" value={content.Nivel} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Nivel" required />
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 rounded-b">
          <button type="submit" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Guardar cambios</button>
        </div>
      </form>
    </div>
  </div>
);
  }

export default EditContentPage;
