import React from 'react'
import { Outlet } from 'react-router'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { Footer } from './footer'

export const Layout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <div className='w-full'>
        <Header/>
        <Sidebar/>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}
