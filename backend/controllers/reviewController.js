import reviewModel from "../models/reviewModel.js";


//  Add a new review
export const addReview = async (req, res) => {
  try {

    const {reviewer, bookId, title, comment, rating } = req.body;

    if (!reviewer || !bookId || !title || !comment || !rating) {
      console.error("Validation error: Missing fields");
      return res.json({ error: "All fields are required." });
    }

    const newReview = new reviewModel({
      bookId,
      reviewer,
      title,
      comment,
      rating,
      date: Date.now(),
    });

    
    await newReview.save();
  

    return res.json({
      message: "Review added successfully.",
      review: newReview,
    });
  } catch (error) {
    console.error("Error during addReview:", error.message || error);
    return res.json({ error: error.message || "Something went wrong." });
  }
};



//  Get reviews for a specific book
export const getReviewsByBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const reviews = await reviewModel.find({ bookId }).sort({ createdAt: -1 }); // Sorted by latest
    if (!reviews.length) {
      throw new Error("No reviews found for this book.");
    }

    res.json({ reviews });
  } catch (error) {
    res.json({ error: error.message || "Something went wrong." });
  }
};

// Delete a specific review
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the review to be deleted
    const review = await reviewModel.findById(id);
    if (!review) {
      throw new Error("Review not found.");
    }


    // Proceed to delete the review
    await reviewModel.findByIdAndDelete(id);

    return res.json({ success: true, message: "Review deleted successfully." });
  } catch (error) {
    console.error("Error deleting review:", error); // Log the error for debugging
    return res.status(400).json({ success: false, error: error.message || "Something went wrong." });
  }
};
