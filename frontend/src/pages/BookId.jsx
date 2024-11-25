import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

export const Spinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);


const BookId = () => {
  const { bookId } = useParams();
  const { Books_assets, currency, navigate, reviews, deleteReview, fetchBookReviews,user } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  const [activeSection, setActiveSection] = useState('description'); // Default active section is 'description'
  const bookReviews = reviews[bookId] || [];

  // Toggle function for sections
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Fetch product data based on the bookId
  const fetchProductData = () => {
    const book = Books_assets.find(item => item._id === bookId);
    if (book) {
      setProductData(book);
      setImage(book.image[0]);
    }
  };


  useEffect(() => {
    fetchProductData();
    fetchBookReviews(bookId);
  }, [Books_assets, bookId]);


  const handleDeleteReview = async (reviewId) => {
    await deleteReview(reviewId, bookId);
    await fetchBookReviews(bookId);
  };
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data Section */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt={`Book preview ${index + 1}`}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="Selected book preview" />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <p className='text-gray-600 mt-2'>by <span className='font-semibold'>{productData.author}</span></p>
          <div className='flex items-center gap-1 mt-2'>
            <FaStar className="w-3.5 text-yellow-500" />
            <FaStar className="w-3.5 text-yellow-500" />
            <FaStar className="w-3.5 text-yellow-500" />
            <FaStar className="w-3.5 text-yellow-500" />
            <CiStar className="w-3.5 text-gray-400" />
            <p className='pl-2'>({bookReviews.length})</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='mt-5'>
            <p><strong>Category:</strong> {productData.category}</p>
            <p><strong>Sub-Category:</strong> {productData.subCategory}</p>
            <div className="mt-5">

              <div className="border rounded-lg py-2 text-center bg-gray-100 w-full sm:w-[50%] md:w-[30%]">
                <p>{productData.language}</p>
              </div>
            </div>

          </div>
          <button onClick={() => navigate(`/review/${bookId}`)} className='bg-black text-white px-8 py-3 text-sm mt-8 active:bg-gray-700'>ADD REVIEW</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% authentic, publisher-approved editions.</p>
            <p>Available in multiple formats: Hardcover, Paperback, and eBook.</p>
            <p>Eco-friendly printing with sustainably sourced paper.</p>
            <p>Gift wrapping available upon request.</p>
            <p>Free shipping on orders above $100.</p>
          </div>

        </div>
      </div>

      {/* Description & Reviews Section */}
      <div className='mt-20'>
        {/* Section Tabs */}
        <div className='flex'>
          <p
            onClick={() => handleSectionClick('description')}
            className={`px-5 py-3 text-sm cursor-pointer ${activeSection === 'description' ? 'border-b-2 font-semibold' : 'border'}`}
          >
            Description
          </p>
          <p
            onClick={() => handleSectionClick('reviews')}
            className={`px-5 py-3 text-sm cursor-pointer ${activeSection === 'reviews' ? 'border-b-2 font-semibold' : 'border'}`}
          >
            Reviews ({bookReviews.length})
          </p>
        </div>

        {/* Section Content */}
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          {activeSection === 'description' && (
            <>
              <p>{productData.description}</p>
              <p>
                This book is perfect for readers looking to explore themes related to <strong>{productData.category}</strong>, with an emphasis on <strong>{productData.subCategory.toLowerCase()}</strong>. Whether you are an avid reader of {productData.language} literature or new to the genre, this book offers an engaging narrative enriched with thought-provoking ideas. Its captivating storyline, combined with the unique writing style of <strong>{productData.author}</strong>, creates a compelling experience for both casual readers and literary enthusiasts. Dive into this book to uncover its profound exploration of timeless themes, vivid character development, and a setting that brings the story to life. A must-have addition to your collection, it appeals to those who appreciate a blend of creativity, depth, and cultural insight.
              </p>
            </>
          )}

          {activeSection === 'reviews' && (
            <>
              {/* Display Reviews Here */}
              <div className="text-gray-500">
                {bookReviews.length > 0 ? (
                 
                  bookReviews.map((review, index) => 
                    (
                    <div key={index} className='border-b py-3'>

                      <div className="flex justify-between items-center">
                        <h3 className='font-medium'>{review.reviewer}</h3>
                        {/* Delete button */}
                        {user && review.reviewerEmail === user.email && (
                          <FaRegTrashAlt
                            onClick={() => handleDeleteReview(review._id)}
                            className="text-red-500 cursor-pointer"
                          />
                        )}
                      </div>

                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < review.rating ? "w-3.5 text-yellow-500" : "w-3.5 text-gray-400"}
                          />
                        ))}
                      </div>
                      <p className='font-medium'>{review.title}</p>
                      <p>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet. Be the first to review!</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default BookId;
