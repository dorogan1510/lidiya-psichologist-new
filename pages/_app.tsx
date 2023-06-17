import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../globalComponents/Header'
import createEmotionCache from '../src/createEmotionCache'
import '../styles/globals.scss'
import theme from '../styles/theme'

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
                <title>Психолог Лидия Сердюк</title>
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
