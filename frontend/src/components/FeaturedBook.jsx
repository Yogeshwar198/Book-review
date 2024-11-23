import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import BookItem from './BookItem';


const FeaturedBook = () => {

    const { Books_assets } = useContext(ShopContext);
    const [latestBooks, setLatestBooks] = useState([]);

    useEffect(() => {
        setLatestBooks(Books_assets.slice(0, 10));
    }, [Books_assets]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'FEATURED'} text2={'BOOKS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Whether you're in search of inspiration, adventure, or knowledge, our featured books offer something for every kind of reader.
                </p>
            </div>
            {/* Rendring Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestBooks.map((item, index) => (
                        <BookItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedBook