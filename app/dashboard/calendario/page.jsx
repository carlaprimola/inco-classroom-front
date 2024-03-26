"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./calendar.css";
import moment from 'moment';
// import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendar,
  faXmark,
  faClock,
  faUserTie,
  faHourglass,
} from "@fortawesome/free-solid-svg-icons";

function CalendarioPage() {
  const [calendarioData, setCalendarioData] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    Fecha: "",
    Hora: "",
    DescripcionActividad: "",
    Direccion: "",
    CursoID: "",
  });

  useEffect(() => {
    const fetchCalendario = async () => {
      try {
        const response = await axios.get("http://localhost:8000/calendario");
        // console.log("Eventos del calendario:", response.data);
        setCalendarioData(response.data);
      } catch (error) {
        console.log("Error al mostrar el calendario:", error);
      }
    };
    fetchCalendario();
  }, []);

  // Función para obtener los días de un mes y año específicos
  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  // Obtener los días de marzo de 2024
  const march2024 = getDaysInMonth(2, 2024);
  const monthName = new Intl.DateTimeFormat("es", { month: "long" }).format(
    march2024[0]
  );
  const capitalizedMonth =
    monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const year = march2024[0].getFullYear();

  // Array de los nombres de los días de la semana (de lunes a domingo)
  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  // Función para abrir el modal y mostrar la información del evento seleccionado
  const openModal = (evento) => {
    setSelectedEvent(evento);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    // Verificar si el valor no es nulo o indefinido
    if (value !== null && value !== undefined) {
      setNewEvent((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }; 
  

    
//   const handleSubmit = async (event) => {
//     event.preventDefault();
         
//     if (
//       !newEvent.Fecha ||
//       !newEvent.Hora ||
//       !newEvent.DescripcionActividad ||
//       !newEvent.Direccion ||
//       !newEvent.CursoID
//     ) {
//       console.error("Alguna propiedad de newEvent es nula o indefinida");
//       return;
//     }
  
//     // Verificar que las propiedades de newEvent no estén vacías después de recortar los espacios en blanco
//     if (
//       newEvent.Fecha.trim() === "" ||
//       newEvent.Hora.trim() === "" ||
//       newEvent.DescripcionActividad.trim() === "" ||
//       newEvent.Direccion.trim() === "" ||
//       newEvent.CursoID.trim() === ""
//     ) {
//       console.error("Alguna propiedad de newEvent está vacía después de recortar los espacios en blanco");
//       return;
//     }
  
//     // Validar el formato de la fecha
//     const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Expresión regular para el formato yyyy-MM-dd
//     const timeRegex = /^\d{2}:\d{2}$/; // Expresión regular para el formato hh:mm
//     if (!dateRegex.test(newEvent.Fecha) || !timeRegex.test(newEvent.Hora)) {
//       console.error("El formato de la fecha o la hora no es válido. El formato debe ser yyyy-MM-dd para la fecha y hh:mm para la hora");
//       // Agrega un mensaje de error o manejo adecuado para la fecha o la hora con formato incorrecto
//       return;
// }

  
//     // Si la fecha tiene el formato correcto, continuar con el envío de datos al servidor
//     try {
//       const response = await axios.post("http://localhost:8000/calendario", newEvent);
//       console.log("Evento creado correctamente:", response.data);
      
//       // Restablecer el estado del nuevo evento después de enviar los datos
//       setNewEvent({
//         Fecha: "",
//         Hora: "",
//         DescripcionActividad: "",
//         Direccion: "",
//         CursoID: "",
//       });
      
//       setIsModalOpen(false);
//     } catch (error) {
//       console.log("Error al crear el nuevo evento:", error);
//       // Agregar un manejo adecuado para el error al crear el evento
//     }
//   };
   // //Envio de formulario
  
const handleSubmit = async (event) => {
  event.preventDefault();

  // Verificar si alguna propiedad de newEvent es nula o indefinida
  if (
    !newEvent.Fecha ||
    !newEvent.Hora ||
    !newEvent.DescripcionActividad ||
    !newEvent.Direccion ||
    !newEvent.CursoID
  ) {
    console.error("Alguna propiedad de newEvent es nula o indefinida");
    return;
  }

  // Verificar si alguna propiedad de newEvent está vacía después de recortar los espacios en blanco
  if (
    newEvent.Fecha.trim() === "" ||
    newEvent.Hora.trim() === "" ||
    newEvent.DescripcionActividad.trim() === "" ||
    newEvent.Direccion.trim() === "" ||
    newEvent.CursoID.trim() === ""
  ) {
    console.error("Alguna propiedad de newEvent está vacía después de recortar los espacios en blanco");
    return;
  }

  // Validar el formato de la fecha y la hora
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Expresión regular para el formato yyyy-MM-dd
  const timeRegex = /^\d{2}:\d{2}$/; // Expresión regular para el formato hh:mm
  if (!dateRegex.test(newEvent.Fecha) || !timeRegex.test(newEvent.Hora)) {
    console.error("El formato de la fecha o la hora no es válido. El formato debe ser yyyy-MM-dd para la fecha y hh:mm para la hora");
    // Agrega un mensaje de error o manejo adecuado para la fecha o la hora con formato incorrecto
    return;
  }

  // Si la fecha y la hora tienen el formato correcto, continuar con el envío de datos al servidor
  try {
    const response = await axios.post("http://localhost:8000/calendario", newEvent);
    console.log("Evento creado correctamente:", response.data);
    
    // Restablecer el estado del nuevo evento después de enviar los datos
    setNewEvent({
      Fecha: "",
      Hora: "",
      DescripcionActividad: "",
      Direccion: "",
      CursoID: "",
    });
    
    setIsModalOpen(false);
  } catch (error) {
    console.log("Error al crear el nuevo evento:", error);
    // Agregar un manejo adecuado para el error al crear el evento
  }
};

    
  return (
    <main>
      <h5 className="text-xl font-bold mt-4 mb-2 text-black">Calendario</h5>
      <div className="flex flex-col">
        <span className="text-black mt-3 mb-3">
          Aquí tienes un resumen de los eventos a los que asistir en INCO
          Academy
        </span>
        <div className="flex justify-center items-center">
          <button
            className="evento-button flex justify-center items-center text-white px-4 py-2 rounded hover:bg-blue-600 text-center text-sm"
            onClick={() => setIsModalOpen(true)}
          >
            Nuevo Evento
          </button>
        </div>
      </div>

      {/* Modal para crear nuevo evento */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="modal-calendar w-1/2 bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <input
              type="date"
              name="Fecha"
              value={newEvent.Fecha}
              onChange={handleInputChange}
              className="mb-4 text-black"
            />
            <input
              type="time"
              name="Hora"
              value={newEvent.Hora}
              onChange={handleInputChange}
              className="mb-4 text-black"
            />
             <input
              type="text"
              name="DescripcionActividad"
              value={newEvent.DescripcionActividad}
              onChange={handleInputChange}
              placeholder="Descripción de la Actividad"
              className="mb-4  text-black"
            />
            <input
              type="text"
              name="Direccion"
              value={newEvent.Direccion}
              onChange={handleInputChange}
              placeholder="Dirección"
              className="mb-4  text-black"
            />
            
            <input
              type="text"
              name="CursoID"
              value={newEvent.CursoID}
              onChange={handleInputChange}
              placeholder="ID del Curso"
              className="mb-4  text-black"
            />
            {/* Contenedor para el botón */}
            <div className="mb-4 flex justify-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Crear Evento
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className="mt-8 rounded bg-blue-500 text-center text-lg font-medium mb-5 text-white">
        {capitalizedMonth} {year}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="p-2 border border-gray-300 text-center text-m font-medium text-black mb-3"
          >
            {day}
          </div>
        ))}

        {march2024.map((day, index) => (
          <div
            key={index + 7}
            className="mb-5 p-2 border border-gray-300 text-end text-sm font-medium text-black"
          >
            {day.getDate()}

            {calendarioData &&
              calendarioData.map(
                (evento) =>
                  moment(evento.Fecha).format("YYY-MM-DD") === moment(day).format("YYY-MM-DD") && (
                    <div
                      key={evento.ID}
                      className="cursor-pointer bg-blue-500 text-white p-1 mb-1 rounded text-sm"
                      onClick={() => openModal(evento)}
                    >
                      {evento.DescripcionActividad}
                    </div>
                  )
              )}
          </div>
        ))}
      </div>

      {/* Modal */}

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="modal-calendar w-1/2 bg-white p-6 rounded-lg">
            <button
              className="text-black flex ml-auto text-xl mb-5"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img
              src={selectedEvent.curso.imageUrl}
              alt="Calendario"
              className="w-full h-40 object-cover rounded-lg mb-5"
              style={{ width: "100%", height: "auto" }}
            />
            <h3 className="text-black text-xl font-bold mb-4">
              {selectedEvent.DescripcionActividad}
            </h3>
            <p className="text-black">
              <FontAwesomeIcon icon={faCalendar} style={{ color: "#007aec" }} />{" "}
              {selectedEvent.Fecha}
            </p>
            <p className="text-black">
            <FontAwesomeIcon
                    icon={faClock}
                    style={{ color: "#007aec" }}
                  />{" "}
              {selectedEvent.Hora}
            </p>
            <p className="text-black">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#007aff" }}
              />{" "}
              {selectedEvent.Direccion}
            </p>
            {/* Verificar si selectedEvent.curso existe antes de mostrarlo */}
            {selectedEvent.curso && (
              <>
                <p className="text-black flex items-center">
                  <FontAwesomeIcon
                    icon={faUserTie}
                    style={{ color: "#007aec" }}
                  />
                  <span className="ml-1">{selectedEvent.curso.Docente}</span>
                </p>
                <p className="text-black flex items-center">
                <FontAwesomeIcon icon={faHourglass} style={{color: "#007aff",}} />
                  <span className="ml-1">{selectedEvent.curso.Duracion}</span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default CalendarioPage;
