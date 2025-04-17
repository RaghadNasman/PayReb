import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
// import Navbar from '../_components/navbar/Navbar';
import Header from '../_components/Home/Header';
import About from '../_components/Home/About';
import Features from '../_components/Home/Features';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return <>
  
   <Header />
   <About />
   <Features />
 
  </>
}