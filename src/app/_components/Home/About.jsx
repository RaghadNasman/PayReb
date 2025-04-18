
import { useTranslations } from 'next-intl';
import React from 'react'
import shadow from '@/assets/images/about-shadow.png'
import aboutImg from '@/assets/images/aboutImg.png'
import Image from 'next/image';

export default function About() {
    const t = useTranslations('HomePage.about');
    const cards = Object.values(t.raw('cards'));

    return <>
        <section id="about" className='relative overflow-hidden'>
            <Image src={shadow} alt=' ' width={600} height={600} className='absolute top-0 right-[-20%] left-auto rtl:left-[-20%] rtl:right-auto hidden md:block ' />
            <div className="container mx-auto about-shadow">
                <div className=" flex items-center justify-between gap-5  mb-5 flex-wrap md:flex-nowrap">
                    {/* start title */}
                    <div className="title animate__animated animate__fadeInUp">
                        <h4 className='font-bold text-2xl md:text-4xl'>{t('titleH4')}</h4>
                        <p className='text-lg md:text-xl'>{t('titleP')}</p>
                    </div>

                    <Image src={aboutImg} alt='Image' width={300} height={240} className='about-img object-cover block mx-auto animate__animated animate__fadeInUp' unoptimized />


                </div>
                {/* start map on cards */}
                <div className='cards'>
                    {cards.map((card, index) => (
                        <div key={index} className="p-6 rounded-xl bg-light-white bg-[#f8f8f8] mb-4 animate__animated animate__fadeInUp delay-[2s]">
                            <h5 className="text-2xl font-semibold mb-4 primary-text">{card.cardTitle}</h5>
                            <p className="font-normal medium-black-text text-base md:text-lg landing-[1.7]">{card.cardP}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    </>
}
