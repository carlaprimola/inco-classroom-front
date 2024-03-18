import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


export default function ViewMoreButton({ onClick }) {
  return (
    <button
      className="button-courses flex items-center text-white mb-3"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faEye} />
      <span className="ml-2">Ver más</span>
    </button>
  )
}
