import React from 'react'
import features1 from '@/assets/images/features1.png'
import features2 from '@/assets/images/features2.png'
import features3 from '@/assets/images/features3.png'
import features4 from '@/assets/images/features4.png'
import features5 from '@/assets/images/features5.png'
import featuresIcon from '@/assets/images/featuresIcon.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Features() {
    const imgs = [features1, features2, features3, features4, features5];
    const t = useTranslations('HomePage.features');
    const cards = Object.values(t.raw('cards'));
    return <>
        <section id="features">
            <div className="container mx-auto">
                <div className="title animate__animated animate__fadeInUp">
                    <h4 className='font-bold text-2xl md:text-4xl flex items-center gap-4'>{t('titleH4')}
                        <Image src={featuresIcon} width={40} height={40} priority unoptimized alt='Our Features' />
                    </h4>
                    <p className='text-lg md:text-xl'>{t('titleP')}</p>
                </div>

                <div className="flex flex-wrap justify-center items-stretch">
                    {cards.map((card, index) => (
                        <div key={index} className=' w-1/2 md:w-1/3 p-2'>
                            <div className='bg-[#EDEDFF] p-4 rounded-xl text-center h-full'>
                                <div className="mb-3 mx-auto flex items-center justify-center bg-white w-[60px] h-[60px] rounded-[50%]">
                                    <Image src={imgs[index]} alt='' width={25} height={25} unoptimized priority />
                                </div>
                                <h5 className='soft-black-text text-lg font-semibold'>{card.title1}</h5>
                                <h5 className='soft-black-text text-lg font-semibold mb-3'>{card.title2}</h5>
                                <p className='soft-black-text mb-4 flex-grow'>{card.description}</p>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>

    </>
}
