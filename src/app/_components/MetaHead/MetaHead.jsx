"use client";
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function MetaHead() {
  const t = useTranslations('meta');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <Head>
      {/* اللغة واتجاه النص */}
      <html lang={locale} dir={dir} />

      {/* SEO Basic */}
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="../../locale/favicon.ico" />

      {/* OG Social */}
      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('description')} />
      {/* <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://payreb.com" />
      <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
}
