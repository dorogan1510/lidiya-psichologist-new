import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../styles/theme'
import createEmotionCache from '../src/createEmotionCache'
import '../styles/globals.scss'
import Header from '../globalComponents/Header'
import Footer from '../globalComponents/Footer1'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name='viewport'
                    content='initial-scale=1, width=device-width'
                />
                <link rel='shortcut icon' href='/favicon.ico' />
                <title>Психолог Лидия Сердюк.</title>
                <meta
                    name='description'
                    content='Cамая важная встреча — это встреча с самим с собой'
                />
                <meta
                    name='keywords'
                    content='Психология психолог запись на прием Лидия Сердюк онлайн спб Санкт-Петербург'
                />
                <meta name='author' content='Lidiya Serduk' />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Header />

                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}
