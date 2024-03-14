import React from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.js

export default function ButtonHome({ text, href }) {
  return (
    <Link href={href}> {/* Envuelve el botón con el componente Link de Next.js */}
      <a className="bg-[#007AFF] text-white hover:bg-[#183579] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        {text}
      </a>
    </Link>
  );
}