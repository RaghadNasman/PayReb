import React from 'react'
import Navbar from '../navbar/Navbar'
// import headerImg from '@/assets/images/iPhone 13 Pro.png'
// import headImg from '@/assets/images/iPhone 13 Pro.svg'
import head from '@/assets/images/iPhone.png'
import headerIcon from '@/assets/images/headerIcon.png'
import animate1 from '@/assets/images/animate1.png'
import animate2 from '@/assets/images/animate2.png'
import animate3 from '@/assets/images/animate3.png'
import animate4 from '@/assets/images/animate4.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Header() {
    const t = useTranslations('HomePage.header');

    return <>
        <header className='h-auto md:min-h-[100vh] pt-[12vh] '>
           
            <div className="flex justify-center items-center min-h-[50vh] md:h-[88vh] ">
                <div className="container mx-auto flex items-center justify-between px-3 md:px-0">
                    <div className='relative '>
                        <Image className='absolute orbit-animate delay-0 top-[-100px] right-0 hidden md:block' src={animate1} alt=' ' />
                        <Image className='absolute orbit-animate delay-[1s] top-[-100px] left-0 hidden md:block' src={animate2} alt=' ' />
                        <Image className='absolute orbit-animate delay-[1.5s] bottom-[-100px] right-0 hidden md:block' src={animate3} alt=' ' />
                        <Image className='absolute orbit-animate delay-[2s] bottom-[-100px] left-0 hidden md:block' src={animate4} alt=' ' />
                        <div className="white-text text-center md:text-start text-2xl lg:text-4xl font-bold mb-5  animate__animated animate__fadeIn">
                            {t('mainText1')}
                            <span className='light-primary-color'>{t('mainText2')}</span>
                            {t('mainText3')}
                        </div>
                        <p className='mb-5 text-center md:text-start white-text w-full lg:w-[70%] text-lg lg:text-xl leading-[1.7]  animate__animated animate__fadeIn'>
                            {t('secondText')}
                        </p>
                        {/* responsive moc up */}
                        <div className="relative my-4">
                            <Image className='absolute orbit-animate delay-0 top-[0px] right-0 w-[50px] block md:hidden' src={animate1} alt=' ' />
                            <Image className='absolute orbit-animate delay-[1s] top-[0px] left-0  w-[50px] block md:hidden' src={animate2} alt=' ' />
                            <Image className='absolute orbit-animate delay-[1.5s] bottom-[0px] right-0 w-[50px] block md:hidden' src={animate3} alt=' ' />
                            <Image className='absolute orbit-animate delay-[2s] bottom-[0px] left-0  w-[50px] block md:hidden' src={animate4} alt=' ' />
                            <div className='header-img animate__animated animate__fadeIn text-center block md:hidden '>
                                {/* <Image src={headerImg} alt={'Payreb App'} quality={100} priority className='w-[50%] mx-auto object-cover  ltr:rotate-[32deg]' /> */}
                                <Image
                                    src={head}
                                    alt="Payreb App"
                                    width={400}
                                    height={800}
                                    quality={100}
                                    priority
                                    className="object-cover block mx-auto ltr:rotate-[32deg]"
                                />
                            </div>
                        </div>
                        {/* responsive moc up */}

                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate__animated animate__fadeIn pb-8 md:pb-0">
                            <Link href={'#download'} className='btn  flex items-center justify-center gap-2 black-btn cursor-pointer text-[15px] btn py-2 px-5 rounded-full'>
                                {t('firstBtn')}
                                <Image src={headerIcon} alt='' width={31} />
                            </Link>
                            <Link href={'#download'} className='btn justify-center light-primary-btn flex items-center gap-2  cursor-pointer text-[15px] btn py-2 px-5 rounded-full'>
                                <i className="fa-solid fa-circle-play text-2xl"></i>
                                {t('secondBtn')}
                            </Link>
                        </div>
                    </div>
                    <div className='header-img animate__animated animate__fadeIn hidden md:block'>
                        {/* <Image src={head} alt={'Payreb App'} width={500} quality={100} priority className=' object-cover  ltr:rotate-[32deg]' /> */}

                        <Image
                            src={head}
                            alt="Payreb App"
                            width={400}
                            height={800}
                            quality={100}
                            priority
                            className="object-cover ltr:rotate-[32deg]"
                        />
                    </div>

                </div>
            </div>
        </header>


    </>
}
