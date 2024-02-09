import React, { ReactNode } from 'react'
import ProductInCart from './ProductInCart'
import Button from '../button/Button';

type Props = {
    children: ReactNode;
}

const ShoppingCart = ({children} : Props) => {
  return (
    <div className='flex flex-col gap-8 px-2'>
        <div className=' w-full h-auto shadow-md rounded-md'>
        <div className='flex flex-col gap-y-4'>
        {children}
        </div>
    </div>
    <div className='flex flex-col gap-4 w-full h-auto px-2 py-4 border shadow-lg rounded-md'>
        <div className='flex gap-2'>
        <h1 className='text-2xl'>Total Price:</h1>
        <p className='text-2xl text-primary font-semibold'>117.000₺</p>
        </div>
        <Button addClass='text-white bg-primary'>Checkout</Button>
    </div>
    </div>
    
  )
}

export default ShoppingCart