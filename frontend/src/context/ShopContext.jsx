import { createContext, useEffect, useState } from "react";
// import { Books_assets } from "../assets/assests";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const [Books_assets, setBooks_assets] = useState([]);
  const [token, setToken] = useState('');
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [reviews, setReviews] = useState({});

  const addReview = (review) => {
    const { bookId } = review;
    setReviews((prev) => ({
      ...prev,
      [bookId]: [...(prev[bookId] || []), review],
    }));
  };

  const deleteReview = (bookId, reviewIndex) => {
    setReviews((prev) => {
      const updatedReviews = [...(prev[bookId] || [])];
      updatedReviews.splice(reviewIndex, 1); // Remove the review at the specified index
      return {
        ...prev,
        [bookId]: updatedReviews,
      };
    });
  };


  useEffect(() => {
  const getBooksData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/books')
      if (response.data.success) {
        setBooks_assets(response.data.books)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  getBooksData()
}, [navigate,backendUrl])



  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [token])


  const value = {
    Books_assets, currency, search,
    setSearch, showSearch, setShowSearch, navigate,
    reviews, addReview, deleteReview, backendUrl, token ,setToken
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;