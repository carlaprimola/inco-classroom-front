import React from 'react';
import Link from 'next/link';

const ButtonModal = ({ text, href, onClick, modalVisible }) => {
  const handleClick = modalVisible ? () => onClick(false) : () => onClick(true);
  const buttonText = modalVisible ? "Ver Menos" : text;

  return (
    <Link legacyBehavior href={href} as={href}>
      {/* Utiliza el prop 'as' para renderizar el Link como un enlace <a> */}
      <a 
        className="bg-[#08215C] text-white hover:bg-[#183579] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        onClick={handleClick} // Llama a la función onClick pasada como prop
      >
        {buttonText}
      </a>
    </Link>
  );
}

export default ButtonModal;