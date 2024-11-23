import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import Contact from './pages/Contact'
import NewsLetterBox from './components/NewsLetterBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTopButton from './components/ScrollToTopButton'
import SearchBar from './components/SearchBar'
import BookId from './pages/BookId'
import Review from './pages/Review'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  
  return (
    <div className='bg-[#EBEEFF]'>
       <ToastContainer />
      <Navbar />
      <SearchBar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/book/:bookId' element={<BookId />} />
          <Route path='/review/:bookId' element={<Review />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

      {!isLoginPage && <NewsLetterBox />}
      {!isLoginPage && <Footer />}
      {/* Add the ScrollToTopButton */}
      <ScrollToTopButton />
    </div>
  )
}

export default App