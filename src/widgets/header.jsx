import React from 'react'
import { FaHome } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export const Header = () => {

  const {pathname} = useLocation()

  if (pathname.includes('cart')) return (
    <div className='w-full py-2  border-b-4 border-blue-400 bg-pink-200'>
      <div className="container">
        <div className='w-full flex justify-between'>
          <Link to={'/'}>
            <FaHome className='text-4xl lg:text-7xl' />
          </Link>
          <Link to={'/'}>
            <span className='text-4xl lg:text-7xl font-mono'>
              BEREKE
            </span>
          </Link>
          <Link to={'/cart'}>
            <CiShoppingBasket className='text-4xl lg:text-7xl'/>
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className='w-full py-2  border-b-4 border-blue-400'>
      <div className="container">
        <div className='w-full flex justify-between'>
          <Link to={'/'}>
            <FaHome className='text-4xl lg:text-7xl'/>
          </Link>
          <span className='text-4xl lg:text-7xl font-mono'>
            BEREKE
          </span>
          <Link to={'/cart'}>
            <CiShoppingBasket className='text-4xl lg:text-7xl'/>
          </Link>
        </div>
      </div>
    </div>
  )
}