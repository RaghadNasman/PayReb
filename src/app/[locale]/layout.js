import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import localFont from 'next/font/local'
import './globals.css';
import 'animate.css';
import MetaHead from '../_components/MetaHead/MetaHead';
import Navbar from '../_components/navbar/Navbar';

const font = localFont({
  src: [
    {
      path: '../../../public/fonts/alfont_com_AlFont_com_CAREEM-REGULAR.DB5F2BCA26992ED25A89.otf',
      weight: '400',
      // style: 'normal',
    },
    {
      path: '../../../public/fonts/CAREEM-BOLD.4E85A226FB03BDDC2CB7.otf',
      weight: '600',
      // style: 'italic',
    },
  ],
})
export default async function LocaleLayout({children, params}) {
  const locale = params?.locale;

  // تأكد إنو اللغة موجودة ضمن اللغات المتاحة
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      
      <body className={font.className}>
        <NextIntlClientProvider locale={locale}>
        <MetaHead />
        <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


