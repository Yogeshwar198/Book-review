import express from "express";
import { addBook, listBooks, removeBook, singleBook } from "../controllers/bookController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const bookRouter = express.Router();

// Add a new book
bookRouter.post("/", adminAuth, upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
]), addBook);

// List all books
bookRouter.get("/", listBooks);

// Get details of a single book by ID
bookRouter.get("/:id", singleBook);

// Remove a book by ID
bookRouter.delete("/remove", adminAuth, removeBook);

export default bookRouter;
