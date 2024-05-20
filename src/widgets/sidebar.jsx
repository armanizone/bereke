import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const options = [
  {label: 'Мучные изделия', val: 'flour'},
  {label: 'Домашные торты', val: 'cake'},
  {label: 'Молочные продукты', val: 'milk'},
  // {label: 'Выгодные сеты', val: 'set'},
]

export const Sidebar = () => {

  const {pathname} = useLocation()

  const [_, setSearchParams] = useSearchParams()

  function handleClick (type) {
    setSearchParams({
      type
    })
  }

  if (pathname.includes('cart') || pathname.includes('admin')) return <></>

  return (
    <div className='w-ful bg-pink-200 py-4'>
      <div className="container">
        <div className="w-full flex flex-wrap justify-around gap-4">
          {options.map(q => {
            return (
              <button key={q.val} onClick={() => handleClick(q.val)}>
                <span className='text-lg font-bold'>
                  {q.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}