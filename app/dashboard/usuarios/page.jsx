"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image';

const UserPage = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get("http://localhost:8000/usuarios");
        console.log("Datos de usuarios recibidos:", response.data);
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error fetching usuarios:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <main>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 mt-5">Listado de Usuarios</h2>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tipo
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {usuarios.map((usuario) => (
            <tr key={usuario.ID}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Image 
                      src={usuario.imgProfile} 
                      alt={`Imagen de ${usuario.Nombre}`} 
                      width={40} 
                      height={40} 
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {usuario.Nombre}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-gray-500">{usuario.Email}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-gray-500">{usuario.role && usuario.role.TipoRol}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default UserPage;
