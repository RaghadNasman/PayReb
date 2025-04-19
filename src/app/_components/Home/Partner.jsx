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

import partner1 from "@/assets/images/partner1.svg";
import partner2 from "@/assets/images/partner2.svg";
import partner3 from "@/assets/images/partner3.svg";
import partner4 from "@/assets/images/partner4.svg";
import partner5 from "@/assets/images/partner5.svg";
import partner6 from "@/assets/images/partner6.svg";



export default function Partner() {
    const imgs = [partner1, partner2, partner3, partner4, partner5, partner6, partner1, partner2]
    const t = useTranslations('HomePage.partner');
    return <>
        <section id="partner">
            <div className="container mx-auto">
                {/* start title */}
                <div className="title animate__animated animate__fadeInUp">
                    <h4 className='font-bold text-2xl md:text-4xl'>{t('titleH4')}</h4>
                    <p className='text-lg md:text-xl'>{t('titleP')}</p>
                </div>
                <div className="flex flex-row partner-btns gap-4">
                    <Link href={'#download'} className='btn w-[fit-content] text-[14px] md:text-lg flex items-center justify-center gap-2 black-btn cursor-pointer btn py-2 px-5 rounded-full'>
                        {t('btn1')}
                    </Link>
                    <Link href={'#download'} className='btn w-[fit-content] text-[14px] md:text-lg flex items-center justify-center gap-2 primary-btn cursor-pointer btn py-2 px-5 rounded-full'>
                        {t('btn2')}
                    </Link>
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
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="partnerSwiper mt-8 bg-[#F8F8F8] rounded-2xl"
                    >
                        {imgs.map((img, index) => (
                            <SwiperSlide key={index} className='flex justify-center'>
                                <Image src={img} alt='logo' width={150} height={150} unoptimized priority className='object-cover' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    </>
}
