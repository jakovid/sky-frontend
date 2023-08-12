import { TeachersContextProvider } from '../context/TeacherContext';
import { LanguageContextProvider } from '../context/LanguageContext';
import { ContentsContextProvider } from '../context/ContentContext';
import { WebImagesContextProvider } from '../context/WebImageContext';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <TeachersContextProvider>
            <LanguageContextProvider>
                <ContentsContextProvider>
                    <WebImagesContextProvider>
                        <Component {...pageProps} />
                    </WebImagesContextProvider>
                </ContentsContextProvider>
            </LanguageContextProvider>
        </TeachersContextProvider>
  )
}