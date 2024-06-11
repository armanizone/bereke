import React from 'react'
import { Outlet } from 'react-router'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { Footer } from './footer'
import { Anime } from './anime'

export const Layout = () => {
  return (
    <div className='w-full min-h-screen relative p-4 md:p-20 bg-gradient-to-r from-emerald-400 to-pink-400'>
      {/* <div className='fixed w-full h-full hidden sm:block -z-10'>
        <marquee
          direction="down"
          behavior="alternate"
          className='w-full h-full'
        >
          <marquee behavior="alternate">
            <Anime/>
          </marquee>
        </marquee>
      </div> */}
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen rounded shadow-md bg-gradient-to-bl from-pink-50 to-rose-400">
        <div className='w-full'>
          <Header/>
          <Sidebar/>
        </div>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
}
