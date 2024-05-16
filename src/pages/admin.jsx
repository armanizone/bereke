import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { db } from 'firebase';

export const Admin = () => {

  const [bids, setBids] = React.useState([])

  async function getBids () {
    const q = query(collection(db, "bids"));

    const querySnapshot = await getDocs(q);
    const items = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      items.push({id: doc.id, ...doc.data()})
    });
    setBids(items)
  } 

  return (
    <div className='w-full mt-10'>
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
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </div>
    </div>
  )
}
