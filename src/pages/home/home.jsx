import React from 'react'
import { Hero } from './hero'
import { db } from 'firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useSearchParams } from 'react-router-dom';
import { Card } from 'widgets/card';

export const Home = () => {

  const [searchParams] = useSearchParams()
  const type = searchParams.get('type')

  const [food, setFood] = React.useState([])

  async function getFood () {
    const type = searchParams.get('type')
    const q = query(collection(db, "food"), where(`type`, `==`, type));

    const querySnapshot = await getDocs(q);
    const items = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      items.push({id: doc.id, ...doc.data()})
    });
    setFood(items)
  } 

  React.useEffect(() => {
    getFood()
  }, [searchParams])

  if (food.length !== 0) {
    return (
      <div className='w-full'>
        <div className="container">
          <div className="w-full">
            <h2 className='my-10 text-2xl text-center font-semibold'>
              {type === `milk` && 'Молочные продукты'}
              {type === `flour` && 'Мучные изделия'}
              {type === `cake` && 'Домашние торты'}
              {type === `set` && 'Выгодые сеты'}
            </h2>
            <div className='grid grid-cols-4 gap-4'>
              {food.map(q => {
                return (
                  <Card key={q.id} value={q}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full'>
      <div className="container w-full h-full">
        <div className='w-full h-full flex items-center justify-center'>
          <Hero/>
        </div>
      </div>
    </div>
  )
}
