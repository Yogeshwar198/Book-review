### Book Review Platform

This repository contains a Book Review Platform where users can browse books, read and write reviews, and rate books. The application is developed using a React.js frontend and a Node.js backend with MongoDB for data persistence.

---

## Features
## Frontend
- **Responsive UI** with the following components:
- **Home Page:** Displays featured books.
- **Book Listing Page:** Allows users to search and filter books.
- **Individual Book Page:** Shows book details and reviews.
- **User Profile Page:** Displays user details and their reviews.
- **Review Submission Form:** Enables users to add reviews for books.
- **State Management:** Implemented using React Context.
- **Routing:** Handled using React Router.
- **Error Handling:** User-friendly error messages and loading indicators.
- **Integration:** Seamlessly connects to the backend API.

## Tech Stack
## Frontend
1. **React:** Core library for building the user interface.
2. **React Router:** For navigation and routing.
3. **TailwindCSS:** For styling the application.
4. **Axios:** For API requests.
5. **React Toastify:** For notifications and alerts.

## Installation and Setup

**Prerequisites**

- Node.js and npm installed.
- A modern web browser (e.g., Chrome, Firefox).

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
```bash
cd <filename>
```

3. **Install the dependencies:**
```bash
npm install
```
4. **Run the application:**
```bash
npm start
```
5. **Open your browser and visit:**
```bash
http://localhost:3000
```

## Backend

- **RESTful API:**
- **Book:**
- **GET /books:** Fetch all books with pagination.
- **GET /books/:id:** Fetch details of a specific book.
- **POST /books:** Add a new book (Admin only).

- **Reviews:**
- **GET /reviews:** Fetch reviews for a specific book.
- **POST /reviews:** Submit a new review.
  
- **Users:**
- **GET /users/:id:** Fetch user profile details.
- **PUT /users/:id:** Update user profile.

- **Validation:** Ensures valid data with libraries like validator.
- **Error Handling:** Handles server-side errors and provides meaningful responses.


## Tech Stack
## Backend
- **Node.js:** JavaScript runtime environment.
- **Express.js:** Framework for building RESTful APIs.
- **MongoDB:** Database for persistent storage.
- **Libraries:**
- **bcrypt:** For hashing passwords.
- **cloudinary:** For handling image uploads.
- **jsonwebtoken:** For user authentication.
- **multer:** For file uploads.
- **dotenv:** For environment variable management.
- **validator:** For validating user input.
- **cors:** To enable cross-origin requests.

  1. **Navigate to the project directory:**
```bash
cd <filename>
```

2. **Install the dependencies:**
```bash
npm install
```
3. **Set up your environment variables in a .env file:**
 ```bash
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_URL=<your_cloudinary_url>
CLOUDANERY_API_KEY=<your_cloudinar_key>
CLOUDANERY_NAME =:<your_cloudinar_name>
   ```
5. **Run the application:**
```bash
npm run server
```
5. **Open your browser and visit:**
```bash
http://localhost:4000
```
## Admin Frontend

- **Responsive Admin Dashboard:**
- Add a new book (**Admin only**).
- Remove a book from the platform (**Admin only**).

 ## Tech Stack
- **React.js:** Core framework for building the admin interface.
- **React Router:** For navigating between pages.
- **React Toastify:** For showing notifications.
- **Axios:** To handle API requests.
- **TailwindCSS:** For responsive and modern UI styling.

 ## Installation and Setup
 
  1. **Navigate to the project directory:**
```bash
cd <filename>
```

2. **Install the dependencies:**
```bash
npm install
```
3. **Run the application:**
```bash
npm start
```
4. **Open your browser and visit:**
```bash
http://localhost:3000
```
  
## Contact
Yogeshwar Singh - yogeshwaredu198@gmail.com
