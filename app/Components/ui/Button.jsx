import React from 'react'

const Button = ({label, className, onClick, type = "button"}) => {
  return (
    <div>
     <button type={type}
      onClick={onClick}
    //   className={`px-4 py-2 rounded-md transition duration-200 font-medium ${className}`} 

      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{label}</button>
         
    </div>      
  )
}

export default Button ;
