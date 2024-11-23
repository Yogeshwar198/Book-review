import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the book being reviewed
      required: true,
      ref: "book", 
    },
    reviewer: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5, // Rating scale between 1 and 5
    },
    date: {
        type: Number,
        required: true
    },
  },
  {
    timestamps: true, 
  }
);

const reviewModel = mongoose.model.review || mongoose.model("review", reviewSchema);

export default reviewModel;
