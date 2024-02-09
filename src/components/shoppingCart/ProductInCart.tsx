import React from 'react'

type Props = {
    product:string,
    price:string
}

const ProductInCart = ({product, price}: Props) => {
  return (
    <div className='flex justify-between px-2'>
        <div className='flex flex-col'>
        <h1 className='text-lg'>{product}</h1>
        <p className='text-lg text-primary'>{price}</p>
        </div>
        
        <div className='flex items-center justify-center gap-1'>
        <button className='text-lg bg-gray-200 w-8 h-8'>-</button>
        <p className='flex items-center justify-center text-lg w-8 h-8 bg-primary text-white font-medium'>3</p>
        <button className='text-lg bg-gray-200 w-8 h-8'>+</button>
        </div>
    </div>
  )
}

export default ProductInCart