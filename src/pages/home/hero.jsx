import React from 'react'
import flour from 'assets/hero-flour.png'

export const Hero = () => {
  return (
    <div className="w-full grid lg:grid-cols-[50%_auto] mt-8 md:mt-14 px-4">
      <div className='max-w-3xl'>
        <h1 className='text-3xl font-semibold border-black border-b-2 text-center pb-1'>
          Bereke almaty vypechka
        </h1>
        <p className='text-2xl mt-5 font-semibold tracking-wider text-center'>
          Мы на рынке уже 7 лет. Все клиенты очень довольны. Мы производим чистую ручную выпечку, молочные продукты. 
          Все пищевые ингредиенты готовятся из чистых продуктов ручной работы. Мы готовим горячий хлеб выпеченный на молоке собственных коров, 
          тесто из ручных яиц. Обязательно обращайтесть к нам и у вас появится возможность воспользоваться нашей продукцией
        </p>
      </div>
      <img src={flour} className='w-full mix-blend-multiply' />
    </div>
  )
}
