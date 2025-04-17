'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const langMap = { 'ع': 'ar', 'EN': 'en', 'TR': 'tr' };
  const reverseLangMap = { ar: 'ع', en: 'EN', tr: 'TR' };
  const currentLocale = pathname.split('/')[1];
  const [selectedLang, setSelectedLang] = useState(reverseLangMap[currentLocale] || 'ع');

  const [langOpen, setLangOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const t = useTranslations('Navbar');
  const downloadLabel = t('downloadBtn');

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setLangOpen(false);
    const newLocale = langMap[lang];
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const toggleLang = () => {
    if (navOpen) setNavOpen(false);
    setLangOpen(!langOpen);
  };

  const toggleNav = () => {
    if (langOpen) setLangOpen(false);
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setLangOpen(false);
      setNavOpen(false);
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <nav className="h-[12vh]  relative z-50">
    <nav className={`h-[12vh] fixed top-0 left-0 w-full z-50 transition-all duration-300  ${scrolled ? ' bg-[#4141d979] border-white bg-opaci shadow-md backdrop-blur-md' : 'bg-transparent'}`}>

      <div className="container h-full mx-auto flex gap-3 items-center justify-between px-4">

        {/* Logo */}
        <div className="logo">
          <Image src={logo} alt="PayReb" width={200} height={200} quality={100} priority className='object-cover' />
        </div>

        {/* Links & Download button - Hidden in small screens */}
        <div className="flex justify-between w-full items-center gap-5 max-[1024px]:hidden">
          <ul className="flex justify-around items-center gap-5">
            <li><Link className="main-links" href="/">{t('links.0')}</Link></li>
            <li><Link className="main-links" href="/about">{t('links.1')}</Link></li>
            <li><Link className="main-links" href="/products">{t('links.2')}</Link></li>
            <li><Link className="main-links" href="/partners">{t('links.3')}</Link></li>
            <li><Link className="main-links" href="/contact">{t('links.4')}</Link></li>
            <li><Link className="main-links" href="/faq">{t('links.5')}</Link></li>
          </ul>
          <button className="nav-btn cursor-pointer text-[15px] btn py-2 px-5 rounded-full">{downloadLabel}</button>
        </div>
        <div className="flex gap-2 items-center">
          {/* Language Selector */}
          <div className="relative">
            <p
              onClick={toggleLang}
              className="flex gap-1 text-[15px] items-center justify-center cursor-pointer w-[42px] h-[42px] rounded-[50%] bg-white"
            >
              <span>{selectedLang}</span>
              <i className="fa-solid fa-angle-down"></i>
            </p>

            <div
              className={`absolute left-[50%] translate-x-[-50%] bg-white rounded-2xl shadow px-3 py-1 z-50 transition-all duration-300 transform ${langOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
            >
              <ul>
                {['ع', 'EN', 'TR'].map((lang, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleSelect(lang)}
                      className="text-[14px] px-2 py-1 rounded-full my-1 block w-full text-start hover:bg-gray-100"
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          {/* Hamburger Icon - Visible in small screens */}
          <button onClick={toggleNav} className="hidden max-[1024px]:block relative w-[32px] h-[32px]">
            <i
              className={`fa-solid fa-bars-staggered text-white text-2xl absolute inset-0 transition-all duration-300 transform ${navOpen ? 'opacity-0 scale-90 rotate-45' : 'opacity-100 scale-100 rotate-0'
                }`}
            ></i>
            <i
              className={`fa-solid fa-xmark text-white text-2xl absolute inset-0 transition-all duration-300 transform ${navOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-45'
                }`}
            ></i>
          </button>
        </div>
      </div>

      {/* Responsive Dropdown Menu */}
      
      <div
        className={`fixed top-[12vh] left-0 w-full z-40 px-4 py-5  shadow-lg transition-all duration-300 overflow-hidden transform 
    ${navOpen ? 'max-[1024px]:max-h-[500px] max-[1024px]:opacity-100 max-[1024px]:scale-100' : 'max-[1024px]:max-h-0 max-[1024px]:opacity-0 max-[1024px]:scale-95'} 
    ${scrolled ? 'gradient  rounded-t-0 rounded-b-xl' : 'bg-white/10 backdrop-blur-md rounded-xl border border-white/20'} 
    hidden max-[1024px]:block`}>
        <ul className="flex flex-col justify-center text-center gap-4 mb-4">
          <li><Link onClick={() => setNavOpen(false)} className="main-links block" href="/">{t('links.0')}</Link></li>
          <li><Link onClick={() => setNavOpen(false)} className="main-links block" href="/about">{t('links.1')}</Link></li>
          <li><Link onClick={() => setNavOpen(false)} className="main-links block" href="/products">{t('links.2')}</Link></li>
          <li><Link onClick={() => setNavOpen(false)} className="main-links block" href="/partners">{t('links.3')}</Link></li>
          <li><Link onClick={() => setNavOpen(false)} className="main-links block" href="/contact">{t('links.4')}</Link></li>
          <li><Link onClick={() => setNavOpen(false)} className="main-links block" href="/faq">{t('links.5')}</Link></li>
        </ul>
        <button className="nav-btn cursor-pointer text-[15px] btn py-2 px-3 rounded-full w-full">
          {downloadLabel}
        </button>
      </div>
      {/* )} */}
    </nav>
  );
}
