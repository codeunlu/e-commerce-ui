import React, { useState } from 'react'
import Button from '../button/Button'
import { Product } from "@/utils/type";

type Props = {
  product: Product;
};


const Products = ({product}: Props) => {

  const [showReadMore, setShowReadMore] = useState(false);

  const toggleReadMore = () => {
    setShowReadMore(!showReadMore);
  };

  const isTruncated = product.description.length > 100;
  return (
    <div>
      <div className="flex gap-8 h-[600px] shadow-lg shadow-slate-500 py-10 px-4">
      <img src={product.image} alt="" className=" bg-gray-300 w-[500px] h-[500px]"/>
      <div className="flex flex-col py-6 justify-between gap-8 w-[600px]">
        <div className="flex flex-col gap-4">
        <h1 className="text-3xl">{product.name}</h1>
        <h1 className="text-2xl text-primary">{product.price}$</h1>
        </div>
        <div className="flex flex-col gap-4">
        <Button addClass='text-white bg-secondary text-xl'>Add to Cart</Button>
        <p className={`text-xl ${showReadMore ? 'overflow-auto max-h-[300px]' : 'overflow-hidden max-h-[200px]'} transition-height duration-500 ease-in-out`}>
              {product.description}
            </p>
            {isTruncated && (
              <button
                onClick={toggleReadMore}
                className="text-primary font-bold cursor-pointer"
              >
                {showReadMore ? 'Read Less' : 'Read More'}
              </button>
            )}
        </div>
        
      </div>
    </div>  
    </div>
  )
}

export default Products