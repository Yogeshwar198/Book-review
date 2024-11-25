import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {jwtDecode} from "jwt-decode"; // Import the jwt-decode library

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const [Books_assets, setBooks_assets] = useState([]);
  const [token, setToken] = useState("");
  const [reviews, setReviews] = useState({}); // { bookId: [reviews] }
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [user, setUser] = useState(null);

  // Fetch user based on token
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        // Decode the token and get the userId (assuming your token includes the userId)
        const decodedToken = jwtDecode(token); 
        const userId = decodedToken?.id;  

        if (userId) {
          const response = await axios.get(`${backendUrl}/api/user/${userId}`, {
            headers: { token },
          });

          if (response.data.success) {
            setUser(response.data.user); 
          } else {
            console.error("Failed to fetch user:", response.data.message);
          }
        } else {
          console.error("No user ID found in token");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [token, backendUrl]);

  // Fetch books data
  useEffect(() => {
    const getBooksData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/books`);
        if (response.data.success) {
          setBooks_assets(response.data.books);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        toast.error(error.message);
      }
    };

    getBooksData();
  }, [backendUrl]);

  // Fetch token from localStorage if not available in state
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && !token) {
      setToken(storedToken);
    }
  }, [token]); 

  // Add review to a book
  const addReview = async (review) => {
    try {
      const response = await axios.post(`${backendUrl}/api/review`, review, {
        headers: { token },
      });

      if (response.data.success) {
        const updatedReview = response.data.review;
        setReviews((prev) => ({
          ...prev,
          [updatedReview.bookId]: [
            ...(prev[updatedReview.bookId] || []),
            updatedReview,
          ],
        }));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message || "Failed to add review.");
      }
    } catch (error) {
      console.error("Error in addReview:", error);
      toast.error(error.response?.data?.error || error.message || "Unable to add review.");
    }
  };

  // Delete a review
  const deleteReview = async (reviewId, bookId) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/review/${reviewId}`, {
        headers: { token },
      });
  
      if (response.data.success) {
        // Update the local reviews state to reflect the deletion
        setReviews((prev) => ({
          ...prev,
          [bookId]: (prev[bookId] || []).filter(
            (review) => review._id !== reviewId
          ),
        }));
  
        toast.success("Review deleted successfully.");
      } else {
        toast.error(response.data.error || "Failed to delete review.");
      }
    } catch (error) {
      console.error("Error in deleteReview:", error);
      toast.error(error.response?.data?.error || "Unable to delete review.");
    }
  };
  
  

  // Fetch reviews for a specific book
  const fetchBookReviews = async (bookId) => {
    try {
      const response = await axios.get(`${backendUrl}/api/review/${bookId}`, {
        headers: { token },
      });

      if (response.data.reviews && Array.isArray(response.data.reviews)) {
        const reviewsData = response.data.reviews || [];  
        // console.log("Fetched reviews:", reviewsData); 
        setReviews((prev) => ({
          ...prev,
          [bookId]: reviewsData, 
        }));
      } else {
        // toast.error(response.data.message || "Failed to fetch reviews.");
      }
    } catch (error) {
      console.error("Error in fetchBookReviews:", error);
      toast.error(error.response?.data?.error || "Unable to fetch reviews.");
    }
  };
  


  const value = {
    Books_assets,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    navigate,
    reviews,
    addReview,
    deleteReview,
    backendUrl,
    token,
    setToken,
    user, 
    setUser,
    fetchBookReviews,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
