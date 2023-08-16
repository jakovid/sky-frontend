import { TeachersContextProvider } from '../context/TeacherContext';
import { LanguageContextProvider } from '../context/LanguageContext';
import { ContentsContextProvider } from '../context/ContentContext';
import { WebImagesContextProvider } from '../context/WebImageContext';
import '@/styles/globals.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        </Head>
        <TeachersContextProvider>
            <LanguageContextProvider>
                <ContentsContextProvider>
                    <WebImagesContextProvider>
                        <Component {...pageProps} />
                    </WebImagesContextProvider>
                </ContentsContextProvider>
            </LanguageContextProvider>
        </TeachersContextProvider>
    </>
  )
}