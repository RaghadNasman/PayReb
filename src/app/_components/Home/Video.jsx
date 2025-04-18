'use client'

import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useTranslations } from 'next-intl';


export default function Video() {
    const playerRef = useRef(null)
    const [playing, setPlaying] = useState(false)
    const [overlayVisible, setOverlayVisible] = useState(true)

    const handleOverlayClick = () => {
        setOverlayVisible(false)
        setPlaying(true)
    }

    const t = useTranslations('HomePage.video');
    return <>
        <section id='video'>
            <div className="container mx-auto">
                <div className="title animate__animated animate__fadeInUp">
                    <h4 className='font-bold text-2xl md:text-4xl'>{t('titleH4')}</h4>
                    <p className='text-lg md:text-xl'>{t('titleP')}</p>
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                    <ReactPlayer
                        ref={playerRef}
                        url="/vid.mp4"
                        playing={playing}
                        width="100%"
                        height="100%"
                        controls={true}
                        className='rounded-2xl'
                    />

                    {overlayVisible && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
                            <button
                                onClick={handleOverlayClick}
                                className="relative flex items-center justify-center rounded-full w-[70px] h-[70px] bg-white/20 hover:bg-white/30 transition duration-300">
                                <i className="fas fa-play text-white text-3xl animate-pulse"></i>
                                <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </>
}








