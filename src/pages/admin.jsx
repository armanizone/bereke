import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { db, storage } from 'firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { getDownloadURL, ref} from 'firebase/storage';
import { MdDeleteForever } from 'react-icons/md';

export const Admin = () => {

  const [bids, setBids] = React.useState([])

  async function getBids () {
    const q = query(collection(db, "bids"));

    const querySnapshot = await getDocs(q);
    const items = []
    querySnapshot.forEach((doc) => {
      items.push({id: doc.id, ...doc.data()})
    });
    setBids(items)
  } 

  React.useEffect(() => {
    getBids()
  }, [])



  return (
    <div className='w-full mt-10 overflow-scroll'>
      <h1 className='text-center text-3xl'>Заявки</h1>
      <div className="container">
        <Table className='mt-8'>
          <Thead>
            <Tr>
              <Th>Телефон</Th>
              <Th>Имя</Th>
              <Th>Товары</Th>
              <Th>Общая стоимость</Th>
              <Th>Скриншот оплаты</Th>
              <Th>Действие</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bids.map(q => {
              return (
                <Tr key={q.id}>
                  <Td className='whitespace-nowrap'>{q?.phone}</Td>
                  <Td className='whitespace-nowrap'>{q?.name}</Td>
                  <Td className='whitespace-nowrap'>{q?.goods?.map((w, i) => {
                    return (
                      <p key={i}>{w?.title} {w?.quantity}</p>
                    )
                  })}</Td>
                  <Td className='whitespace-nowrap'>{q?.goods?.map(w => {
                    return w?.price * w?.quantity
                  }).reduce((a, b) => a + b)} ₸</Td>
                  <Td className='whitespace-nowrap'><Image q={q}/></Td>
                  <Td className='whitespace-nowrap'>
                    <MdDeleteForever size={50} />
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </div>
    </div>
  )
}

export const Image = ({q}) => {

  const [img, setImg] = React.useState(null) 

  async function getImage () {
    await getDownloadURL(ref(storage, q.imageUrl))
    .then(res => {
      setImg(res)
    })
  }

  React.useEffect(() => {
    getImage()
  }, [])

  return (
    <img src={img} alt="" className='max-w-20 max-h-20 mx-auto' />
  )
}
