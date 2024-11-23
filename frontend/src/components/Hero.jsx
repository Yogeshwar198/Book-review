import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import Coverflow effect styles
import homeBook1 from '../assets/home-book-1.png';
import homeBook2 from '../assets/home-book-2.png';
import homeBook3 from '../assets/home-book-3.png';
import homeBook4 from '../assets/home-book-4.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    // Ref to access Swiper instance
    const swiperRef = useRef(null);

    return (
        <div className="flex flex-col sm:flex-row py-10">
            {/* ------------------ Hero Left Side ----------------- */}
            <div className="w-full sm:w-1/2 flex items-center justify-center xl:pr-24 py-10 sm:py-0">
                <div className="text-[#414141]">
                    <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Browse & Select Books</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-medium text-sm md:text-base">
                            Find the best book from your favorite writers, explore hundreds of books with all possible categories, take advantage of the 50% discount and much more.
                        </p>
                    </div>
                    <Link to='/books' className="flex items-center gap-2 mt-4">
                        <button className="bg-[#414141] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition hover:scale-[0.9] shadow-md shadow-gray-500">
                            Explore Now
                        </button>
                    </Link>
                </div>
            </div>

            {/* ------------ Hero Right Side with Slider -------------- */}
            <div className="w-full sm:w-1/2 flex items-center justify-center overflow-visible">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance to ref
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    className="w-full"
                >
                    <SwiperSlide onClick={() => swiperRef.current?.slideToLoop(0)}>
                        <img
                            src={homeBook1}
                            alt="Book 1"
                            className="slide-image h-[300px] md:h-[400px] object-contain transition-transform"
                        />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => swiperRef.current?.slideToLoop(1)}>
                        <img
                            src={homeBook2}
                            alt="Book 2"
                            className="slide-image h-[300px] md:h-[400px] object-contain transition-transform"
                        />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => swiperRef.current?.slideToLoop(2)}>
                        <img
                            src={homeBook3}
                            alt="Book 3"
                            className="slide-image h-[300px] md:h-[400px] object-contain transition-transform"
                        />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => swiperRef.current?.slideToLoop(3)}>
                        <img
                            src={homeBook4}
                            alt="Book 4"
                            className="slide-image h-[300px] md:h-[400px] object-contain transition-transform"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;
