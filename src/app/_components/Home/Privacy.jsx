import { useTranslations } from 'next-intl';
import React from 'react'
import privacyIcon from '@/assets/images/privacyIcon.png'
import privacy1 from '@/assets/images/privacy1.png'
import privacy2 from '@/assets/images/privacy2.png'
import privacy3 from '@/assets/images/privacy3.png'
import privacy4 from '@/assets/images/privacy4.png'
import Image from 'next/image';

export default function Privacy() {
    const imgs = [privacy1, privacy2, privacy3, privacy4];
    const t = useTranslations('HomePage.privacy');
    const cards = Object.values(t.raw('cards'));
    return <>
        <section id="privacy" className='bg-[#EDEDFF]'>
            <div className="container mx-auto">
                {/* start title */}
                <div className="title animate__animated animate__fadeInUp">
                    <h4 className='font-bold text-2xl md:text-4xl flex items-center gap-4'>{t('titleH4')}
                        <Image src={privacyIcon} width={40} height={40} priority unoptimized alt='Our Features' />
                    </h4>
                    <p className='text-lg md:text-xl'>{t('titleP')}
                        <span className='font-bold block'>{t('titleSpan')}</span>
                    </p>
                </div>
                {/* start map on cards */}
                {/* start map on cards */}
                <div className='cards grid items-stretch grid-cols-2 lg:grid-cols-4'>
                    {cards.map((card, index) => (
                        <div key={index} className="rounded-2xl transition-all duration-300 hover:translate-y-[-3px] hover:shadow-md h-full">
                            <div className="p-6 h-full  mb-4 animate__animated animate__fadeInUp delay-[2s]">
                                <div className="mb-3 flex items-center justify-center bg-white w-[90px] h-[90px] rounded-xl">
                                    <Image src={imgs[index]} alt='' width={35} height={35} unoptimized priority />
                                </div>
                                <h5 className="text-lg md:text-lg font-semibold mb-4 soft-black-text">{card.text}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
}
