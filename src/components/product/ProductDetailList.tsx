import { Product } from '@/utils/type';
import React from 'react'
import Products from './Products';

type Props = {
    products: Product[];
  };

const ProductDetailList = ({products}: Props) => {
    
  return (
    <div className='flex flex-col'>
        {products &&
          products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
    </div>
  )
}

export default ProductDetailList