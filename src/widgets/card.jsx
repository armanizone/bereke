import { storage } from 'firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import React from 'react'
import { CiShoppingBasket } from 'react-icons/ci'

export const Card = ({value}) => {

  const addItemToLocalStorage = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = storedCart.findIndex((cartItem) => cartItem.id === value.id);
  
    if (existingItemIndex !== -1) {
      // If item exists in cart, update its quantity
      const updatedCart = [...storedCart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // Otherwise, add the item to cart
      localStorage.setItem('cart', JSON.stringify([...storedCart, {...value, quantity: 1}]));
    }
  };

  const [image, setImage] = React.useState(null)

  async function getImage () {
    getDownloadURL(ref(storage, value.imageUrl))
    .then(url => {
      setImage(url)
    })
  }

  React.useEffect(() => {
    getImage()
  }, [])

  return (
    <div className='max-w-64 space-y-4 mx-auto'>
      <img src={image} alt="" className='w-full max-h-[170px] object-contain' />
      <p className='text-xl font-bold text-center'>{value.title}</p>
      <p className='text-xl font-bold text-center'>{value.price} ₸</p>
      <button className='flex space-x-3 p-2 bg-pink-200 mx-auto' onClick={addItemToLocalStorage}>
        <span className='font-semibold'>Добавить в корзину</span>
        <CiShoppingBasket size={25}/>
      </button>
    </div>
  )
}