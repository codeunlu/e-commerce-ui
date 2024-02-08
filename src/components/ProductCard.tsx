import React from 'react';
import Button from './Button';

type ProductCardProps = {
    product: {
        createdAt: string;
        name: string;
        image: string;
        price: string;
        description: string;
        model: string;
        brand: string;
        id: string;

    };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border p-4 mb-4 rounded-md shadow-md">
            <img src={product.image} alt={product.name} className="mb-2 rounded-md w-64 h-40 object-cover"/>
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-primary mb-2">{product.price}$</p>
            <Button onClick >Add to cart</Button>
        </div>
    );
};

export default ProductCard;