import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './../context/ShopContext';
import Title from './../components/Title';
import BookItem from './../components/BookItem';
import { FaAngleUp } from "react-icons/fa6";

const Books = () => {

  const { Books_assets, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterBooks, setFilterBooks] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relevent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }


  const applyFilter = () => {
    let BooksCopy = Books_assets.slice();

    if (showSearch && search) {
      BooksCopy = BooksCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      BooksCopy = BooksCopy.filter(item => category.includes(item.category));
    }

    setFilterBooks(BooksCopy);
  }

  const sortProduct = () => {
    let fpCopy = filterBooks.slice();

    switch (sortType) {
      case 'low-high': setFilterBooks(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low': setFilterBooks(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, [])

  useEffect(() => {
    applyFilter();
  }, [Books_assets, category, showSearch, search])

  useEffect(() => {
    sortProduct();
  }, [filterBooks, sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 py-20'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <FaAngleUp className={`h-3 sm:hidden ${showFilter ? 'rotate-180' : ''}`} />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'Fiction'} onChange={toggleCategory} />Fiction
            </p>
            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'Non-Fiction'} onChange={toggleCategory} />Non-Fiction
            </p>
            <p className='flex gap-2 '>
              <input className='w-3 ' type="checkbox" value={'Art & Design'} onChange={toggleCategory} />Art & Design
            </p>
          </div>
        </div>
       
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'BOOKS'} />
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterBooks.map((item, index) => (
              <BookItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Books