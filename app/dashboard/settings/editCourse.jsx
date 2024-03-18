// EditCourse.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditCourse = ({ courseId }) => {
  const [curso, setCurso] = useState({});

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/cursos/${courseId}`);
        setCurso(response.data);
      } catch (error) {
        console.error('Error fetching curso:', error);
      }
    };

    fetchCurso();
  }, [courseId]);

  // Función para editar el curso
  const updateCurso = async () => {
    try {
      await axios.put(`http://localhost:8000/cursos/${curso.ID}`, curso);
      // Redirigir al usuario a la página de configuración de cursos después de la actualización
      window.location.href = '/dashboard/settings';
    } catch (error) {
      console.error('Error al editar el curso:', error);
    }
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  return (
    <div>
      <h1>Editar Curso</h1>
      <form>
        <label>
          Nombre del Curso:
          <input type="text" name="NombreCurso" value={curso.NombreCurso} onChange={handleChange} />
        </label>
        <label>
          Imagen URL:
          <input type="text" name="imageUrl" value={curso.imageUrl} onChange={handleChange} />
        </label>
        <label>
          ID contenido curso:
          <input type="text" name="contenido curso ID" value={curso.contenidocurso_ID} onChange={handleChange} />
        </label>
        <label>
          Docente:
          <input type="text" name="docente" value={curso.docente} onChange={handleChange} />
        </label>
        <label>
          Duración del curso:
          <input type="text" name="duracion" value={curso.duracion} onChange={handleChange} />
        </label>
        <button type="button" onClick={updateCurso}>Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditCourse;
