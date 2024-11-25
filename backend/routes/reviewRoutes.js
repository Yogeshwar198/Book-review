import express from "express";
import { addReview, getReviewsByBook, deleteReview } from "../controllers/reviewController.js";
import auth from '../middleware/auth.js'

const router = express.Router();

// Add a review (Protected)
router.post("/", auth, addReview);
// Get all reviews for a book
router.get("/:bookId", getReviewsByBook);
// Delete a review (Protected)
router.delete("/:id", auth, deleteReview);

export default router;
