"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchUsers } from "../../lib/data.js"; 

const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const token = localStorage.getItem('token'); // Obtener el token de localStorage
        const { role } = await fetchUsers();
        
        if (role && role.TipoRol === 'Docente') {
          console.log('Fetching courses for teacher...'); 
          const courseResponse = await axios.get(`http://localhost:8000/cursos`, {
            headers: {
              'userstoken': token // Incluir el token en el encabezado
            }
          });
          setCourseData(courseResponse.data);
        } else {
          console.log('Fetching course for student...'); 
          const userId = localStorage.getItem("user");
          const studentResponse = await axios.get(`http://localhost:8000/student/${userId}`, {
            headers: {
              'userstoken': token // Incluir el token en el encabezado
            }
          });
          setCourseData(studentResponse.data.curso);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    
    fetchCourseData();
  }, []);

  const handleVerMasClick = (contenido) => {
    setSelectedContent(contenido);
    setModalVisible(true);
  };

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className= "text-black">
      <h1>{courseData.NombreCurso}</h1>
      <img src={courseData.imageUrl} alt={courseData.NombreCurso} />
      <p>Docente: {courseData.Docente}</p>
      <p>Duración: {courseData.Duracion}</p>
      <button onClick={() => handleVerMasClick(courseData.contenidocurso)}>Ver más</button>

      {/* Modal */}
      {modalVisible && selectedContent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>&times;</span>
            <h2>{selectedContent.TituloMaterial}</h2>
            <p>Descripción: {selectedContent.Descripcion}</p>
            <p>Opiniones: {selectedContent.Opiniones}</p>
            <p>Nivel: {selectedContent.Nivel}</p>
            <p>Aptitudes: {selectedContent.Aptitud1}, {selectedContent.Aptitud2}, {selectedContent.Aptitud3}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
