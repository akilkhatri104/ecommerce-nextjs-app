export type Product = {
    id: number;
    name: string;
    price: number;
    primaryImage: string;
    images ?: ProductImage[]
    description: string;
}

export type ProductImage = {
    id: number
    url: string
    productId: number
} 

export const mockProducts: Product[] = [
    {
        id: 1,
        name: "iPhone 11",
        price: 699,
        primaryImage: 'https://dummyimage.com/600x400/000/fff&text=Product+1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        images: [
            {
                id: 1,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+1',
                productId: 1
            },
            {
                id: 2,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+2',
                productId: 1
            },
            {
                id: 3,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+3',
                productId: 1
            }
        ]
    },
    {
        id: 2,
        name: "iPhone 12",
        price: 799,
        primaryImage: 'https://dummyimage.com/600x400/000/fff&text=Product+2',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        images: [
            {
                id: 4,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+4',
                productId: 2
            },
            {
                id: 5,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+5',
                productId: 2
            }
        ]
    },
    {
        id: 3,
        name: "iPhone 13",
        price: 899,
        primaryImage: 'https://dummyimage.com/600x400/000/fff&text=Product+3',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        images: [
            {
                id: 6,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+6',
                productId: 3
            },
            {
                id: 7,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+7',
                productId: 3
            }
        ]
    },
    {
        id: 4,
        name: "iPhone 14",
        price: 999,
        primaryImage: 'https://dummyimage.com/600x400/000/fff&text=Product+4',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        images: [
            {
                id: 8,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+8',
                productId: 4
            },
            {
                id: 9,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+9',
                productId: 4
            }
        ]
    },
    {
        id: 5,
        name: "iPhone 15",
        price: 1099,
        primaryImage: 'https://dummyimage.com/600x400/000/fff&text=Product+5',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        images: [
            {
                id: 10,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+10',
                productId: 5
            },
            {
                id: 11,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+11',
                productId: 5
            }
        ]
    },
    {
        id: 6,
        name: "iPhone 15",
        price: 1099,
        primaryImage: 'https://dummyimage.com/600x400/000/fff&text=Product+5',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        images: [
            {
                id: 10,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+10',
                productId: 5
            },
            {
                id: 11,
                url: 'https://dummyimage.com/600x400/000/fff&text=Product+11',
                productId: 5
            }
        ]
    }
]