"use client";
// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateContentPage = () => {
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
  

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setContent((prevContent) => ({
//       ...prevContent,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Validar los campos del formulario
//     if (
//       content.TituloMaterial.trim() === "" ||
//       content.TipoRecurso.trim() === "" ||
//       content.Contenido.trim() === "" ||
//       content.Descripcion.trim() === ""||
//       content.Nivel.trim() === ""||
//       content.Opiniones.trim() === ""||
//       content.Aptitud1.trim() === ""
//     ) {
//       // Mostrar notificación de error si algún campo está vacío
//       return toast.error("Por favor, completa todos los campos obligatorios", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }

//     try {
//       await axios.post("http://localhost:8000/contenido", content);
//       // Mostrar notificación de éxito
//       toast.success("Contenido creado correctamente", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       // Limpiar el formulario después de crear el contenido
//       setContent({
//         TituloMaterial: "",
//         TipoRecurso: "",
//         Contenido: "",
//         Descripcion: "",
//         Opiniones: "",
//         Aptitud1: "",
//         Aptitud2: "",
//         Aptitud3: "",
//         Nivel: ""
//       });
//     } catch (error) {
//       console.error("Error al crear contenido:", error);
//       // Mostrar notificación de error
//       toast.error("Error al crear contenido", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   };
//   return (
//     <div style={{ textAlign: "center", color: "black" }}>
//       <h1>Crear Contenido</h1>
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
//           />
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
//         <button
//           type="submit"
//           style={{
//             width: "150px",
//             height: "40px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             borderRadius: "8px",
//             cursor: "pointer"
//           }}
//         >
//           Crear Contenido
//         </button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default CreateContentPage;


import React, { useState } from "react";
import axios from "axios";
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
    <div style={{ textAlign: "center", color: "black" }}>
      <h1>Crear Contenido</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>Título del Material</label>
          <input
            type="text"
            name="TituloMaterial"
            value={newContent.TituloMaterial}
            onChange={handleInputChange}
            style={{ width: "300px", height: "30px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>Tipo de Recurso</label>
          <input
            type="text"
            name="TipoRecurso"
            value={newContent.TipoRecurso}
            onChange={handleInputChange}
            style={{ width: "300px", height: "30px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>Contenido</label>
          <input
            type="text"
            name="Contenido"
            value={newContent.Contenido}
            onChange={handleInputChange}
            style={{ width: "300px", height: "30px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>Descripción</label>
          <input
            type="text"
            name="Descripcion"
            value={newContent.Descripcion}
            onChange={handleInputChange}
            style={{ width: "300px", height: "30px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>Opiniones</label>
          <input
            type="text"
            name="Opiniones"
            value={newContent.Opiniones}
            onChange={handleInputChange}
            style={{ width: "300px", height: "30px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>Aptitud 1</label>
          <input
            type="text"
            name="Aptitud1"
            value={newContent.Aptitud1}
            onChange={handleInputChange}
            style={{ width: "300px", height: "30px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>Aptitud 2</label>
          <input
            type="text"
            name="Aptitud2"
            value={newContent.Aptitud2}
            onChange={handleInputChange}
            style={{ width: "300px", height: "30px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>Aptitud 3</label>
          <input
            type="text"
            name="Aptitud3"
            value={newContent.Aptitud3}
            onChange={handleInputChange}
            style={{ width: "300px", height: "30px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>Nivel</label>
          <input
            type="text"
            name="Nivel"
            value={newContent.Nivel}
            onChange={handleInputChange}
            style={{ width: "300px", height: "30px", padding: "5px" }}
          />
        </div>
        {/* Botón para crear el contenido */}
        <button type="submit">Crear Contenido</button>
      </form>
    </div>
  );
  }
  export default CreateContentPage;
