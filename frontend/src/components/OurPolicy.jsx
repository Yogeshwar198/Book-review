import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineLock } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const OurPolicy = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-16 px-4 text-gray-700">
            {/* ------------- Free Shipping ----------- */}
            <article className="flex flex-col items-center">
                <LiaShippingFastSolid 
                    className="w-16 h-16 text-blue-700 mb-4" 
                    aria-label="Free Shipping Icon" 
                />
                <p className="font-semibold text-base sm:text-lg">Free Shipping</p>
                <p className="text-gray-500 text-sm sm:text-base">On orders over $100</p>
            </article>

            {/* -------------- Secure Payment ----------- */}
            <article className="flex flex-col items-center">
                <MdOutlineLock
                    className="w-16 h-16 text-blue-700 mb-4" 
                    aria-label="Secure Payment Icon" 
                />
                <p className="font-semibold text-base sm:text-lg">Secure Payment</p>
                <p className="text-gray-500 text-sm sm:text-base">100% Secure Payment</p>
            </article>

            {/* ------------ 24/7 Support ------------ */}
            <article className="flex flex-col items-center">
                <RiCustomerService2Line 
                    className="w-16 h-16 text-blue-700 mb-4" 
                    aria-label="24/7 Support Icon" 
                />
                <p className="font-semibold text-base sm:text-lg">24/7 Support</p>
                <p className="text-gray-500 text-sm sm:text-base">Call us anytime</p>
            </article>
        </div>
    );
};

export default OurPolicy;
