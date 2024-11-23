import { v2 as cloudinary } from "cloudinary";
import bookModel from "../models/bookModel.js";

// Function to add a book
const addBook = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, author, language } = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                return result.secure_url;
            })
        );

        const bookData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            author,
            language,
            image: imagesUrl,
            date: Date.now(),
        };

        const book = new bookModel(bookData);
        await book.save();

        res.json({ success: true, message: "Book Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Function to list all books
const listBooks = async (req, res) => {
    try {
        const books = await bookModel.find({});
        res.json({ success: true, books });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Function to remove a book
const removeBook = async (req, res) => {
    try {
        const { id } = req.body;
        await bookModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Book Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};



// Function to get a single book by ID
const singleBook = async (req, res) => {
    try {
        const { id } = req.params; 
        const book = await bookModel.findById(id);
        if (!book) {
            return res.json({
                success: false,
                message: "Book not found", 
            });
        }
        res.json({
            success: true,
            message: "Book retrieved successfully", 
            book, 
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "An error occurred while retrieving the book", 
            error: error.message, 
        });
    }
};


export { addBook, listBooks, removeBook, singleBook };
