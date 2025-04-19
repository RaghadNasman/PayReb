import { useTranslations } from 'next-intl';
import React from 'react'
import ready1 from '@/assets/images/ready1.png'
import ready2 from '@/assets/images/ready2.png'
import ready3 from '@/assets/images/ready3.png'
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function Ready() {
    const imgs = [ready1, ready2, ready3];
    const t = useTranslations('HomePage.ready');
    const cards = Object.values(t.raw('cards'));
    return <>
        <section id="ready">
            <div className="container mx-auto">
                {/* start title */}
                <div className="title animate__animated animate__fadeInUp">
                    <h4 className='font-bold text-2xl md:text-4xl'>{t('titleH4')}</h4>
                    <p className='text-lg md:text-xl'>{t('titleP')}</p>
                </div>
                <p className="primary-text mb-5 animate__animated animate__fadeInUp">
                    {t('desc')}
                    <Link href={'/'} >{t('link')}</Link>
                </p>

                {/* start map on cards */}
                <div className='cards grid items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {cards.map((card, index) => (
                        <div key={index} className=" transition-all duration-300 hover:translate-y-[-3px] h-full">
                            <div className="p-6 h-full rounded-xl bg-light-white bg-[#f8f8f8] mb-4 animate__animated animate__fadeInUp delay-[2s] shadow-lg">
                                <div className="mb-3 flex items-center justify-center bg-white w-[70px] h-[70px] rounded-full">
                                    <Image src={imgs[index]} alt='' width={35} height={35} unoptimized priority />
                                </div>
                                <h5 className="text-xl md:text-2xl font-semibold mb-4 soft-black-text">{card.title}</h5>
                                <p className="font-normal dark-gray-text text-base md:text-lg landing-[1.7]">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
}
