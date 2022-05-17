import React from 'react'

const ChartFilter = ({text, active, onClick}) => {
  return (
   <button onClick={onClick} className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${active ? "bg-blue-600 border-blue-600 text-gray-200" : "border-2 border-blue-300 text-blue-300 " }`}>{text}</button>
  )
}

export default ChartFilter