import React from 'react'

type Props = {
    product:string,
    price:string
}

const ProductInCart = ({product, price}: Props) => {
  
  return (
    <div className='flex justify-between px-2'>
        <div className='flex flex-col'>
        <h1 className='text-xl'>{product}</h1>
        <p className='text-xl text-primary'>{price}</p>
        </div>
        
        <div className='flex items-center justify-center gap-1'>
        <button className='text-xl font-semibold bg-gray-200 w-10 h-10'>-</button>
        <p className='flex items-center justify-center text-lg w-10 h-10 bg-primary text-white font-medium'>3</p>
        <button className='text-xl font-semibold bg-gray-200 w-10 h-10'>+</button>
        </div>
    </div>
  )
}

export default ProductInCart