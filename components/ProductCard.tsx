import { Product } from '@/lib/mockData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    product: Product
}

const ProductCard = ({ product }: Props) => {
    return (
        <div className='flex md:flex-col ' title={product.name}>
            <Link href={`/products/${product.id}`}>
                <Image
                src={product.primaryImage}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-auto object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2 truncate">{product.name}</h2>
            <p className="text-secondary-700 mt-1">${product.price.toFixed(2)}</p>
            </Link>
        </div>
    )
}

export default ProductCard