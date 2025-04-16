'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

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
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="h-[12vh]  relative z-50">
      <div className="container h-full mx-auto flex gap-3 items-center justify-between px-4">

        {/* Logo */}
        <div className="logo">
          <Image src={logo} alt="PayReb" width={130} />
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
        <div className="flex gap-2">
          {/* Language Selector */}
          <div className="relative">
            <p
              onClick={toggleLang}
              className="flex gap-1 text-[15px] items-center justify-center cursor-pointer w-[42px] h-[42px] rounded-[50%] bg-white"
            >
              <span>{selectedLang}</span>
              <i className="fa-solid fa-angle-down"></i>
            </p>

            {langOpen && (
              <ul className="absolute left-[50%] translate-x-[-50%] bg-white rounded-2xl shadow px-3 py-1 z-50">
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
            )}
          </div>

          {/* Hamburger Icon - Visible in small screens */}
          <button onClick={toggleNav} className="hidden max-[1024px]:block">
            <i className="fa-solid fa-bars-staggered text-white text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Responsive Dropdown Menu */}
      {navOpen && (
        <div className="max-[1024px]:block hidden fixed top-[12vh] left-0 w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 shadow z-40 px-4 py-5 transition-all duration-300">
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
      )}
    </nav>
  );
}
