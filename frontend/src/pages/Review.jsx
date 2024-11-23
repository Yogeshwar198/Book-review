import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import hooks
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const { bookId } = useParams(); // Retrieve bookId from the route
  const navigate = useNavigate(); // Hook to navigate programmatically
  const { addReview } = useContext(ShopContext); // Access context to add reviews
  const [newReview, setNewReview] = useState({
    reviewer: "",
    title: "",
    comment: "",
    rating: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.reviewer && newReview.title && newReview.comment && newReview.rating) {
      addReview({ ...newReview, bookId }); // Add review with the current bookId
      setNewReview({ reviewer: "", title: "", comment: "", rating: 0 });
      navigate(`/book/${bookId}`); // Navigate back to the book details page
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#EBEEFF] p-10 my-20 rounded-lg w-full max-w-lg mx-auto"
    >
      <h2 className="text-2xl prata-regular font-semibold mb-4 text-center">Add Review</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.reviewer}
          onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Review Title"
          value={newReview.title}
          onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Your Review"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          className="w-full border-2  p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      {/* Star Rating Selector */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((value) => (
          <FaStar
            key={value}
            className={`text-2xl cursor-pointer ${
              value <= newReview.rating ? "text-yellow-500" : "text-[#fff]"
            }`}
            onClick={() => setNewReview({ ...newReview, rating: value })}
          />
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded-lg shadow-md shadow-gray-500 focus:bg-gray-800 transition-colors duration-200"
      >
        Submit Review
      </button>
    </form>
  );
};

export default Review;
