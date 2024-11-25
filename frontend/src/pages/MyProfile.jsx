import React, { useState, useEffect, useRef, useContext } from "react";
import { FaStar, FaRegTrashAlt } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import { Spinner } from "./BookId";

const MyProfile = () => {
    const { user, setUser } = useContext(ShopContext);

    const [userReviews, setUserReviews] = useState([
        {
            _id: "1",
            bookTitle: "The Great Adventure",
            rating: 5,
            title: "Amazing Book!",
            comment: "This book was an incredible journey, full of action and suspense.",
            reviewerEmail: "johndoe@example.com",
        },
        {
            _id: "2",
            bookTitle: "The Mystery of the Lost City",
            rating: 4,
            title: "Great Read",
            comment: "I really enjoyed this book. It had a lot of twists and turns.",
            reviewerEmail: "johndoe@example.com",
        },
        {
            _id: "3",
            bookTitle: "Space Exploration 101",
            rating: 4,
            title: "Informative",
            comment: "This book provided a solid introduction to space exploration. Highly recommended.",
            reviewerEmail: "johndoe@example.com",
        },
        {
            _id: "4",
            bookTitle: "Cooking with Love",
            rating: 3,
            title: "Good recipes but too long",
            comment: "The recipes were good, but some of the instructions were a bit too long.",
            reviewerEmail: "johndoe@example.com",
        },
        {
            _id: "5",
            bookTitle: "The Art of Meditation",
            rating: 5,
            title: "Very Peaceful",
            comment: "A beautiful book that helped me find peace and calm in my everyday life.",
            reviewerEmail: "johndoe@example.com",
        },
    ]);

    const [loading, setLoading] = useState(true); // Initially set to true to simulate loading state
    const fileInputRef = useRef(null); // Ref for file input to trigger on click

    useEffect(() => {
        // Simulate a loading period for reviews (or user data fetching)
        setTimeout(() => setLoading(false), 1500); // Set loading to false after 1.5 seconds
    }, []);

    // Function to render the star rating
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar key={index} className={`w-4 ${index < rating ? "text-yellow-500" : "text-gray-400"}`} />
        ));
    };

    const handleDeleteReview = (reviewId) => {
        setUserReviews((prevReviews) => prevReviews.filter((review) => review._id !== reviewId));
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser((prevState) => ({
                    ...prevState,
                    profilePic: reader.result, // Set the profile picture to the selected image
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle file input trigger on clicking profile image
    const handleProfilePicClick = () => {
        fileInputRef.current.click();
    };




    return user ? (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-4 text-center">My Profile</h1>

            {/* User Info Section */}
            <div className="flex flex-col items-center mb-6">
                <div className="mb-4">
                    {/* Profile picture (clickable to trigger file input) */}
                    <label htmlFor="profilePic" className="cursor-pointer" onClick={handleProfilePicClick}>
                        {user.profilePic ? (
                            <img src={user.profilePic} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-4xl text-white font-semibold">
                                {user.name[0]}
                            </div>
                        )}
                    </label>

                    {/* Hidden file input */}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                        className="hidden" // Hide the input field
                    />
                </div>

                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>

            {/* Reviews Section */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">My Reviews</h2>
                {loading ? (
                    <Spinner /> // Assuming Spinner component to show during loading
                ) : userReviews.length > 0 ? (
                    <div className="space-y-4">
                        {userReviews.map((review) => (
                            <div key={review._id} className="border p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-medium">{review.bookTitle}</h3>
                                <div className="flex items-center mt-2">
                                    {renderStars(review.rating)} {/* Render the rating stars */}
                                </div>
                                <p><strong>Review Title:</strong> {review.title}</p>
                                <p><strong>Comment:</strong> {review.comment}</p>

                                {/* Delete Review Button (if the current user is the reviewer) */}
                                {user.email === review.reviewerEmail && (
                                    <button
                                        onClick={() => handleDeleteReview(review._id)}
                                        className="text-red-500 hover:text-red-700 mt-3 flex items-center"
                                    >
                                        <FaRegTrashAlt className="mr-2" />
                                        Delete Review
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>You haven't written any reviews yet. <a href="/books" className="text-blue-500">Start reviewing books now!</a></p>
                )}
            </div>
        </div>
    ) : (
        <Spinner /> // Show spinner while loading user data
    );
};

export default MyProfile;