import React from 'react'


export default function StartCourseButton({ onClick }) {
  return (
    <button
      className="button-courses w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={onClick}
    >
      Comenzar curso
    </button>
  )
}
