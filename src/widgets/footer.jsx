import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='w-full bg-pink-200 py-3 mt-5'>
      <div className="container">
        <div className="w-full">
          <p className='font-semibold'>
            Контактные связи
          </p>
          <div className='flex gap-2 items-center mt-4'>
            <FaWhatsapp size={40} color='green'/>
            <FaInstagramSquare size={40} color='red'/>
            <span className='font-bold'>+7 707 659 9069</span>
          </div>
        </div>
      </div>
    </div>
  )
}