import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
// import Navbar from '../_components/navbar/Navbar';
import Header from '../_components/Home/Header';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return <>
  {/* <header className='h-[100vh]'>
    <Navbar /> */}
   <Header />

  {/* </header> */}
  </>
}