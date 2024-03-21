"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt,faEye, faXmark, faShareNodes  } from "@fortawesome/free-solid-svg-icons";
import StartCourseButton from "../../ui/dashboard/courses/StartCourseButton";
import ShareButton from "../../ui/dashboard/courses/ShareButton";
import ViewMoreButton from "../../ui/dashboard/courses/ViewMoreButton";

const CardPage = () => {
  const [cursos, setCursos] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/cursos");
        console.log("Datos de cursos recibidos:", response.data);
        setCursos(response.data);
      } catch (error) {
        console.error("Error fetching cursos:", error);
      }
    };

    fetchCursos();
  }, []);

  const handleCursoClick = async (cursoID) => {
    try {
      const responseCurso = await axios.get(
        `http://localhost:8000/cursos/${cursoID}`
      );
      console.log("Datos del curso seleccionado:", responseCurso.data);
      setCursoSeleccionado(responseCurso.data);

      // Obtener el contenido del curso si hay un ID de contenido
      if (responseCurso.data.contenidocurso_ID) {
        const responseContenido = await axios.get(
          `http://localhost:8000/contenido/${responseCurso.data.contenidocurso_ID}`
        );
        console.log("Contenido del curso:", responseContenido.data);
        // Agregar el contenido del curso al objeto del curso seleccionado
        setCursoSeleccionado((prevCursoSeleccionado) => ({
          ...prevCursoSeleccionado,
          contenidocurso: responseContenido.data,
        }));
      }

      // Abrir el modal
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching curso content:", error);
    }
  };

    // Boton comenzar curso
    const handleStartCourseClick = () => {
        console.log("Comenzar curso");
      };


      //Boton compartir curso
      const handleShareCourseClick = () => {
        console.log("Compartir curso")
      }


      const handleVerMasClick = (cursoID) => {
        // Encuentra el curso correspondiente al ID
        const curso = cursos.find(curso => curso.ID === cursoID);
      
        // Actualiza el estado del curso seleccionado
        setCursoSeleccionado(curso);
      
        // Muestra el modal
        setModalVisible(true);
      };


      
  return (
    <main ClassNameName="bg-gray-100 min-h-screen py-16">
      <section ClassNameName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ClassNameName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cursos.map((curso) => (
            <div
              key={curso.ID}
              ClassNameName="w-50 h-90 hover:shadow-xl cursor-pointer bg-white rounded-lg shadow-md overflow-hidden"
              onClick={() => handleCursoClick(curso.ID)}
            >
              <img
                src={curso.imageUrl}
                alt={curso.NombreCurso}
                ClassNameName="w-full h-40 object-cover"
              />
              <div
                ClassNameName="duration-overlay text-white text-center py-2"
                style={{ backgroundColor: "rgba(8, 33, 92, 1)" }}
              >
                Duración: {curso.Duracion}
              </div>
              <div ClassNameName="p-5">
                <h2 ClassNameName="text-xl text-black font-semibold text-center h-40">
                  {curso.NombreCurso}
                </h2>
                <div ClassNameName="flex justify-center">
                  <ViewMoreButton onClick={() => handleVerMasClick(curso.ID)}/>
                </div>

                <h4 ClassNameName="text-l text-black font-semibold text-center">
                  Profesor: {curso.Docente}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalVisible &&
        cursoSeleccionado &&
        cursoSeleccionado.contenidocurso && (
          <main ClassNameName="fixed z-10 inset-0 overflow-y-auto">
            <section ClassNameName="flex items-center justify-center min-h-screen">
              <div
                ClassNameName="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div ClassNameName="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div ClassNameName="w-200 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <article ClassNameName="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <button
                    onClick={() => setModalVisible(false)}
                    ClassNameName="text-black flex ml-auto text-xl mb-5"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <img
                    src={cursoSeleccionado.imageUrl}
                    alt={cursoSeleccionado.NombreCurso}
                    ClassNameName="w-full h-40 object-cover rounded-lg mb-5"
                  />
                  <h2 ClassNameName="text-xl font-semibold text-gray-900 mb-2">
                    {cursoSeleccionado.NombreCurso}
                  </h2>
                  <h3 ClassNameName="text-lg font-semibold text-gray-900 mb-2">
                    {cursoSeleccionado.contenidocurso.TituloMaterial}
                  </h3>
                  <div ClassNameName="flex justify-center">
                  <h4 ClassNameName="text-sm text-gray-500">
                    {cursoSeleccionado.Duracion}
                  </h4>
                  <h4 ClassNameName="text-sm text-gray-500 mr-4 ml-4">Nivel:{cursoSeleccionado.contenidocurso.Nivel}</h4>
                  <h4 ClassNameName="text-sm text-gray-500 mb-2">
                    Tipo de Recurso:{" "}
                    {cursoSeleccionado.contenidocurso.TipoRecurso}
                  </h4>
                  </div>
                  
                  <div ClassNameName="flex space-x mt-3 mb-3">
                    <p ClassNameName="text-sm text-gray-500 mb-2">
                      <FontAwesomeIcon
                        icon={faStar}
                        ClassNameName="text-yellow-500"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        ClassNameName="text-yellow-500"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        ClassNameName="text-yellow-500"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        ClassNameName="text-yellow-500"
                      />
                      <FontAwesomeIcon
                        icon={faStarHalfAlt}
                        ClassNameName="text-yellow-500"
                      />
                    </p>
                    <p ClassNameName="text-sm text-gray-500 mb-2 ml-2">
                      {" "}
                      Opiniones: {cursoSeleccionado.contenidocurso.Opiniones}
                    </p>
                  </div>

                  <span ClassNameName="font-semibold text-gray-900 mt-3 mb-5">
                    Aptitudes tratadas en este curso: </span>

                  <section ClassNameName="flex w-100 mt-4 mb-4 gap-5 text-center rounded-lg justify-center items-center">
                    <p ClassNameName="text-xs w-30 text-center bg-blue-100 rounded-lg p-2 text-blue-500 items-center">
                      {cursoSeleccionado.contenidocurso.Aptitud1}
                    </p>
                    <p ClassNameName="text-xs w-30 bg-blue-100 rounded-lg p-2 text-blue-500  text-center items-center justify-center">
                      {cursoSeleccionado.contenidocurso.Aptitud2}
                    </p>
                    <p ClassNameName=" flex text-xs w-30 h-10 bg-blue-100 rounded-lg p-2 text-blue-500 text-center items-center justify-center">
                      {cursoSeleccionado.contenidocurso.Aptitud3}
                    </p>
                  </section>

                  <span ClassNameName="font-semibold text-gray-900 mt-3 mb-3">
                    Descripción del curso:
                  </span>
                  <p ClassNameName="text-s text-gray-700 text-justify mb-3">
                    {cursoSeleccionado.contenidocurso.Descripcion}
                  </p>
                  <span ClassNameName="font-semibold text-gray-900 mt-3 mb-3">
                    Qué aprenderás:
                  </span>
                  {cursoSeleccionado.contenidocurso && (
                    <>
                      <p ClassNameName="text-s text-gray-700 text-justify mb-3">
                        {cursoSeleccionado.contenidocurso.Contenido}
                      </p>
                    </>
                  )}
                </article>
                <footer ClassNameName="bg-gray-50 px-4 py-3 sm:px-6 flex justify-center">
                {/* boton comenzar curso */}
                    <StartCourseButton onClick={handleStartCourseClick} />

                {/* boton compartir */}
                    <ShareButton onClick={handleShareCourseClick}/>
                </footer>

              </div>
            </section>
          </main>
        )}
    </main>
  );
};

export default CardPage;
