import React from 'react'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


export default function EditButton() {
  return (
    <button
      className="button-courses flex items-center text-white mb-3"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPenToSquare} />
      <span className="ml-2">Ver más</span>
    </button>
  )
}
