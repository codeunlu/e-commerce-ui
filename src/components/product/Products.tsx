import React from 'react'
import Button from '../button/Button'
import { Product } from "@/utils/type";

type Props = {
};


const Products = ({ props}: Props) => {
  return (
    <div>
      <div className="flex gap-8 h-[600px] shadow-lg shadow-slate-500 py-10 px-4">
      <img src={""} alt="" className=" bg-gray-300 w-[500px] h-[500px]"/>
      <div className="flex flex-col py-6 justify-between gap-8 w-[600px]">
        <div className="flex flex-col gap-4">
        <h1 className="text-3xl">{"İphone 11"}</h1>
        <h1 className="text-2xl text-primary">{"10.000"}₺</h1>
        </div>
        <div className="flex flex-col gap-4">
        <Button addClass='text-white bg-secondary text-xl'>Add to Cart</Button>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quibusdam numquam cumque saepe facere dolorum laboriosam voluptatem vel repudiandae quidem, dolor nam consequatur explicabo quisquam enim, libero reprehenderit, corrupti et.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quibusdam numquam cumque saepe facere dolorum laboriosam voluptatem vel repudiandae quidem, dolor nam consequatur explicabo quisquam enim, libero reprehenderit, corrupti et.
        </p>
        </div>
        
      </div>
    </div>  
    </div>
  )
}

export default Products