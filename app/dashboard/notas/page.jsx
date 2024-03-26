"use client"
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AcademicTracking = () => {
//   const [academicData, setAcademicData] = useState(null);

//   useEffect(() => {
//     const fetchAcademicData = async () => {
//       const userId = localStorage.getItem("user");
//       try {
//         const response = await axios.get(`http://localhost:8000/student/${userId}`);
//         setAcademicData(response.data.seguimientoacademico);
//       } catch (error) {
//         console.error("Error fetching academic data:", error);
//       }
//     };

//     fetchAcademicData();
//   }, []);

//   if (!academicData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Academic Tracking</h2>
//       <p>Curso: {academicData.Curso}</p>
//       <p>Actividades: {academicData.Actividades}</p>
//       <p>Comentarios: {academicData.Comentarios}</p>
//       <p>Notas: {academicData.Notas}</p>
//       <p>Estado: {academicData.Estado}</p>
//     </div>
//   );
// };

// export default AcademicTracking;


import React, { useState, useEffect } from "react";
import axios from "axios";

const AcademicTracking = () => {
  const [academicData, setAcademicData] = useState(null);

  useEffect(() => {
    const fetchAcademicData = async () => {
      const userId = localStorage.getItem("user");
      const token = localStorage.getItem("token"); // Obtener el token del almacenamiento local
      try {
        const response = await axios.get(`http://localhost:8000/student/${userId}`, {
          headers: {
            'userstoken': token // Incluir el token en el encabezado como 'userstoken'
          }
        });
        setAcademicData(response.data.seguimientoacademico);
      } catch (error) {
        console.error("Error fetching academic data:", error);
      }
    };

    fetchAcademicData();
  }, []);

  if (!academicData) {
    return <div>Loading...</div>;
  }

  const getStatusColor = (status) => {
    return status === "Pendiente" ? "bg-red-500" : "bg-green-500";
  };

  const getStatusText = (status) => {
    return status === "Pendiente" ? "Pendiente" : "Calificado";
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-16">
      <table className="w-full table-fixed text-black">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Curso</th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actividades</th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Comentarios</th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Notas</th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Estado</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="py-4 px-6 border-b border-gray-200">{academicData.Curso}</td>
            <td className="py-4 px-6 border-b border-gray-200">{academicData.Actividades}</td>
            <td className="py-4 px-6 border-b border-gray-200">{academicData.Comentarios}</td>
            <td className="py-4 px-6 border-b border-gray-200">{academicData.Notas}</td>
            <td className="py-4 px-6 border-b border-gray-200">
              <span className={`text-white py-1 px-2 rounded-full text-xs ${getStatusColor(academicData.Estado)}`}>
                {getStatusText(academicData.Estado)}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AcademicTracking;
