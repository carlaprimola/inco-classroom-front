"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonModal from "../../ui/dashboard/button/ButtonModal";

const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      const userId = localStorage.getItem("user");
      try {
        const response = await axios.get(`http://localhost:8000/student/${userId}`);
        setCourseData(response.data.curso);
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

  const handleCloseModal = () => {
    setSelectedContent(null);
    setModalVisible(false);
  };

  if (!courseData) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="bg-white pb-6">

      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl text-black">

        {/* Image Column */}
        <div className="w-full h-full">
          <img className="h-full w-full object-cover" src={courseData.imageUrl} alt={courseData.NombreCurso} />
        </div>
        {/* Close Image Column */}

        {/* Text Column */}
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 rounded-xl bg-opacity-90">
          {/* Text Wrapper */}
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-[#007AFF] lg:text-4xl">{courseData.NombreCurso}</h2>
            
            <p className="mt-4">
              {selectedContent ? selectedContent.Descripcion : ""}
            </p><br></br>
            <h1 className="font-bold">{selectedContent ? selectedContent.TituloMaterial : ""}</h1><br></br>
            {modalVisible && selectedContent && (
              <div className="modal">
                <div className="modal-content">
                  <p>Descripción: {selectedContent.Descripcion}</p><br></br>
                  {/* <h2>{selectedContent.TituloMaterial}</h2> */}
                  <p>Opiniones: {selectedContent.Opiniones}</p><br></br>
                  <p>Nivel: {selectedContent.Nivel}</p>
                  <p>Aptitudes: {selectedContent.Aptitud1}, {selectedContent.Aptitud2}, {selectedContent.Aptitud3}</p>
                  {/* <span className="close" onClick={() => setModalVisible(false)}>&times;</span> */}
                </div>
              </div>
            )}
            {/* Button Container */}
            <div className="mt-8">
              <ButtonModal
                text={modalVisible ? "Ver Menos" : "Ver Más"} href='#'
                onClick={modalVisible ? handleCloseModal : () => handleVerMasClick(courseData.contenidocurso)}
              />
              {/* <button  onClick={() => handleVerMasClick(courseData.contenidocurso)}>Ver más</button> */}
            </div>
          </div>
          {/* Close Text Wrapper */}
        </div>
        {/* Close Text Column */}
      </div>

      <h1>{courseData.NombreCurso}</h1>
      {/* <img src={courseData.imageUrl} alt={courseData.NombreCurso} /> */}
      <p>Docente: {courseData.Docente}</p>
      <p>Duración: {courseData.Duracion}</p>


    </section>


  );
};

export default CourseDetails;