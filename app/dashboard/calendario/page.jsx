"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendar,
  faXmark,
  faClock,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

function CalendarioPage() {
  const [calendarioData, setCalendarioData] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <main>
      <h5 className="text-xl font-bold mt-4 mb-2 text-black">Calendario</h5>
      <span className="text-black mt-3 mb-3">
        Aquí tienes un resumen de los eventos a los que asistir en INCO Academy
      </span>
      <h2 className="mt-8 rounded bg-blue-500 text-center text-lg font-medium mb-5 text-white">
        {capitalizedMonth} {year}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {/* Renderizar los nombres de los días de la semana */}
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="p-2 border border-gray-300 text-center text-m font-medium text-black mb-3"
          >
            {day}
          </div>
        ))}
        {/* Renderizar los días del mes */}
        {march2024.map((day, index) => (
          <div
            key={index + 7}
            className="mb-5 p-2 border border-gray-300 text-end text-sm font-medium text-black"
          >
            {day.getDate()}
            {/* Filtrar y mostrar los eventos para este día */}
            {calendarioData &&
              calendarioData.map(
                (evento) =>
                  evento.Fecha === day.toISOString().split("T")[0] && (
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
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ color: "#007aec" }}
                  />
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
