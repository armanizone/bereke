import React from 'react'
import { Outlet } from 'react-router'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { Footer } from './footer'
import { Anime } from './anime'

export const Layout = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <div className='fixed w-full h-full -z-10'>
        <marquee
          direction="down"
          behavior="alternate"
          className='w-full h-full'
        >
          <marquee behavior="alternate" scrollAmount="15">
            <Anime/>
          </marquee>
        </marquee>
      </div>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
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
