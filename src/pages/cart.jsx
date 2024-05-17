import React from 'react'
import { Button, Input } from '@chakra-ui/react'
import { MdDeleteForever } from "react-icons/md";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from 'firebase';
import { doc, setDoc } from 'firebase/firestore';

export const CartElement = ({q, decreaseQuantity, increaseQuantity, removeItemFromCart, cart}) => {
  
  const [image, setImage] = React.useState(null)

  async function getImage () {
    getDownloadURL(ref(storage, q.imageUrl))
    .then(url => {
      setImage(url)
    })
  }

  React.useEffect(() => {
    getImage()
  }, [])

  return (
    <div className='flex flex-col lg:flex-row items-center'>
      <img src={image} alt="" className='max-w-64 max-h-[100px]' />
      <p className='lg:ml-12 text-green-700 text-3xl font-bold'>{q.title}</p>
      <div className='grid lg:grid-cols-[45%_45%_auto] lg:ml-auto lg:w-[400px] gap-4 mt-3 lg:mt-0'>
        <div className='flex justify-between border border-green-700 py-2 px-4 space-x-4 rounded-full text-xl text-green-700 font-bold min-w-14 max-w-32'>
          <button onClick={() => decreaseQuantity(q.id)}>-</button>
          <span>{q.quantity}</span>
          <button onClick={() => increaseQuantity(q.id)}>+</button>
        </div>
        <p className='text-green-700 text-3xl font-bold'>{q.price * q.quantity} ₸</p>
        <MdDeleteForever size={40} onClick={() => removeItemFromCart(q.id)} color='green' className='mx-auto'/>
      </div>
    </div>
  )
}

export const Cart = () => {

  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const [file, setFile] = React.useState(null)

  const [user, setUser] = React.useState({
    phone: '',
    name: ''
  })

  function handleFile (e) {
    setFile(e.currentTarget.files[0])
  }

  async function createBid () {
    const id = crypto.randomUUID()
    const storage = getStorage();
    const storageRef = ref(storage, id);
  
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded');
    });

    await setDoc(doc(db, "bids", id), {
      ...user,
      imageUrl: id,
      goods: [...cart]
    });
    setUser({
      phone: '',
      name: ''
    })
    setFile(null)
    localStorage.removeItem('cart');
    setCart([]);
  }

  const updateCart = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  return (
    <div className='w-full mt-8'>
      <div className="container">
        <div className="w-full">
          <p className='text-2xl font-bold'>1. Контактные данные</p>
          <div className='flex mt-4'>
            <div>
              <label className='font-bold text-sm text-gray-600'>Номер телефона</label>
              <Input variant='flushed' placeholder='+7 (7__) ___-__-__' value={user.phone} onChange={e => setUser({...user, phone: e.currentTarget.value})}/>
            </div>
            <div>
              <label className='font-bold text-sm text-gray-600'>Ваше имя</label>
              <Input  variant='flushed' placeholder='Введите имя' value={user.name} onChange={e => setUser({...user, name: e.currentTarget.value})}/>
            </div>
          </div>
          <Button color='white' rounded='2xl' backgroundColor='green' mt={10}>
            ПОДТВЕРДИТЬ ИНФОРМАЦИЮ
          </Button>
          <div className='mt-10 space-y-6'>
            {cart?.map(q => {
              return <CartElement 
                key={q.id} 
                q={q}
                removeItemFromCart={removeItemFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                cart={cart}
              />
            })}
          </div>
          <div className='mt-5'>
            <p>Прикрепить скриншот оплаты (фото)</p>
            <Input type='file' variant='unstyled' className='mt-2' onChange={(handleFile)}/>
            <img src={file ? URL.createObjectURL(file) : ''} alt="" className='mt-5' />
          </div>
          <p className='max-w-lg text-sm text-gray-500 mt-5'>
            Нажимая кнопку "Оформить заказ" вы соглашаетесь с условиями договора-оферты 
            и на сбор и обработку персональных данных
          </p>
          <Button color='white' backgroundColor='red' rounded='2xl' mt={5} mb={20} onClick={createBid}>
            ОФОРМИТЬ ЗАКАЗ
          </Button>
        </div>
      </div>
    </div>
  )
}