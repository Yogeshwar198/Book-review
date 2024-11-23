import reviewModel from "../models/reviewModel.js";

//  Add a new review
export const addReview = async (req, res) => {
  try {
    const { bookId, title, comment, rating } = req.body;
    const reviewer = req.user?.name; // Assuming `req.user` contains the logged-in user's details

    if (!bookId || !title || !comment || !rating) {
      throw new Error("All fields are required.");
    }

    const newReview = new reviewModel({
      bookId,
      reviewer,
      title,
      comment,
      rating,
    });

    await newReview.save();
    res.json({ message: "Review added successfully.", review: newReview });
  } catch (error) {
    res.json({ error: error.message || "Something went wrong." });
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

    const review = await reviewModel.findById(id);
    if (!review) {
      throw new Error("Review not found.");
    }

    // Assuming req.user.name matches the `reviewer` field
    if (review.reviewer !== req.user?.name) {
      throw new Error("You can only delete your own reviews.");
    }

    await reviewModel.findByIdAndDelete(id);
    res.json({ message: "Review deleted successfully." });
  } catch (error) {
    res.json({ error: error.message || "Something went wrong." });
  }
};
