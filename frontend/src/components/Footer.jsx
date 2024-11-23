import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for client-side navigation
import logo from '../assets/favicon.png';
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#EBEEFF] px-10 pt-10 text-gray-700">

            {/* ---------------------- Footer Grid -------------------- */}
            <div className="grid sm:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr] xl:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 px-6 lg:px-20">
          
                {/* ------------ Logo and Description ----------------- */}
                <section>
                    <img src={logo} className="mb-5 w-12" alt="Books Review Logo" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Find and explore the best books from all your favorite writers.
                    </p>
                </section>
                
                {/* ----------- About Section ---------------- */}
                <section>
                    <p className="text-xl font-medium mb-5">ABOUT</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li><Link to="/awards" className="hover:text-gray-900">Awards</Link></li>
                        <li><Link to="/faqs" className="hover:text-gray-900">FAQs</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-gray-900">Terms of Services</Link></li>
                    </ul>
                </section>
                
                {/* ---------- Company Section ----------- */}
                <section>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li><Link to="/blog" className="hover:text-gray-900">Blog</Link></li>
                        <li><Link to="/community" className="hover:text-gray-900">Community</Link></li>
                        <li><Link to="/team" className="hover:text-gray-900">Our Team</Link></li>
                        <li><Link to="/help" className="hover:text-gray-900">Help Center</Link></li>
                    </ul>
                </section>
                
                {/* ------------ Contact Section ----------- */}
                <section>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1-212-456-7890</li>
                        <li><a href="mailto:contact@booksreview.com" className="hover:text-gray-900">contact@booksreview.com</a></li>
                    </ul>
                </section>
                
                {/* ---------- Social Section ----------- */}
                <section>
                    <p className="text-xl font-medium mb-5">SOCIAL</p>
                    <ul className="flex gap-4 text-gray-600">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600">
                                <CiFacebook size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
                                <IoLogoInstagram size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-500">
                                <FaXTwitter size={24} />
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            {/* ------------ Footer Bottom ---------- */}
            <div className="mt-10">
                <hr className="border-gray-300" />
                <p className="py-2 text-sm text-center">
                    &copy; {currentYear} booksreview.com - All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
