'use client'
import React, { useRef, useState } from 'react';
import features1 from '@/assets/images/features1.png'
import features2 from '@/assets/images/features2.png'
import features3 from '@/assets/images/features3.png'
import features4 from '@/assets/images/features4.png'
import features5 from '@/assets/images/features5.png'
import featuresIcon from '@/assets/images/featuresIcon.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Features() {
    const imgs = [features1, features2, features3, features4, features5];
    const t = useTranslations('HomePage.features');
    const cards = Object.values(t.raw('cards'));
    return <>
        <section id="features">
            <div className="container mx-auto">
                {/* start title */}

                <div className="title ">
                    <h4 className='font-bold text-2xl md:text-4xl flex items-center gap-4'>{t('titleH4')}
                        <Image src={featuresIcon} width={40} height={40} priority unoptimized alt='Our Features' />
                    </h4>
                    <p className='text-lg md:text-xl'>{t('titleP')}</p>
                </div>

                {/* start map on cards => swiper */}

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
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="featureSwiper mt-8"
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index} className='flex justify-center'>
                                <div className='w-[90%] sm:w-[95%] bg-[#EDEDFF] mx-auto p-4 rounded-xl text-center h-full transition-all duration-300  hover:shadow'>
                                    <div className="mb-3 mx-auto flex items-center justify-center bg-white w-[70px] h-[70px] rounded-full">
                                        <Image src={imgs[index]} alt='' width={35} height={35} unoptimized priority />
                                    </div>
                                    <h5 className='soft-black-text text-lg font-semibold'>{card.title1}</h5>
                                    <h5 className='soft-black-text text-lg font-semibold mb-3'>{card.title2}</h5>
                                    <p className='soft-black-text mb-4 flex-grow'>{card.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

       
            </div>
        </section>

    </>
}








