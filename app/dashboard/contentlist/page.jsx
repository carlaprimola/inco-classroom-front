"use client"
// ContentListPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const ContentListPage = ({ curso }) => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        if (curso) {
            fetchContents(curso.contenidocurso_ID);
        }
    }, [curso]);

    const fetchContents = async (courseContentId) => {
        try {
            const response = await axios.get(`http://localhost:8000/cursos/${courseContentId}/contenido`);
            setContents(response.data);
        } catch (error) {
            console.error("Error fetching contents:", error);
        }
    };

    const deleteContent = async (contentId) => {
        try {
            await axios.delete(`http://localhost:8000/cursos/${curso.contenidocurso_ID}/contenido/${contentId}`);
            const updatedContents = contents.filter(content => content.ID !== contentId);
            setContents(updatedContents);
        } catch (error) {
            console.error('Error deleting content:', error);
        }
    };

    const editContent = (contentId) => {
        window.location.href = `/dashboard/editcontent?contentId=${contentId}`;
    };

    return (
        <div>
            <h1>Lista de Contenidos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID del Contenido</th>
                        <th>Titulo del Material</th>
                        <th>Tipo de Recurso</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map(content => (
                        <tr key={content.ID}>
                            <td>{content.ID}</td>
                            <td>{content.TituloMaterial}</td>
                            <td>{content.TipoRecurso}</td>
                            <td>{content.Descripcion}</td>
                            <td>
                                <button onClick={() => editContent(content.ID)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                <button onClick={() => deleteContent(content.ID)}><FontAwesomeIcon icon={faTrash} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContentListPage;
