import { useTranslations } from 'next-intl';
import React from 'react'
import winIcon from '@/assets/images/winIcon.png'
import winImg from '@/assets/images/winImg.png'
import winImg1 from '@/assets/images/winImg.svg'
import winBg from '@/assets/images/winBg.png'
import winBg1 from '@/assets/images/winBg.svg'
import winSec from '@/assets/images/win.png'
import responsiveWin from '@/assets/images/responsiveWin.png'
import responsiveWin1 from '@/assets/images/responsiveWin.svg'
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function Win() {
    const t = useTranslations('HomePage.win');
    return <>
        <section id='win' className='relative sm:h-[32.5625rem] overflow-hidden flex items-center pb-0'>
            <Image src={winBg1} alt=' ' width={220} height={444} className='w-[180px] h-[404px] sm:w-[220px] sm:h-[444px] absolute object-contain top-[3rem] sm:top-[3.5rem] right-0 left-auto rtl:left-0 rtl:right-auto hidden sm:block ' />
            <div className="container mx-auto h-full flex items-center">
                <div className="flex  items-center flex-col sm:flex-row pt-2">
                    {/* start title */}
                    <div className="flex items-center justify-centerus sm:w-7/12 lg:w-2/3">
                        <div className="w-full  title mb-0 animate__animated animate__fadeInUp">
                            <h4 className='font-bold text-2xl md:text-3xl lg:text-4xl flex items-center gap-4'>{t('titleH4')}
                                <Image src={winIcon} width={40} height={40} priority unoptimized alt='Our Features' />
                            </h4>
                            <p className='text-lg lg:text-xl mb-4'>{t('titleP')}
                                <span className='font-bold block'>{t('titleSpan')}</span>
                            </p>
                            
                            <Link href={'#download'} className='btn w-[fit-content] flex items-center justify-center gap-2 primary-btn cursor-pointer text-lg btn py-2 px-5 rounded-full'>
                                {t('btn')}
                            </Link>
                        </div>
                    </div>
                    
                    
                    <Image src={winImg} alt='Image' width={539} height={512} className='self-center mt-2 sm:w-5/12 lg:w-1/3 win-img object-cover mx-auto animate__animated animate__fadeInUp hidden sm:block' unoptimized  priority  />
                    <Image src={responsiveWin1} alt='Image' width={315} height={344} className='self-center  win-img object-cover animate__animated animate__fadeInUp block mx-auto sm:hidden' unoptimized  priority />

                </div>
            </div>
        </section>

      

    </>
}
