'use client'
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import customer1 from "@/assets/images/customer1.png";
import customer2 from "@/assets/images/customer2.png";
import customer3 from "@/assets/images/customer3.png";



export default function Customers() {
    const imgs = [customer1, customer2, customer3, customer1]
    const t = useTranslations('HomePage.customers');
    const cards = Object.values(t.raw('cards'));
    return <>
        <section id="partner">
            <div className="container mx-auto">
                {/* start title */}
                <div className="title animate__animated animate__fadeInUp">
                    <h4 className='font-bold text-2xl md:text-4xl'>{t('titleH4')}</h4>
                    <p className='text-lg md:text-xl'>{t('titleP')}</p>
                </div>
                
                {/* start logos swiper */}
                <div className="flex justify-center items-stretch">
                    <Swiper
                   
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="customerSwiper"
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index} className='flex justify-center'>
                                <div className='w-[90%] sm:w-[95%] bg-[#F8F8F8] mx-auto p-4 rounded-xl h-full transition-all duration-300  hover:shadow'>
                                    <div className="mb-3 flex items-center gap-2">
                                        <Image src={imgs[index]} alt='' width={70} height={70} unoptimized priority />
                                        <div>
                                            <h5 className='soft-black-text text-lg font-semibold'>{card.name}</h5>
                                            <h5 className='soft-black-text text-lg font-semibold flex gap-2 items-center mb-3'><i className="fa-solid fa-star text-yellow-400"></i>{card.rate}</h5>
                                        </div>
                                    </div>
                                    <p className='soft-black-text font-normal mb-4 flex-grow'>{card.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    </>
}
