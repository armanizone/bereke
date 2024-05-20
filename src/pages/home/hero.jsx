import React from 'react'
import flour from 'assets/hero-flour.png'

export const Hero = () => {
  return (
    <div className="w-full grid lg:grid-cols-[45%_auto] my-4">
      <div className='max-w-3xl'>
        <h1 className='text-2xl font-semibold border-black border-b-2 text-center pb-1'>
          Bereke almaty vypechka
        </h1>
        <p className='text-xl mt-5 font-semibold tracking-wider'>
          Мы на рынке уже 7 лет. Все клиенты очень довольны. Мы производим чистую ручную выпечку, молочные продукты. 
          Все пищевые ингредиенты готовятся из чистых продуктов ручной работы. Мы готовим горячий хлеб выпеченный на молоке собственных коров, 
          тесто из ручных яиц. Обязательно обращайтесть к нам и у вас появится возможность воспользоваться нашей продукцией
        </p>
      </div>
      <img src={flour} className='w-full'/>
    </div>
  )
}
