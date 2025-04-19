import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
// import Navbar from '../_components/navbar/Navbar';
import Header from '../_components/Home/Header';
import About from '../_components/Home/About';
import Features from '../_components/Home/Features';
import Video from '../_components/Home/Video';
import Ready from '../_components/Home/Ready';
import Privacy from '../_components/Home/Privacy';
import Win from '../_components/Home/Win';
import Partner from '../_components/Home/Partner';
import Customers from '../_components/Home/Customers';
import Questions from '../_components/Home/Questions';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return <>
  
   <Header />
   <About />
   <Ready />
   <Features />
   <Video />
   <Privacy />
   <Win />
   <Partner />
   <Customers />
   <Questions />
 
  </>
}